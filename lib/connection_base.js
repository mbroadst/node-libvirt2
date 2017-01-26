'use strict';

const EventEmitter = require('events'),
      BufferList = require('bl'),
      errors = require('./errors'),
      net = require('net'),
      np = require('./protocol').network,
      rp = require('./protocol').remote;

// constants
const PACKET_LENGTH_SIZE = 4; // packet length field length, in bytes.
const HEADER_SIZE = 24;       // packet header field length, in bytes.

class ConnectionBase extends EventEmitter {
  constructor() {
    super();
    this.serial = 0;
    this.requests = {};
    this.buffer = new BufferList();
  }
}

const connectHandler = function(connection) {
  return function() {
    connection.open('qemu:///system', 0)
      .then(() => connection.emit('connected'))
      .catch(err => connection.emit('error', err));
  };
};

const dataHandler = function(connection) {
  return function(data) {
    connection.buffer.append(data);

    while (true) {
      if (connection.buffer.length < PACKET_LENGTH_SIZE) return;
      let size = connection.buffer.readUInt32BE(0);
      if (connection.buffer.length < size) return;

      let header = np.virNetMessageHeader.fromXDR(
        connection.buffer.slice(PACKET_LENGTH_SIZE, PACKET_LENGTH_SIZE + HEADER_SIZE));

      let payload;
      if (size > PACKET_LENGTH_SIZE + HEADER_SIZE) {
        payload = connection.buffer.slice(PACKET_LENGTH_SIZE + HEADER_SIZE,
          PACKET_LENGTH_SIZE + HEADER_SIZE + size);
      }

      connection.buffer.consume(PACKET_LENGTH_SIZE + HEADER_SIZE + size);

      let status = header.status();
      let serial = header.serial();

      if (!connection.requests.hasOwnProperty(serial)) {
        console.log('invalid serial provided for reply (event?): ' + serial);
        continue;
      }

      let callback = connection.requests[serial];
      delete connection.requests[serial];
      if (status === np.virNetMessageStatus.VIR_NET_OK()) {
        callback(null, payload);
      } else if (status === np.virNetMessageStatus.VIR_NET_ERROR()) {
        let error = rp.remote_error.fromXDR(payload);
        callback(new errors.ProtocolError(error._attributes));
      }
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

ConnectionBase.prototype.connect = function(address, callback) {
  EventEmitter.call(this);
  this.socket = net.connect(address, connectHandler(this));
  this.socket.on('data', dataHandler(this));
  this.socket.on('error', errorHandler(this));
  this.socket.once('timeout', timeoutHandler(this));
  this.socket.once('close', closeHandler(this));

  this.once('connected', () => { callback(null); });
  this.once('error', err => { callback(err, null); });
};

ConnectionBase.prototype.request = function(procedure, data, callback) {
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

module.exports = ConnectionBase;
