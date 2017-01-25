'use strict';
const rp = {};
const proc = rp.remote_procedure;

function Auth() {}

/**
 *
 * @param [callback]
 */
Auth.prototype.list = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_AUTH_LIST(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_auth_list_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param [callback]
 */
Auth.prototype.saslInit = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_AUTH_SASL_INIT(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_auth_sasl_init_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param mech
 * @param nil
 * @param data
 * @param [callback]
 */
Auth.prototype.saslStart = function(mech, nil, data, callback) {
  let data = new rp.remote_auth_sasl_start_args({
    mech: mech,
    nil: nil,
    data: data
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_AUTH_SASL_START(), data.toXDR(), (err, payload) => {
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
 * @param nil
 * @param data
 * @param [callback]
 */
Auth.prototype.saslStep = function(nil, data, callback) {
  let data = new rp.remote_auth_sasl_step_args({
    nil: nil,
    data: data
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_AUTH_SASL_STEP(), data.toXDR(), (err, payload) => {
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
 * @param [callback]
 */
Auth.prototype.polkit = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_AUTH_POLKIT(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_auth_polkit_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};
