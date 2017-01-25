'use strict';
const rp = {};
const proc = rp.remote_procedure;

class StoragePool {
  constructor(conn, attr) {
    this.conn = conn;
    this.ref = new rp.remote_storage_pool(attr);
  }
}

/**
 *
 * @param xml
 * @param flags
 * @param [callback]
 */
StoragePool.prototype.createXml = function(xml, flags, callback) {
  let data = new rp.remote_storage_pool_create_xml_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_CREATE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_create_xml_ret.fromXDR(payload);
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
StoragePool.prototype.defineXml = function(xml, flags, callback) {
  let data = new rp.remote_storage_pool_define_xml_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_DEFINE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_define_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param flags
 * @param [callback]
 */
StoragePool.prototype.build = function(flags, callback) {
  let data = new rp.remote_storage_pool_build_args({
    pool: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_BUILD(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param [callback]
 */
StoragePool.prototype.undefine = function(callback) {
  let data = new rp.remote_storage_pool_undefine_args({
    pool: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_UNDEFINE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param flags
 * @param [callback]
 */
StoragePool.prototype.create = function(flags, callback) {
  let data = new rp.remote_storage_pool_create_args({
    pool: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_CREATE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param [callback]
 */
StoragePool.prototype.destroy = function(callback) {
  let data = new rp.remote_storage_pool_destroy_args({
    pool: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_DESTROY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param flags
 * @param [callback]
 */
StoragePool.prototype.delete = function(flags, callback) {
  let data = new rp.remote_storage_pool_delete_args({
    pool: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_DELETE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param flags
 * @param [callback]
 */
StoragePool.prototype.refresh = function(flags, callback) {
  let data = new rp.remote_storage_pool_refresh_args({
    pool: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_REFRESH(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param flags
 * @param [callback]
 */
StoragePool.prototype.getXmlDesc = function(flags, callback) {
  let data = new rp.remote_storage_pool_get_xml_desc_args({
    pool: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_GET_XML_DESC(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_get_xml_desc_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param [callback]
 */
StoragePool.prototype.getInfo = function(callback) {
  let data = new rp.remote_storage_pool_get_info_args({
    pool: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_GET_INFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_get_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param [callback]
 */
StoragePool.prototype.getAutostart = function(callback) {
  let data = new rp.remote_storage_pool_get_autostart_args({
    pool: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_GET_AUTOSTART(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_get_autostart_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param autostart
 * @param [callback]
 */
StoragePool.prototype.setAutostart = function(autostart, callback) {
  let data = new rp.remote_storage_pool_set_autostart_args({
    pool: this.ref,
    autostart: autostart
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_SET_AUTOSTART(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param [callback]
 */
StoragePool.prototype.numOfVolumes = function(callback) {
  let data = new rp.remote_storage_pool_num_of_volumes_args({
    pool: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_NUM_OF_VOLUMES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_num_of_volumes_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param maxnames
 * @param [callback]
 */
StoragePool.prototype.listVolumes = function(maxnames, callback) {
  let data = new rp.remote_storage_pool_list_volumes_args({
    pool: this.ref,
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_LIST_VOLUMES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_list_volumes_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param [callback]
 */
StoragePool.prototype.isActive = function(callback) {
  let data = new rp.remote_storage_pool_is_active_args({
    pool: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_IS_ACTIVE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_is_active_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param [callback]
 */
StoragePool.prototype.isPersistent = function(callback) {
  let data = new rp.remote_storage_pool_is_persistent_args({
    pool: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_IS_PERSISTENT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_is_persistent_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param needResults
 * @param flags
 * @param [callback]
 */
StoragePool.prototype.listAllVolumes = function(needResults, flags, callback) {
  let data = new rp.remote_storage_pool_list_all_volumes_args({
    pool: this.ref,
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_STORAGE_POOL_LIST_ALL_VOLUMES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_list_all_volumes_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

