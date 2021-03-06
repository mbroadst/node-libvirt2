'use strict';
const Promise = require('bluebird');
const rp = require('./protocol').remote;
const proc = rp.remote_procedure;

class Secret {
  constructor(conn, attr) {
    this.conn = conn;
    this.ref = new rp.remote_nonnull_secret(attr);
  }
}

/**
 *
 * @param {String} xml
 * @param {Number} flags
 * @param {Function} [callback]
 */
Secret.prototype.defineXml = function(xml, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_secret_define_xml_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_SECRET_DEFINE_XML(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_secret_define_xml_ret.fromXDR(payload);
      result = result.secret();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {Number} flags
 * @param {Function} [callback]
 */
Secret.prototype.getXmlDesc = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_secret_get_xml_desc_args({
    secret: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_SECRET_GET_XML_DESC(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_secret_get_xml_desc_ret.fromXDR(payload);
      result = result.xml();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {Object} value
 * @param {Number} flags
 * @param {Function} [callback]
 */
Secret.prototype.setValue = function(value, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_secret_set_value_args({
    secret: this.ref,
    value: value,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_SECRET_SET_VALUE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {Number} flags
 * @param {Function} [callback]
 */
Secret.prototype.getValue = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_secret_get_value_args({
    secret: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_SECRET_GET_VALUE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_secret_get_value_ret.fromXDR(payload);
      result = result.value();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {Function} [callback]
 */
Secret.prototype.undefine = function(callback) {

  let args = new rp.remote_secret_undefine_args({
    secret: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_SECRET_UNDEFINE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

module.exports = Secret;
