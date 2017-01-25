'use strict';
const rp = {};
const proc = rp.remote_procedure;

class NodeDevice {
  constructor(conn, attr) {
    this.conn = conn;
    this.ref = new rp.remote_node_device(attr);
  }
}

/**
 *
 * @param [callback]
 */
NodeDevice.prototype.getInfo = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_INFO(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param cpuNum
 * @param nparams
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.getCpuStats = function(cpuNum, nparams, flags, callback) {
  let data = new rp.remote_node_get_cpu_stats_args({
    cpuNum: cpuNum,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_CPU_STATS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_cpu_stats_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param nparams
 * @param cellNum
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.getMemoryStats = function(nparams, cellNum, flags, callback) {
  let data = new rp.remote_node_get_memory_stats_args({
    nparams: nparams,
    cellNum: cellNum,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_MEMORY_STATS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_memory_stats_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param startCell
 * @param maxcells
 * @param [callback]
 */
NodeDevice.prototype.getCellsFreeMemory = function(startCell, maxcells, callback) {
  let data = new rp.remote_node_get_cells_free_memory_args({
    startCell: startCell,
    maxcells: maxcells
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_CELLS_FREE_MEMORY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_cells_free_memory_ret.fromXDR(payload);
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
NodeDevice.prototype.getFreeMemory = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_FREE_MEMORY(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_free_memory_ret.fromXDR(payload);
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
NodeDevice.prototype.getSecurityModel = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_SECURITY_MODEL(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_security_model_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param cap
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.numOfDevices = function(cap, flags, callback) {
  let data = new rp.remote_node_num_of_devices_args({
    cap: cap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_NUM_OF_DEVICES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_num_of_devices_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param cap
 * @param maxnames
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.listDevices = function(cap, maxnames, flags, callback) {
  let data = new rp.remote_node_list_devices_args({
    cap: cap,
    maxnames: maxnames,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_LIST_DEVICES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_list_devices_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param wwnn
 * @param wwpn
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.lookupScsiHostByWwn = function(wwnn, wwpn, flags, callback) {
  let data = new rp.remote_node_device_lookup_scsi_host_by_wwn_args({
    wwnn: wwnn,
    wwpn: wwpn,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_LOOKUP_SCSI_HOST_BY_WWN(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_lookup_scsi_host_by_wwn_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.getXmlDesc = function(name, flags, callback) {
  let data = new rp.remote_node_device_get_xml_desc_args({
    name: name,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_GET_XML_DESC(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_get_xml_desc_ret.fromXDR(payload);
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
NodeDevice.prototype.getParent = function(name, callback) {
  let data = new rp.remote_node_device_get_parent_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_GET_PARENT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_get_parent_ret.fromXDR(payload);
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
NodeDevice.prototype.numOfCaps = function(name, callback) {
  let data = new rp.remote_node_device_num_of_caps_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_NUM_OF_CAPS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_num_of_caps_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param maxnames
 * @param [callback]
 */
NodeDevice.prototype.listCaps = function(name, maxnames, callback) {
  let data = new rp.remote_node_device_list_caps_args({
    name: name,
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_LIST_CAPS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_list_caps_ret.fromXDR(payload);
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
NodeDevice.prototype.dettach = function(name, callback) {
  let data = new rp.remote_node_device_dettach_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_DETTACH(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param driverName
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.detachFlags = function(name, driverName, flags, callback) {
  let data = new rp.remote_node_device_detach_flags_args({
    name: name,
    driverName: driverName,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_DETACH_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param [callback]
 */
NodeDevice.prototype.reAttach = function(name, callback) {
  let data = new rp.remote_node_device_re_attach_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_RE_ATTACH(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param [callback]
 */
NodeDevice.prototype.reset = function(name, callback) {
  let data = new rp.remote_node_device_reset_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_RESET(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param xmlDesc
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.createXml = function(xmlDesc, flags, callback) {
  let data = new rp.remote_node_device_create_xml_args({
    xmlDesc: xmlDesc,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_CREATE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_create_xml_ret.fromXDR(payload);
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
NodeDevice.prototype.destroy = function(name, callback) {
  let data = new rp.remote_node_device_destroy_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_DESTROY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param target
 * @param duration
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.suspendForDuration = function(target, duration, flags, callback) {
  let data = new rp.remote_node_suspend_for_duration_args({
    target: target,
    duration: duration,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_SUSPEND_FOR_DURATION(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param params
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.setMemoryParameters = function(params, flags, callback) {
  let data = new rp.remote_node_set_memory_parameters_args({
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_SET_MEMORY_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param nparams
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.getMemoryParameters = function(nparams, flags, callback) {
  let data = new rp.remote_node_get_memory_parameters_args({
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_MEMORY_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_memory_parameters_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param needMap
 * @param needOnline
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.getCpuMap = function(needMap, needOnline, flags, callback) {
  let data = new rp.remote_node_get_cpu_map_args({
    needMap: needMap,
    needOnline: needOnline,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_CPU_MAP(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_cpu_map_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pages
 * @param startCell
 * @param cellCount
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.getFreePages = function(pages, startCell, cellCount, flags, callback) {
  let data = new rp.remote_node_get_free_pages_args({
    pages: pages,
    startCell: startCell,
    cellCount: cellCount,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_FREE_PAGES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_free_pages_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param pageSizes
 * @param pageCounts
 * @param startCell
 * @param cellCount
 * @param flags
 * @param [callback]
 */
NodeDevice.prototype.allocPages = function(pageSizes, pageCounts, startCell, cellCount, flags, callback) {
  let data = new rp.remote_node_alloc_pages_args({
    pageSizes: pageSizes,
    pageCounts: pageCounts,
    startCell: startCell,
    cellCount: cellCount,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_ALLOC_PAGES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_alloc_pages_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

