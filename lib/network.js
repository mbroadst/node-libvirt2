'use strict';
const Promise = require('bluebird');
const rp = require('./protocol').remote;
const proc = rp.remote_procedure;

class Network {
  constructor(conn, attr) {
    this.conn = conn;
    this.ref = new rp.remote_nonnull_network(attr);
  }
}

/**
 *
 * @param xml
 * @param [callback]
 */
Network.prototype.defineXml = function(xml, callback) {
  let args = new rp.remote_network_define_xml_args({
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_DEFINE_XML(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_define_xml_ret.fromXDR(payload);
      result = result.net();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.undefine = function(callback) {
  let args = new rp.remote_network_undefine_args({
    net: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_UNDEFINE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param command
 * @param section
 * @param parentIndex
 * @param xml
 * @param flags
 * @param [callback]
 */
Network.prototype.update = function(command, section, parentIndex, xml, flags, callback) {
  let args = new rp.remote_network_update_args({
    net: this.ref,
    command: command,
    section: section,
    parentIndex: parentIndex,
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_UPDATE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.create = function(callback) {
  let args = new rp.remote_network_create_args({
    net: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_CREATE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.destroy = function(callback) {
  let args = new rp.remote_network_destroy_args({
    net: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_DESTROY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param flags
 * @param [callback]
 */
Network.prototype.getXmlDesc = function(flags, callback) {
  let args = new rp.remote_network_get_xml_desc_args({
    net: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_GET_XML_DESC(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_get_xml_desc_ret.fromXDR(payload);
      result = result.xml();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.getBridgeName = function(callback) {
  let args = new rp.remote_network_get_bridge_name_args({
    net: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_GET_BRIDGE_NAME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_get_bridge_name_ret.fromXDR(payload);
      result = result.name();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.getAutostart = function(callback) {
  let args = new rp.remote_network_get_autostart_args({
    net: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_GET_AUTOSTART(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_get_autostart_ret.fromXDR(payload);
      result = result.autostart();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param autostart
 * @param [callback]
 */
Network.prototype.setAutostart = function(autostart, callback) {
  let args = new rp.remote_network_set_autostart_args({
    net: this.ref,
    autostart: autostart
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_SET_AUTOSTART(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.isActive = function(callback) {
  let args = new rp.remote_network_is_active_args({
    net: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_IS_ACTIVE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_is_active_ret.fromXDR(payload);
      result = result.active();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.isPersistent = function(callback) {
  let args = new rp.remote_network_is_persistent_args({
    net: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_IS_PERSISTENT(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_is_persistent_ret.fromXDR(payload);
      result = result.persistent();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param mac
 * @param needResults
 * @param flags
 * @param [callback]
 */
Network.prototype.getDhcpLeases = function(mac, needResults, flags, callback) {
  let args = new rp.remote_network_get_dhcp_leases_args({
    net: this.ref,
    mac: mac,
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NETWORK_GET_DHCP_LEASES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_get_dhcp_leases_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

module.exports = Network;
