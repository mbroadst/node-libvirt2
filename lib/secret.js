'use strict';
const rp = {};
const proc = rp.remote_procedure;

function Secret() {}

/**
 *
 * @param xml
 * @param flags
 * @param [callback]
 */
Secret.prototype.defineXml = function(xml, flags, callback) {
  let data = new rp.remote_secret_define_xml_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_SECRET_DEFINE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_secret_define_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param secret
 * @param flags
 * @param [callback]
 */
Secret.prototype.getXmlDesc = function(secret, flags, callback) {
  let data = new rp.remote_secret_get_xml_desc_args({
    secret: secret,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_SECRET_GET_XML_DESC(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_secret_get_xml_desc_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param secret
 * @param value
 * @param flags
 * @param [callback]
 */
Secret.prototype.setValue = function(secret, value, flags, callback) {
  let data = new rp.remote_secret_set_value_args({
    secret: secret,
    value: value,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_SECRET_SET_VALUE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param secret
 * @param flags
 * @param [callback]
 */
Secret.prototype.getValue = function(secret, flags, callback) {
  let data = new rp.remote_secret_get_value_args({
    secret: secret,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_SECRET_GET_VALUE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_secret_get_value_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param secret
 * @param [callback]
 */
Secret.prototype.undefine = function(secret, callback) {
  let data = new rp.remote_secret_undefine_args({
    secret: secret
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_SECRET_UNDEFINE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

