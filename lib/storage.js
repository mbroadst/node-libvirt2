'use strict';
const rp = {};
const proc = rp.remote_procedure;

function Storage() {}

/**
 *
 * @param uuid
 * @param [callback]
 */
Storage.prototype.poolLookupByUuid = function(uuid, callback) {
  let data = new rp.remote_storage_pool_lookup_by_uuid_args({
    uuid: uuid
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_LOOKUP_BY_UUID(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_lookup_by_uuid_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param [callback]
 */
Storage.prototype.poolLookupByName = function(name, callback) {
  let data = new rp.remote_storage_pool_lookup_by_name_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_LOOKUP_BY_NAME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_lookup_by_name_ret.fromXDR(payload);
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
Storage.prototype.poolLookupByVolume = function(vol, callback) {
  let data = new rp.remote_storage_pool_lookup_by_volume_args({
    vol: vol
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_LOOKUP_BY_VOLUME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_lookup_by_volume_ret.fromXDR(payload);
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
Storage.prototype.poolCreateXml = function(xml, flags, callback) {
  let data = new rp.remote_storage_pool_create_xml_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_CREATE_XML(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolDefineXml = function(xml, flags, callback) {
  let data = new rp.remote_storage_pool_define_xml_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_DEFINE_XML(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolBuild = function(pool, flags, callback) {
  let data = new rp.remote_storage_pool_build_args({
    pool: pool,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_BUILD(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolUndefine = function(pool, callback) {
  let data = new rp.remote_storage_pool_undefine_args({
    pool: pool
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_UNDEFINE(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolCreate = function(pool, flags, callback) {
  let data = new rp.remote_storage_pool_create_args({
    pool: pool,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_CREATE(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolDestroy = function(pool, callback) {
  let data = new rp.remote_storage_pool_destroy_args({
    pool: pool
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_DESTROY(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolDelete = function(pool, flags, callback) {
  let data = new rp.remote_storage_pool_delete_args({
    pool: pool,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_DELETE(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolRefresh = function(pool, flags, callback) {
  let data = new rp.remote_storage_pool_refresh_args({
    pool: pool,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_REFRESH(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolGetXmlDesc = function(pool, flags, callback) {
  let data = new rp.remote_storage_pool_get_xml_desc_args({
    pool: pool,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_GET_XML_DESC(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolGetInfo = function(pool, callback) {
  let data = new rp.remote_storage_pool_get_info_args({
    pool: pool
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_GET_INFO(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolGetAutostart = function(pool, callback) {
  let data = new rp.remote_storage_pool_get_autostart_args({
    pool: pool
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_GET_AUTOSTART(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolSetAutostart = function(pool, autostart, callback) {
  let data = new rp.remote_storage_pool_set_autostart_args({
    pool: pool,
    autostart: autostart
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_SET_AUTOSTART(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolNumOfVolumes = function(pool, callback) {
  let data = new rp.remote_storage_pool_num_of_volumes_args({
    pool: pool
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_NUM_OF_VOLUMES(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolListVolumes = function(pool, maxnames, callback) {
  let data = new rp.remote_storage_pool_list_volumes_args({
    pool: pool,
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_LIST_VOLUMES(), data.toXDR(), (err, payload) => {
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
 * @param name
 * @param [callback]
 */
Storage.prototype.volLookupByName = function(pool, name, callback) {
  let data = new rp.remote_storage_vol_lookup_by_name_args({
    pool: pool,
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_LOOKUP_BY_NAME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_lookup_by_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param key
 * @param [callback]
 */
Storage.prototype.volLookupByKey = function(key, callback) {
  let data = new rp.remote_storage_vol_lookup_by_key_args({
    key: key
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_LOOKUP_BY_KEY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_lookup_by_key_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param path
 * @param [callback]
 */
Storage.prototype.volLookupByPath = function(path, callback) {
  let data = new rp.remote_storage_vol_lookup_by_path_args({
    path: path
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_LOOKUP_BY_PATH(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_lookup_by_path_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param xml
 * @param flags
 * @param [callback]
 */
Storage.prototype.volCreateXml = function(pool, xml, flags, callback) {
  let data = new rp.remote_storage_vol_create_xml_args({
    pool: pool,
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_CREATE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_create_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pool
 * @param xml
 * @param clonevol
 * @param flags
 * @param [callback]
 */
Storage.prototype.volCreateXmlFrom = function(pool, xml, clonevol, flags, callback) {
  let data = new rp.remote_storage_vol_create_xml_from_args({
    pool: pool,
    xml: xml,
    clonevol: clonevol,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_CREATE_XML_FROM(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_create_xml_from_ret.fromXDR(payload);
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
Storage.prototype.volDelete = function(vol, flags, callback) {
  let data = new rp.remote_storage_vol_delete_args({
    vol: vol,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_DELETE(), data.toXDR(), (err, payload) => {
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
Storage.prototype.volWipe = function(vol, flags, callback) {
  let data = new rp.remote_storage_vol_wipe_args({
    vol: vol,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_WIPE(), data.toXDR(), (err, payload) => {
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
Storage.prototype.volWipePattern = function(vol, algorithm, flags, callback) {
  let data = new rp.remote_storage_vol_wipe_pattern_args({
    vol: vol,
    algorithm: algorithm,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_WIPE_PATTERN(), data.toXDR(), (err, payload) => {
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
Storage.prototype.volGetXmlDesc = function(vol, flags, callback) {
  let data = new rp.remote_storage_vol_get_xml_desc_args({
    vol: vol,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_GET_XML_DESC(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_get_xml_desc_ret.fromXDR(payload);
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
Storage.prototype.volGetInfo = function(vol, callback) {
  let data = new rp.remote_storage_vol_get_info_args({
    vol: vol
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_GET_INFO(), data.toXDR(), (err, payload) => {
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
Storage.prototype.volGetInfoFlags = function(vol, flags, callback) {
  let data = new rp.remote_storage_vol_get_info_flags_args({
    vol: vol,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_GET_INFO_FLAGS(), data.toXDR(), (err, payload) => {
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
Storage.prototype.volGetPath = function(vol, callback) {
  let data = new rp.remote_storage_vol_get_path_args({
    vol: vol
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_GET_PATH(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_vol_get_path_ret.fromXDR(payload);
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
Storage.prototype.volResize = function(vol, capacity, flags, callback) {
  let data = new rp.remote_storage_vol_resize_args({
    vol: vol,
    capacity: capacity,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_RESIZE(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolIsActive = function(pool, callback) {
  let data = new rp.remote_storage_pool_is_active_args({
    pool: pool
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_IS_ACTIVE(), data.toXDR(), (err, payload) => {
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
Storage.prototype.poolIsPersistent = function(pool, callback) {
  let data = new rp.remote_storage_pool_is_persistent_args({
    pool: pool
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_IS_PERSISTENT(), data.toXDR(), (err, payload) => {
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
 * @param vol
 * @param offset
 * @param length
 * @param flags
 * @param [callback]
 */
Storage.prototype.volUpload = function(vol, offset, length, flags, callback) {
  let data = new rp.remote_storage_vol_upload_args({
    vol: vol,
    offset: offset,
    length: length,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_UPLOAD(), data.toXDR(), (err, payload) => {
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
Storage.prototype.volDownload = function(vol, offset, length, flags, callback) {
  let data = new rp.remote_storage_vol_download_args({
    vol: vol,
    offset: offset,
    length: length,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_VOL_DOWNLOAD(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
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
Storage.prototype.poolListAllVolumes = function(pool, needResults, flags, callback) {
  let data = new rp.remote_storage_pool_list_all_volumes_args({
    pool: pool,
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_LIST_ALL_VOLUMES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_list_all_volumes_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

