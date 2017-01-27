'use strict';
const Promise = require('bluebird');
const rp = require('./protocol').remote;
const proc = rp.remote_procedure;

class StorageVol {
  constructor(conn, attr) {
    this.conn = conn;
    this.ref = new rp.remote_nonnull_storage_vol(attr);
  }
}

/**
 *
 * @param pool
 * @param xml
 * @param clonevol
 * @param flags
 * @param [callback]
 */
StorageVol.prototype.createXmlFrom = function(pool, xml, clonevol, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_storage_vol_create_xml_from_args({
    pool: pool,
    xml: xml,
    clonevol: clonevol,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_CREATE_XML_FROM(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_create_xml_from_ret.fromXDR(payload);
      result = result.vol();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param flags
 * @param [callback]
 */
StorageVol.prototype.delete = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_storage_vol_delete_args({
    vol: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_DELETE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param flags
 * @param [callback]
 */
StorageVol.prototype.wipe = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_storage_vol_wipe_args({
    vol: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_WIPE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param algorithm
 * @param flags
 * @param [callback]
 */
StorageVol.prototype.wipePattern = function(algorithm, flags, callback) {
  algorithm = algorithm || 0;
  flags = flags || 0;
  let args = new rp.remote_storage_vol_wipe_pattern_args({
    vol: this.ref,
    algorithm: algorithm,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_WIPE_PATTERN(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param flags
 * @param [callback]
 */
StorageVol.prototype.getXmlDesc = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_storage_vol_get_xml_desc_args({
    vol: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_GET_XML_DESC(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_get_xml_desc_ret.fromXDR(payload);
      result = result.xml();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param [callback]
 */
StorageVol.prototype.getInfo = function(callback) {

  let args = new rp.remote_storage_vol_get_info_args({
    vol: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_GET_INFO(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_get_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param flags
 * @param [callback]
 */
StorageVol.prototype.getInfoFlags = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_storage_vol_get_info_flags_args({
    vol: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_GET_INFO_FLAGS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_get_info_flags_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param [callback]
 */
StorageVol.prototype.getPath = function(callback) {

  let args = new rp.remote_storage_vol_get_path_args({
    vol: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_GET_PATH(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_get_path_ret.fromXDR(payload);
      result = result.name();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param capacity
 * @param flags
 * @param [callback]
 */
StorageVol.prototype.resize = function(capacity, flags, callback) {
  capacity = capacity || 0;
  flags = flags || 0;
  let args = new rp.remote_storage_vol_resize_args({
    vol: this.ref,
    capacity: capacity,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_RESIZE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param offset
 * @param length
 * @param flags
 * @param [callback]
 */
StorageVol.prototype.upload = function(offset, length, flags, callback) {
  offset = offset || 0;
  length = length || 0;
  flags = flags || 0;
  let args = new rp.remote_storage_vol_upload_args({
    vol: this.ref,
    offset: offset,
    length: length,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_UPLOAD(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param offset
 * @param length
 * @param flags
 * @param [callback]
 */
StorageVol.prototype.download = function(offset, length, flags, callback) {
  offset = offset || 0;
  length = length || 0;
  flags = flags || 0;
  let args = new rp.remote_storage_vol_download_args({
    vol: this.ref,
    offset: offset,
    length: length,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_VOL_DOWNLOAD(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

module.exports = StorageVol;
