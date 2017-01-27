'use strict';
const Promise = require('bluebird');
const rp = require('./protocol').remote;
const proc = rp.remote_procedure;

class Interface {
  constructor(conn, attr) {
    this.conn = conn;
    this.ref = new rp.remote_nonnull_interface(attr);
  }
}

/**
 *
 * @param iface
 * @param flags
 * @param [callback]
 */
Interface.prototype.getXmlDesc = function(flags, callback) {
  let args = new rp.remote_interface_get_xml_desc_args({
    iface: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_INTERFACE_GET_XML_DESC(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_interface_get_xml_desc_ret.fromXDR(payload);
      result = result.xml();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param xml
 * @param flags
 * @param [callback]
 */
Interface.prototype.defineXml = function(xml, flags, callback) {
  let args = new rp.remote_interface_define_xml_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_INTERFACE_DEFINE_XML(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_interface_define_xml_ret.fromXDR(payload);
      result = result.iface();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param iface
 * @param [callback]
 */
Interface.prototype.undefine = function(callback) {
  let args = new rp.remote_interface_undefine_args({
    iface: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_INTERFACE_UNDEFINE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param iface
 * @param flags
 * @param [callback]
 */
Interface.prototype.create = function(flags, callback) {
  let args = new rp.remote_interface_create_args({
    iface: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_INTERFACE_CREATE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param iface
 * @param flags
 * @param [callback]
 */
Interface.prototype.destroy = function(flags, callback) {
  let args = new rp.remote_interface_destroy_args({
    iface: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_INTERFACE_DESTROY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param flags
 * @param [callback]
 */
Interface.prototype.changeBegin = function(flags, callback) {
  let args = new rp.remote_interface_change_begin_args({
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_INTERFACE_CHANGE_BEGIN(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param flags
 * @param [callback]
 */
Interface.prototype.changeCommit = function(flags, callback) {
  let args = new rp.remote_interface_change_commit_args({
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_INTERFACE_CHANGE_COMMIT(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param flags
 * @param [callback]
 */
Interface.prototype.changeRollback = function(flags, callback) {
  let args = new rp.remote_interface_change_rollback_args({
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_INTERFACE_CHANGE_ROLLBACK(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param iface
 * @param [callback]
 */
Interface.prototype.isActive = function(callback) {
  let args = new rp.remote_interface_is_active_args({
    iface: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_INTERFACE_IS_ACTIVE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_interface_is_active_ret.fromXDR(payload);
      result = result.active();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

module.exports = Interface;
