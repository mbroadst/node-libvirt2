'use strict';

const Promise = require('bluebird'),
      EventEmitter = require('events'),
      errors = require('./errors'),
      net = require('net'),
      np = require('./protocol').network,
      rp = require('./protocol').remote,
      proc = rp.remote_procedure;

// constants
const PACKET_LENGTH_SIZE = 4; // packet length field length, in bytes.
const HEADER_SIZE = 24;       // packet header field length, in bytes.

const connectHandler = function(connection) {
  return function() {
    let data = new np.remote_connect_open_args({
      name: 'qemu:///system',
      flags: 0
    });

    connection.request(proc.REMOTE_PROC_CONNECT_OPEN(), data.toXDR(), (err, result) => {
      if (err) {
        connection.emit('error', err);
        return;
      }

      connection.emit('connected');
    });
  };
};

const dataHandler = function(connection) {
  return function(data) {
    let size = data.readUInt32BE(0);
    let header =
      np.virNetMessageHeader.fromXDR(data.slice(PACKET_LENGTH_SIZE, PACKET_LENGTH_SIZE + HEADER_SIZE));

    let payload;
    if (size > PACKET_LENGTH_SIZE + HEADER_SIZE) {
      payload =
        data.slice(PACKET_LENGTH_SIZE + HEADER_SIZE, PACKET_LENGTH_SIZE + HEADER_SIZE + size);
    }

    let status = header.status();
    let serial = header.serial();

    if (!connection.requests.hasOwnProperty(serial)) {
      throw new Error('invalid serial provided for reply: ' + serial);
    }

    let callback = connection.requests[serial];
    delete connection.requests[serial];
    if (status === np.virNetMessageStatus.VIR_NET_OK()) {
      callback(null, payload);
    } else if (status === np.virNetMessageStatus.VIR_NET_ERROR()) {
      let error = rp.remote_error.fromXDR(payload);
      callback(new errors.ProtocolError(error._attributes));
    }
  };
};

const errorHandler = function(connection) {
  return function(error) {
    console.log('error: ', error);
  };
};

const timeoutHandler = function(self) {
  return function() {
    console.log('timed out');
  };
};

const closeHandler = function(self) {
  return function(hadError) {
    console.log('closed, hadError: ', hadError);
  };
};

class Connection extends EventEmitter {
  constructor() {
    super();
    this.serial = 0;
    this.requests = {};
  }
}

Connection.prototype.connect = function(address, callback) {
  EventEmitter.call(this);
  this.socket = net.connect(address, connectHandler(this));
  this.socket.on('data', dataHandler(this));
  this.socket.on('error', errorHandler(this));
  this.socket.once('timeout', timeoutHandler(this));
  this.socket.once('close', closeHandler(this));

  this.once('connected', () => { callback(null); });
  this.once('error', err => { callback(err, null); });
};

Connection.prototype.request = function(procedure, data, callback) {
  let serial = ++this.serial;
  this.requests[serial] = callback;

  let header = new np.virNetMessageHeader({
    prog: rp.REMOTE_PROGRAM,
    vers: rp.REMOTE_PROTOCOL_VERSION,
    proc: (typeof procedure.value !== 'undefined') ? procedure.value : procedure,
    type: np.virNetMessageType.VIR_NET_CALL(),
    serial: serial,
    status: np.virNetMessageStatus.VIR_NET_OK()
  });

  let size = PACKET_LENGTH_SIZE + HEADER_SIZE;
  if (!!data) size += data.length;

  let sizeBuffer = Buffer.alloc(PACKET_LENGTH_SIZE);
  sizeBuffer.writeUInt32BE(size);

  this.socket.write(sizeBuffer);
  this.socket.write(header.toXDR());
  if (!!data) this.socket.write(data);
};

Connection.prototype.listAllDomains = function(needResults, flags, callback) {
  let data = new rp.remote_connect_list_all_domains_args({
    need_results: 1, flags: 0
  });

  this.request(proc.REMOTE_PROC_CONNECT_LIST_ALL_DOMAINS(), data.toXDR(), (err, result) => {
    if (err) {
      console.log('error: ');
      console.dir(err, { depth: null });
      return;
    }

    console.log('result: ');
    console.dir(result, { depth: null });
  });
};

Connection.prototype.getVersion = function(callback) {
  this.request(proc.REMOTE_PROC_CONNECT_GET_VERSION(), null, (err, payload) => {
    if (err) {
      callback(err, null);
      return;
    }

    let result = rp.remote_connect_get_version_ret.fromXDR(payload);
    callback(null, result);
  });
};

Connection.prototype.getHostname = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_HOSTNAME(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_hostname_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

Connection.prototype.getSysinfo = function(flags, callback) {
  let data = new rp.remote_connect_get_sysinfo_args({
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_SYSINFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_sysinfo_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

module.exports = Connection;
