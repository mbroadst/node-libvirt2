'use strict';
const Promise = require('bluebird');
const rp = require('./protocol').remote;
const proc = rp.remote_procedure;

class NodeDevice {
  constructor(conn, attr) {
    this.conn = conn;
    this.ref = new rp.remote_nonnull_node_device(attr);
  }
}

/**
 *
 * @param {Function} [callback]
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
 * @param {Number} cpuNum
 * @param {Number} nparams
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.getCpuStats = function(cpuNum, nparams, flags, callback) {
  cpuNum = cpuNum || 0;
  nparams = nparams || 0;
  flags = flags || 0;
  let args = new rp.remote_node_get_cpu_stats_args({
    cpuNum: cpuNum,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_CPU_STATS(), args.toXDR(), (err, payload) => {
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
 * @param {Number} nparams
 * @param {Number} cellNum
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.getMemoryStats = function(nparams, cellNum, flags, callback) {
  nparams = nparams || 0;
  cellNum = cellNum || 0;
  flags = flags || 0;
  let args = new rp.remote_node_get_memory_stats_args({
    nparams: nparams,
    cellNum: cellNum,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_MEMORY_STATS(), args.toXDR(), (err, payload) => {
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
 * @param {Number} startCell
 * @param {Number} maxcells
 * @param {Function} [callback]
 */
NodeDevice.prototype.getCellsFreeMemory = function(startCell, maxcells, callback) {
  startCell = startCell || 0;
  maxcells = maxcells || 0;
  let args = new rp.remote_node_get_cells_free_memory_args({
    startCell: startCell,
    maxcells: maxcells
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_CELLS_FREE_MEMORY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_cells_free_memory_ret.fromXDR(payload);
      result = result.cells();
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
NodeDevice.prototype.getFreeMemory = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_FREE_MEMORY(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_free_memory_ret.fromXDR(payload);
      result = result.freeMem();
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
 * @param {String} cap
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.numOfDevices = function(cap, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_node_num_of_devices_args({
    cap: cap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_NUM_OF_DEVICES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_num_of_devices_ret.fromXDR(payload);
      result = result.num();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} cap
 * @param {Number} maxnames
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.listDevices = function(cap, maxnames, flags, callback) {
  maxnames = maxnames || 0;
  flags = flags || 0;
  let args = new rp.remote_node_list_devices_args({
    cap: cap,
    maxnames: maxnames,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_LIST_DEVICES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_list_devices_ret.fromXDR(payload);
      result = result.names();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} wwnn
 * @param {String} wwpn
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.lookupScsiHostByWwn = function(wwnn, wwpn, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_node_device_lookup_scsi_host_by_wwn_args({
    wwnn: wwnn,
    wwpn: wwpn,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_LOOKUP_SCSI_HOST_BY_WWN(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_lookup_scsi_host_by_wwn_ret.fromXDR(payload);
      result = result.dev();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} name
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.getXmlDesc = function(name, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_node_device_get_xml_desc_args({
    name: name,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_GET_XML_DESC(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_get_xml_desc_ret.fromXDR(payload);
      result = result.xml();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} name
 * @param {Function} [callback]
 */
NodeDevice.prototype.getParent = function(name, callback) {

  let args = new rp.remote_node_device_get_parent_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_GET_PARENT(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_get_parent_ret.fromXDR(payload);
      result = result.parent();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} name
 * @param {Function} [callback]
 */
NodeDevice.prototype.numOfCaps = function(name, callback) {

  let args = new rp.remote_node_device_num_of_caps_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_NUM_OF_CAPS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_num_of_caps_ret.fromXDR(payload);
      result = result.num();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} name
 * @param {Number} maxnames
 * @param {Function} [callback]
 */
NodeDevice.prototype.listCaps = function(name, maxnames, callback) {
  maxnames = maxnames || 0;
  let args = new rp.remote_node_device_list_caps_args({
    name: name,
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_LIST_CAPS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_list_caps_ret.fromXDR(payload);
      result = result.names();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} name
 * @param {Function} [callback]
 */
NodeDevice.prototype.dettach = function(name, callback) {

  let args = new rp.remote_node_device_dettach_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_DETTACH(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} name
 * @param {String} driverName
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.detachFlags = function(name, driverName, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_node_device_detach_flags_args({
    name: name,
    driverName: driverName,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_DETACH_FLAGS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} name
 * @param {Function} [callback]
 */
NodeDevice.prototype.reAttach = function(name, callback) {

  let args = new rp.remote_node_device_re_attach_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_RE_ATTACH(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} name
 * @param {Function} [callback]
 */
NodeDevice.prototype.reset = function(name, callback) {

  let args = new rp.remote_node_device_reset_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_RESET(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {String} name
 * @param {Function} [callback]
 */
NodeDevice.prototype.destroy = function(name, callback) {

  let args = new rp.remote_node_device_destroy_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_DEVICE_DESTROY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {Number} target
 * @param {Number} duration
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.suspendForDuration = function(target, duration, flags, callback) {
  target = target || 0;
  duration = duration || 0;
  flags = flags || 0;
  let args = new rp.remote_node_suspend_for_duration_args({
    target: target,
    duration: duration,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_SUSPEND_FOR_DURATION(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {Object} params
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.setMemoryParameters = function(params, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_node_set_memory_parameters_args({
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_SET_MEMORY_PARAMETERS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {Number} nparams
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.getMemoryParameters = function(nparams, flags, callback) {
  nparams = nparams || 0;
  flags = flags || 0;
  let args = new rp.remote_node_get_memory_parameters_args({
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_MEMORY_PARAMETERS(), args.toXDR(), (err, payload) => {
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
 * @param {Number} needMap
 * @param {Number} needOnline
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.getCpuMap = function(needMap, needOnline, flags, callback) {
  needMap = needMap || 0;
  needOnline = needOnline || 0;
  flags = flags || 0;
  let args = new rp.remote_node_get_cpu_map_args({
    needMap: needMap,
    needOnline: needOnline,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_CPU_MAP(), args.toXDR(), (err, payload) => {
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
 * @param {Number} pages
 * @param {Number} startCell
 * @param {Number} cellCount
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.getFreePages = function(pages, startCell, cellCount, flags, callback) {
  pages = pages || 0;
  startCell = startCell || 0;
  cellCount = cellCount || 0;
  flags = flags || 0;
  let args = new rp.remote_node_get_free_pages_args({
    pages: pages,
    startCell: startCell,
    cellCount: cellCount,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_GET_FREE_PAGES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_get_free_pages_ret.fromXDR(payload);
      result = result.counts();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {Number} pageSizes
 * @param {Number} pageCounts
 * @param {Number} startCell
 * @param {Number} cellCount
 * @param {Number} flags
 * @param {Function} [callback]
 */
NodeDevice.prototype.allocPages = function(pageSizes, pageCounts, startCell, cellCount, flags, callback) {
  pageSizes = pageSizes || 0;
  pageCounts = pageCounts || 0;
  startCell = startCell || 0;
  cellCount = cellCount || 0;
  flags = flags || 0;
  let args = new rp.remote_node_alloc_pages_args({
    pageSizes: pageSizes,
    pageCounts: pageCounts,
    startCell: startCell,
    cellCount: cellCount,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NODE_ALLOC_PAGES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_alloc_pages_ret.fromXDR(payload);
      result = result.ret();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

module.exports = NodeDevice;
