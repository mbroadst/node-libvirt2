'use strict';
const Promise = require('bluebird');
const rp = require('./protocol').remote;
const proc = rp.remote_procedure;

class Auth {
  constructor(conn, attr) {
    this.conn = conn;
    this.ref = new rp.remote_nonnull_auth(attr);
  }
}

/**
 *
 * @param {Function} [callback]
 */
Auth.prototype.list = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_AUTH_LIST(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_auth_list_ret.fromXDR(payload);
      result = result.types();
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
Auth.prototype.saslInit = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_AUTH_SASL_INIT(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_auth_sasl_init_ret.fromXDR(payload);
      result = result.mechlist();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} mech
 * @param {Number} nil
 * @param {Object} data
 * @param {Function} [callback]
 */
Auth.prototype.saslStart = function(mech, nil, data, callback) {
  nil = nil || 0;
  let args = new rp.remote_auth_sasl_start_args({
    mech: mech,
    nil: nil,
    data: data
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_AUTH_SASL_START(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_auth_sasl_start_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {Number} nil
 * @param {Object} data
 * @param {Function} [callback]
 */
Auth.prototype.saslStep = function(nil, data, callback) {
  nil = nil || 0;
  let args = new rp.remote_auth_sasl_step_args({
    nil: nil,
    data: data
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_AUTH_SASL_STEP(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_auth_sasl_step_ret.fromXDR(payload);
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
Auth.prototype.polkit = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_AUTH_POLKIT(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_auth_polkit_ret.fromXDR(payload);
      result = result.complete();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

module.exports = Auth;
