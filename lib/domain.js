'use strict';
const rp = {};
const proc = rp.remote_procedure;

function Domain() {}

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.getSchedulerType = function(dom, callback) {
  let data = new rp.remote_domain_get_scheduler_type_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_SCHEDULER_TYPE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_scheduler_type_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param nparams
 * @param [callback]
 */
Domain.prototype.getSchedulerParameters = function(dom, nparams, callback) {
  let data = new rp.remote_domain_get_scheduler_parameters_args({
    dom: dom,
    nparams: nparams
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_SCHEDULER_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_scheduler_parameters_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param nparams
 * @param flags
 * @param [callback]
 */
Domain.prototype.getSchedulerParametersFlags = function(dom, nparams, flags, callback) {
  let data = new rp.remote_domain_get_scheduler_parameters_flags_args({
    dom: dom,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_SCHEDULER_PARAMETERS_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_scheduler_parameters_flags_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param params
 * @param [callback]
 */
Domain.prototype.setSchedulerParameters = function(dom, params, callback) {
  let data = new rp.remote_domain_set_scheduler_parameters_args({
    dom: dom,
    params: params
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_SCHEDULER_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param params
 * @param flags
 * @param [callback]
 */
Domain.prototype.setSchedulerParametersFlags = function(dom, params, flags, callback) {
  let data = new rp.remote_domain_set_scheduler_parameters_flags_args({
    dom: dom,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_SCHEDULER_PARAMETERS_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param params
 * @param flags
 * @param [callback]
 */
Domain.prototype.setBlkioParameters = function(dom, params, flags, callback) {
  let data = new rp.remote_domain_set_blkio_parameters_args({
    dom: dom,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_BLKIO_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param nparams
 * @param flags
 * @param [callback]
 */
Domain.prototype.getBlkioParameters = function(dom, nparams, flags, callback) {
  let data = new rp.remote_domain_get_blkio_parameters_args({
    dom: dom,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_BLKIO_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_blkio_parameters_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param params
 * @param flags
 * @param [callback]
 */
Domain.prototype.setMemoryParameters = function(dom, params, flags, callback) {
  let data = new rp.remote_domain_set_memory_parameters_args({
    dom: dom,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_MEMORY_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param nparams
 * @param flags
 * @param [callback]
 */
Domain.prototype.getMemoryParameters = function(dom, nparams, flags, callback) {
  let data = new rp.remote_domain_get_memory_parameters_args({
    dom: dom,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_MEMORY_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_memory_parameters_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param disk
 * @param size
 * @param flags
 * @param [callback]
 */
Domain.prototype.blockResize = function(dom, disk, size, flags, callback) {
  let data = new rp.remote_domain_block_resize_args({
    dom: dom,
    disk: disk,
    size: size,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_BLOCK_RESIZE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param params
 * @param flags
 * @param [callback]
 */
Domain.prototype.setNumaParameters = function(dom, params, flags, callback) {
  let data = new rp.remote_domain_set_numa_parameters_args({
    dom: dom,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_NUMA_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param nparams
 * @param flags
 * @param [callback]
 */
Domain.prototype.getNumaParameters = function(dom, nparams, flags, callback) {
  let data = new rp.remote_domain_get_numa_parameters_args({
    dom: dom,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_NUMA_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_numa_parameters_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param params
 * @param flags
 * @param [callback]
 */
Domain.prototype.setPerfEvents = function(dom, params, flags, callback) {
  let data = new rp.remote_domain_set_perf_events_args({
    dom: dom,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_PERF_EVENTS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getPerfEvents = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_perf_events_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_PERF_EVENTS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_perf_events_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param [callback]
 */
Domain.prototype.blockStats = function(dom, path, callback) {
  let data = new rp.remote_domain_block_stats_args({
    dom: dom,
    path: path
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_BLOCK_STATS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_block_stats_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param nparams
 * @param flags
 * @param [callback]
 */
Domain.prototype.blockStatsFlags = function(dom, path, nparams, flags, callback) {
  let data = new rp.remote_domain_block_stats_flags_args({
    dom: dom,
    path: path,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_BLOCK_STATS_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_block_stats_flags_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param [callback]
 */
Domain.prototype.interfaceStats = function(dom, path, callback) {
  let data = new rp.remote_domain_interface_stats_args({
    dom: dom,
    path: path
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_INTERFACE_STATS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_interface_stats_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param device
 * @param params
 * @param flags
 * @param [callback]
 */
Domain.prototype.setInterfaceParameters = function(dom, device, params, flags, callback) {
  let data = new rp.remote_domain_set_interface_parameters_args({
    dom: dom,
    device: device,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_INTERFACE_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param device
 * @param nparams
 * @param flags
 * @param [callback]
 */
Domain.prototype.getInterfaceParameters = function(dom, device, nparams, flags, callback) {
  let data = new rp.remote_domain_get_interface_parameters_args({
    dom: dom,
    device: device,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_INTERFACE_PARAMETERS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_interface_parameters_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param maxStats
 * @param flags
 * @param [callback]
 */
Domain.prototype.memoryStats = function(dom, maxStats, flags, callback) {
  let data = new rp.remote_domain_memory_stats_args({
    dom: dom,
    maxStats: maxStats,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MEMORY_STATS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_memory_stats_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param offset
 * @param size
 * @param flags
 * @param [callback]
 */
Domain.prototype.blockPeek = function(dom, path, offset, size, flags, callback) {
  let data = new rp.remote_domain_block_peek_args({
    dom: dom,
    path: path,
    offset: offset,
    size: size,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_BLOCK_PEEK(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_block_peek_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param offset
 * @param size
 * @param flags
 * @param [callback]
 */
Domain.prototype.memoryPeek = function(dom, offset, size, flags, callback) {
  let data = new rp.remote_domain_memory_peek_args({
    dom: dom,
    offset: offset,
    size: size,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MEMORY_PEEK(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_memory_peek_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param flags
 * @param [callback]
 */
Domain.prototype.getBlockInfo = function(dom, path, flags, callback) {
  let data = new rp.remote_domain_get_block_info_args({
    dom: dom,
    path: path,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_BLOCK_INFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_block_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
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
Domain.prototype.createXml = function(xmlDesc, flags, callback) {
  let data = new rp.remote_domain_create_xml_args({
    xmlDesc: xmlDesc,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_CREATE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_create_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
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
Domain.prototype.createXmlWithFiles = function(xmlDesc, flags, callback) {
  let data = new rp.remote_domain_create_xml_with_files_args({
    xmlDesc: xmlDesc,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_CREATE_XML_WITH_FILES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_create_xml_with_files_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param id
 * @param [callback]
 */
Domain.prototype.lookupById = function(id, callback) {
  let data = new rp.remote_domain_lookup_by_id_args({
    id: id
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_LOOKUP_BY_ID(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_lookup_by_id_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param uuid
 * @param [callback]
 */
Domain.prototype.lookupByUuid = function(uuid, callback) {
  let data = new rp.remote_domain_lookup_by_uuid_args({
    uuid: uuid
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_LOOKUP_BY_UUID(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_lookup_by_uuid_ret.fromXDR(payload);
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
Domain.prototype.lookupByName = function(name, callback) {
  let data = new rp.remote_domain_lookup_by_name_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_LOOKUP_BY_NAME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_lookup_by_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.suspend = function(dom, callback) {
  let data = new rp.remote_domain_suspend_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SUSPEND(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.resume = function(dom, callback) {
  let data = new rp.remote_domain_resume_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_RESUME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param target
 * @param duration
 * @param flags
 * @param [callback]
 */
Domain.prototype.pmSuspendForDuration = function(dom, target, duration, flags, callback) {
  let data = new rp.remote_domain_pm_suspend_for_duration_args({
    dom: dom,
    target: target,
    duration: duration,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_PM_SUSPEND_FOR_DURATION(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.pmWakeup = function(dom, flags, callback) {
  let data = new rp.remote_domain_pm_wakeup_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_PM_WAKEUP(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.shutdown = function(dom, callback) {
  let data = new rp.remote_domain_shutdown_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SHUTDOWN(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.reboot = function(dom, flags, callback) {
  let data = new rp.remote_domain_reboot_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_REBOOT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.reset = function(dom, flags, callback) {
  let data = new rp.remote_domain_reset_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_RESET(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.destroy = function(dom, callback) {
  let data = new rp.remote_domain_destroy_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_DESTROY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.destroyFlags = function(dom, flags, callback) {
  let data = new rp.remote_domain_destroy_flags_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_DESTROY_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.getOsType = function(dom, callback) {
  let data = new rp.remote_domain_get_os_type_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_OS_TYPE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_os_type_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.getMaxMemory = function(dom, callback) {
  let data = new rp.remote_domain_get_max_memory_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_MAX_MEMORY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_max_memory_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param memory
 * @param [callback]
 */
Domain.prototype.setMaxMemory = function(dom, memory, callback) {
  let data = new rp.remote_domain_set_max_memory_args({
    dom: dom,
    memory: memory
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_MAX_MEMORY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param memory
 * @param [callback]
 */
Domain.prototype.setMemory = function(dom, memory, callback) {
  let data = new rp.remote_domain_set_memory_args({
    dom: dom,
    memory: memory
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_MEMORY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param memory
 * @param flags
 * @param [callback]
 */
Domain.prototype.setMemoryFlags = function(dom, memory, flags, callback) {
  let data = new rp.remote_domain_set_memory_flags_args({
    dom: dom,
    memory: memory,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_MEMORY_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param period
 * @param flags
 * @param [callback]
 */
Domain.prototype.setMemoryStatsPeriod = function(dom, period, flags, callback) {
  let data = new rp.remote_domain_set_memory_stats_period_args({
    dom: dom,
    period: period,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_MEMORY_STATS_PERIOD(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.getInfo = function(dom, callback) {
  let data = new rp.remote_domain_get_info_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_INFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param to
 * @param [callback]
 */
Domain.prototype.save = function(dom, to, callback) {
  let data = new rp.remote_domain_save_args({
    dom: dom,
    to: to
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SAVE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param to
 * @param dxml
 * @param flags
 * @param [callback]
 */
Domain.prototype.saveFlags = function(dom, to, dxml, flags, callback) {
  let data = new rp.remote_domain_save_flags_args({
    dom: dom,
    to: to,
    dxml: dxml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SAVE_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param from
 * @param [callback]
 */
Domain.prototype.restore = function(from, callback) {
  let data = new rp.remote_domain_restore_args({
    from: from
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_RESTORE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param from
 * @param dxml
 * @param flags
 * @param [callback]
 */
Domain.prototype.restoreFlags = function(from, dxml, flags, callback) {
  let data = new rp.remote_domain_restore_flags_args({
    from: from,
    dxml: dxml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_RESTORE_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param file
 * @param flags
 * @param [callback]
 */
Domain.prototype.saveImageGetXmlDesc = function(file, flags, callback) {
  let data = new rp.remote_domain_save_image_get_xml_desc_args({
    file: file,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SAVE_IMAGE_GET_XML_DESC(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_save_image_get_xml_desc_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param file
 * @param dxml
 * @param flags
 * @param [callback]
 */
Domain.prototype.saveImageDefineXml = function(file, dxml, flags, callback) {
  let data = new rp.remote_domain_save_image_define_xml_args({
    file: file,
    dxml: dxml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SAVE_IMAGE_DEFINE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param to
 * @param flags
 * @param [callback]
 */
Domain.prototype.coreDump = function(dom, to, flags, callback) {
  let data = new rp.remote_domain_core_dump_args({
    dom: dom,
    to: to,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_CORE_DUMP(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param to
 * @param dumpformat
 * @param flags
 * @param [callback]
 */
Domain.prototype.coreDumpWithFormat = function(dom, to, dumpformat, flags, callback) {
  let data = new rp.remote_domain_core_dump_with_format_args({
    dom: dom,
    to: to,
    dumpformat: dumpformat,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_CORE_DUMP_WITH_FORMAT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param screen
 * @param flags
 * @param [callback]
 */
Domain.prototype.screenshot = function(dom, screen, flags, callback) {
  let data = new rp.remote_domain_screenshot_args({
    dom: dom,
    screen: screen,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SCREENSHOT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_screenshot_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getXmlDesc = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_xml_desc_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_XML_DESC(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_xml_desc_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param uriIn
 * @param flags
 * @param dname
 * @param resource
 * @param [callback]
 */
Domain.prototype.migratePrepare = function(uriIn, flags, dname, resource, callback) {
  let data = new rp.remote_domain_migrate_prepare_args({
    uriIn: uriIn,
    flags: flags,
    dname: dname,
    resource: resource
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_prepare_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param cookie
 * @param uri
 * @param flags
 * @param dname
 * @param resource
 * @param [callback]
 */
Domain.prototype.migratePerform = function(dom, cookie, uri, flags, dname, resource, callback) {
  let data = new rp.remote_domain_migrate_perform_args({
    dom: dom,
    cookie: cookie,
    uri: uri,
    flags: flags,
    dname: dname,
    resource: resource
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PERFORM(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dname
 * @param cookie
 * @param uri
 * @param flags
 * @param [callback]
 */
Domain.prototype.migrateFinish = function(dname, cookie, uri, flags, callback) {
  let data = new rp.remote_domain_migrate_finish_args({
    dname: dname,
    cookie: cookie,
    uri: uri,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_FINISH(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_finish_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param uriIn
 * @param flags
 * @param dname
 * @param resource
 * @param domXml
 * @param [callback]
 */
Domain.prototype.migratePrepare2 = function(uriIn, flags, dname, resource, domXml, callback) {
  let data = new rp.remote_domain_migrate_prepare2_args({
    uriIn: uriIn,
    flags: flags,
    dname: dname,
    resource: resource,
    domXml: domXml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE2(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_prepare2_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dname
 * @param cookie
 * @param uri
 * @param flags
 * @param retcode
 * @param [callback]
 */
Domain.prototype.migrateFinish2 = function(dname, cookie, uri, flags, retcode, callback) {
  let data = new rp.remote_domain_migrate_finish2_args({
    dname: dname,
    cookie: cookie,
    uri: uri,
    flags: flags,
    retcode: retcode
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_FINISH2(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_finish2_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.create = function(dom, callback) {
  let data = new rp.remote_domain_create_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_CREATE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.createWithFlags = function(dom, flags, callback) {
  let data = new rp.remote_domain_create_with_flags_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_CREATE_WITH_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_create_with_flags_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.createWithFiles = function(dom, flags, callback) {
  let data = new rp.remote_domain_create_with_files_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_CREATE_WITH_FILES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_create_with_files_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param xml
 * @param [callback]
 */
Domain.prototype.defineXml = function(xml, callback) {
  let data = new rp.remote_domain_define_xml_args({
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_DEFINE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_define_xml_ret.fromXDR(payload);
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
Domain.prototype.defineXmlFlags = function(xml, flags, callback) {
  let data = new rp.remote_domain_define_xml_flags_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_DEFINE_XML_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_define_xml_flags_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.undefine = function(dom, callback) {
  let data = new rp.remote_domain_undefine_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_UNDEFINE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.undefineFlags = function(dom, flags, callback) {
  let data = new rp.remote_domain_undefine_flags_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_UNDEFINE_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.injectNmi = function(dom, flags, callback) {
  let data = new rp.remote_domain_inject_nmi_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_INJECT_NMI(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param codeset
 * @param holdtime
 * @param keycodes
 * @param flags
 * @param [callback]
 */
Domain.prototype.sendKey = function(dom, codeset, holdtime, keycodes, flags, callback) {
  let data = new rp.remote_domain_send_key_args({
    dom: dom,
    codeset: codeset,
    holdtime: holdtime,
    keycodes: keycodes,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SEND_KEY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param pidValue
 * @param signum
 * @param flags
 * @param [callback]
 */
Domain.prototype.sendProcessSignal = function(dom, pidValue, signum, flags, callback) {
  let data = new rp.remote_domain_send_process_signal_args({
    dom: dom,
    pidValue: pidValue,
    signum: signum,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SEND_PROCESS_SIGNAL(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param nvcpus
 * @param [callback]
 */
Domain.prototype.setVcpus = function(dom, nvcpus, callback) {
  let data = new rp.remote_domain_set_vcpus_args({
    dom: dom,
    nvcpus: nvcpus
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_VCPUS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param nvcpus
 * @param flags
 * @param [callback]
 */
Domain.prototype.setVcpusFlags = function(dom, nvcpus, flags, callback) {
  let data = new rp.remote_domain_set_vcpus_flags_args({
    dom: dom,
    nvcpus: nvcpus,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_VCPUS_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getVcpusFlags = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_vcpus_flags_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_VCPUS_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_vcpus_flags_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param vcpu
 * @param cpumap
 * @param [callback]
 */
Domain.prototype.pinVcpu = function(dom, vcpu, cpumap, callback) {
  let data = new rp.remote_domain_pin_vcpu_args({
    dom: dom,
    vcpu: vcpu,
    cpumap: cpumap
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_PIN_VCPU(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param vcpu
 * @param cpumap
 * @param flags
 * @param [callback]
 */
Domain.prototype.pinVcpuFlags = function(dom, vcpu, cpumap, flags, callback) {
  let data = new rp.remote_domain_pin_vcpu_flags_args({
    dom: dom,
    vcpu: vcpu,
    cpumap: cpumap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_PIN_VCPU_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param ncpumaps
 * @param maplen
 * @param flags
 * @param [callback]
 */
Domain.prototype.getVcpuPinInfo = function(dom, ncpumaps, maplen, flags, callback) {
  let data = new rp.remote_domain_get_vcpu_pin_info_args({
    dom: dom,
    ncpumaps: ncpumaps,
    maplen: maplen,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_VCPU_PIN_INFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_vcpu_pin_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param cpumap
 * @param flags
 * @param [callback]
 */
Domain.prototype.pinEmulator = function(dom, cpumap, flags, callback) {
  let data = new rp.remote_domain_pin_emulator_args({
    dom: dom,
    cpumap: cpumap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_PIN_EMULATOR(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param maplen
 * @param flags
 * @param [callback]
 */
Domain.prototype.getEmulatorPinInfo = function(dom, maplen, flags, callback) {
  let data = new rp.remote_domain_get_emulator_pin_info_args({
    dom: dom,
    maplen: maplen,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_EMULATOR_PIN_INFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_emulator_pin_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param maxinfo
 * @param maplen
 * @param [callback]
 */
Domain.prototype.getVcpus = function(dom, maxinfo, maplen, callback) {
  let data = new rp.remote_domain_get_vcpus_args({
    dom: dom,
    maxinfo: maxinfo,
    maplen: maplen
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_VCPUS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_vcpus_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.getMaxVcpus = function(dom, callback) {
  let data = new rp.remote_domain_get_max_vcpus_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_MAX_VCPUS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_max_vcpus_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getIothreadInfo = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_iothread_info_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_IOTHREAD_INFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_iothread_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param iothreadsId
 * @param cpumap
 * @param flags
 * @param [callback]
 */
Domain.prototype.pinIothread = function(dom, iothreadsId, cpumap, flags, callback) {
  let data = new rp.remote_domain_pin_iothread_args({
    dom: dom,
    iothreadsId: iothreadsId,
    cpumap: cpumap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_PIN_IOTHREAD(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param iothreadId
 * @param flags
 * @param [callback]
 */
Domain.prototype.addIothread = function(dom, iothreadId, flags, callback) {
  let data = new rp.remote_domain_add_iothread_args({
    dom: dom,
    iothreadId: iothreadId,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_ADD_IOTHREAD(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param iothreadId
 * @param flags
 * @param [callback]
 */
Domain.prototype.delIothread = function(dom, iothreadId, flags, callback) {
  let data = new rp.remote_domain_del_iothread_args({
    dom: dom,
    iothreadId: iothreadId,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_DEL_IOTHREAD(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.getSecurityLabel = function(dom, callback) {
  let data = new rp.remote_domain_get_security_label_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_SECURITY_LABEL(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_security_label_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.getSecurityLabelList = function(dom, callback) {
  let data = new rp.remote_domain_get_security_label_list_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_SECURITY_LABEL_LIST(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_security_label_list_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param xml
 * @param [callback]
 */
Domain.prototype.attachDevice = function(dom, xml, callback) {
  let data = new rp.remote_domain_attach_device_args({
    dom: dom,
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_ATTACH_DEVICE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param xml
 * @param flags
 * @param [callback]
 */
Domain.prototype.attachDeviceFlags = function(dom, xml, flags, callback) {
  let data = new rp.remote_domain_attach_device_flags_args({
    dom: dom,
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_ATTACH_DEVICE_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param xml
 * @param [callback]
 */
Domain.prototype.detachDevice = function(dom, xml, callback) {
  let data = new rp.remote_domain_detach_device_args({
    dom: dom,
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_DETACH_DEVICE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param xml
 * @param flags
 * @param [callback]
 */
Domain.prototype.detachDeviceFlags = function(dom, xml, flags, callback) {
  let data = new rp.remote_domain_detach_device_flags_args({
    dom: dom,
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_DETACH_DEVICE_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param xml
 * @param flags
 * @param [callback]
 */
Domain.prototype.updateDeviceFlags = function(dom, xml, flags, callback) {
  let data = new rp.remote_domain_update_device_flags_args({
    dom: dom,
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_UPDATE_DEVICE_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.getAutostart = function(dom, callback) {
  let data = new rp.remote_domain_get_autostart_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_AUTOSTART(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_autostart_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param autostart
 * @param [callback]
 */
Domain.prototype.setAutostart = function(dom, autostart, callback) {
  let data = new rp.remote_domain_set_autostart_args({
    dom: dom,
    autostart: autostart
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_AUTOSTART(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param type
 * @param metadata
 * @param key
 * @param uri
 * @param flags
 * @param [callback]
 */
Domain.prototype.setMetadata = function(dom, type, metadata, key, uri, flags, callback) {
  let data = new rp.remote_domain_set_metadata_args({
    dom: dom,
    type: type,
    metadata: metadata,
    key: key,
    uri: uri,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_METADATA(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param type
 * @param uri
 * @param flags
 * @param [callback]
 */
Domain.prototype.getMetadata = function(dom, type, uri, flags, callback) {
  let data = new rp.remote_domain_get_metadata_args({
    dom: dom,
    type: type,
    uri: uri,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_METADATA(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_metadata_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param flags
 * @param [callback]
 */
Domain.prototype.blockJobAbort = function(dom, path, flags, callback) {
  let data = new rp.remote_domain_block_job_abort_args({
    dom: dom,
    path: path,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_BLOCK_JOB_ABORT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param flags
 * @param [callback]
 */
Domain.prototype.getBlockJobInfo = function(dom, path, flags, callback) {
  let data = new rp.remote_domain_get_block_job_info_args({
    dom: dom,
    path: path,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_BLOCK_JOB_INFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_block_job_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param bandwidth
 * @param flags
 * @param [callback]
 */
Domain.prototype.blockJobSetSpeed = function(dom, path, bandwidth, flags, callback) {
  let data = new rp.remote_domain_block_job_set_speed_args({
    dom: dom,
    path: path,
    bandwidth: bandwidth,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_BLOCK_JOB_SET_SPEED(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param bandwidth
 * @param flags
 * @param [callback]
 */
Domain.prototype.blockPull = function(dom, path, bandwidth, flags, callback) {
  let data = new rp.remote_domain_block_pull_args({
    dom: dom,
    path: path,
    bandwidth: bandwidth,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_BLOCK_PULL(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param base
 * @param bandwidth
 * @param flags
 * @param [callback]
 */
Domain.prototype.blockRebase = function(dom, path, base, bandwidth, flags, callback) {
  let data = new rp.remote_domain_block_rebase_args({
    dom: dom,
    path: path,
    base: base,
    bandwidth: bandwidth,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_BLOCK_REBASE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param path
 * @param destxml
 * @param params
 * @param flags
 * @param [callback]
 */
Domain.prototype.blockCopy = function(dom, path, destxml, params, flags, callback) {
  let data = new rp.remote_domain_block_copy_args({
    dom: dom,
    path: path,
    destxml: destxml,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_BLOCK_COPY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param disk
 * @param base
 * @param top
 * @param bandwidth
 * @param flags
 * @param [callback]
 */
Domain.prototype.blockCommit = function(dom, disk, base, top, bandwidth, flags, callback) {
  let data = new rp.remote_domain_block_commit_args({
    dom: dom,
    disk: disk,
    base: base,
    top: top,
    bandwidth: bandwidth,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_BLOCK_COMMIT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param disk
 * @param params
 * @param flags
 * @param [callback]
 */
Domain.prototype.setBlockIoTune = function(dom, disk, params, flags, callback) {
  let data = new rp.remote_domain_set_block_io_tune_args({
    dom: dom,
    disk: disk,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_BLOCK_IO_TUNE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param disk
 * @param nparams
 * @param flags
 * @param [callback]
 */
Domain.prototype.getBlockIoTune = function(dom, disk, nparams, flags, callback) {
  let data = new rp.remote_domain_get_block_io_tune_args({
    dom: dom,
    disk: disk,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_BLOCK_IO_TUNE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_block_io_tune_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param nparams
 * @param startCpu
 * @param ncpus
 * @param flags
 * @param [callback]
 */
Domain.prototype.getCpuStats = function(dom, nparams, startCpu, ncpus, flags, callback) {
  let data = new rp.remote_domain_get_cpu_stats_args({
    dom: dom,
    nparams: nparams,
    startCpu: startCpu,
    ncpus: ncpus,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_CPU_STATS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_cpu_stats_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getHostname = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_hostname_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_HOSTNAME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_hostname_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param flags
 * @param dname
 * @param resource
 * @param domXml
 * @param [callback]
 */
Domain.prototype.migratePrepareTunnel = function(flags, dname, resource, domXml, callback) {
  let data = new rp.remote_domain_migrate_prepare_tunnel_args({
    flags: flags,
    dname: dname,
    resource: resource,
    domXml: domXml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE_TUNNEL(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.isActive = function(dom, callback) {
  let data = new rp.remote_domain_is_active_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_IS_ACTIVE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_is_active_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.isPersistent = function(dom, callback) {
  let data = new rp.remote_domain_is_persistent_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_IS_PERSISTENT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_is_persistent_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.isUpdated = function(dom, callback) {
  let data = new rp.remote_domain_is_updated_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_IS_UPDATED(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_is_updated_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.getJobInfo = function(dom, callback) {
  let data = new rp.remote_domain_get_job_info_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_JOB_INFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_job_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getJobStats = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_job_stats_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_JOB_STATS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_job_stats_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.abortJob = function(dom, callback) {
  let data = new rp.remote_domain_abort_job_args({
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_ABORT_JOB(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param downtime
 * @param flags
 * @param [callback]
 */
Domain.prototype.migrateSetMaxDowntime = function(dom, downtime, flags, callback) {
  let data = new rp.remote_domain_migrate_set_max_downtime_args({
    dom: dom,
    downtime: downtime,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_SET_MAX_DOWNTIME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.migrateGetCompressionCache = function(dom, flags, callback) {
  let data = new rp.remote_domain_migrate_get_compression_cache_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_GET_COMPRESSION_CACHE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_get_compression_cache_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param cacheSize
 * @param flags
 * @param [callback]
 */
Domain.prototype.migrateSetCompressionCache = function(dom, cacheSize, flags, callback) {
  let data = new rp.remote_domain_migrate_set_compression_cache_args({
    dom: dom,
    cacheSize: cacheSize,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_SET_COMPRESSION_CACHE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param bandwidth
 * @param flags
 * @param [callback]
 */
Domain.prototype.migrateSetMaxSpeed = function(dom, bandwidth, flags, callback) {
  let data = new rp.remote_domain_migrate_set_max_speed_args({
    dom: dom,
    bandwidth: bandwidth,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_SET_MAX_SPEED(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.migrateGetMaxSpeed = function(dom, flags, callback) {
  let data = new rp.remote_domain_migrate_get_max_speed_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_GET_MAX_SPEED(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_get_max_speed_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.managedSave = function(dom, flags, callback) {
  let data = new rp.remote_domain_managed_save_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MANAGED_SAVE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.hasManagedSaveImage = function(dom, flags, callback) {
  let data = new rp.remote_domain_has_managed_save_image_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_HAS_MANAGED_SAVE_IMAGE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_has_managed_save_image_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.managedSaveRemove = function(dom, flags, callback) {
  let data = new rp.remote_domain_managed_save_remove_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MANAGED_SAVE_REMOVE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param xmlDesc
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotCreateXml = function(dom, xmlDesc, flags, callback) {
  let data = new rp.remote_domain_snapshot_create_xml_args({
    dom: dom,
    xmlDesc: xmlDesc,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_CREATE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_create_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param snap
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotGetXmlDesc = function(snap, flags, callback) {
  let data = new rp.remote_domain_snapshot_get_xml_desc_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_GET_XML_DESC(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_get_xml_desc_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotNum = function(dom, flags, callback) {
  let data = new rp.remote_domain_snapshot_num_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_NUM(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_num_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param maxnames
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotListNames = function(dom, maxnames, flags, callback) {
  let data = new rp.remote_domain_snapshot_list_names_args({
    dom: dom,
    maxnames: maxnames,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_LIST_NAMES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_list_names_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param needResults
 * @param flags
 * @param [callback]
 */
Domain.prototype.listAllSnapshots = function(dom, needResults, flags, callback) {
  let data = new rp.remote_domain_list_all_snapshots_args({
    dom: dom,
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_LIST_ALL_SNAPSHOTS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_list_all_snapshots_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param snap
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotNumChildren = function(snap, flags, callback) {
  let data = new rp.remote_domain_snapshot_num_children_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_NUM_CHILDREN(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_num_children_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param snap
 * @param maxnames
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotListChildrenNames = function(snap, maxnames, flags, callback) {
  let data = new rp.remote_domain_snapshot_list_children_names_args({
    snap: snap,
    maxnames: maxnames,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_LIST_CHILDREN_NAMES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_list_children_names_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param snapshot
 * @param needResults
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotListAllChildren = function(snapshot, needResults, flags, callback) {
  let data = new rp.remote_domain_snapshot_list_all_children_args({
    snapshot: snapshot,
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_LIST_ALL_CHILDREN(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_list_all_children_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param name
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotLookupByName = function(dom, name, flags, callback) {
  let data = new rp.remote_domain_snapshot_lookup_by_name_args({
    dom: dom,
    name: name,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_LOOKUP_BY_NAME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_lookup_by_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.hasCurrentSnapshot = function(dom, flags, callback) {
  let data = new rp.remote_domain_has_current_snapshot_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_HAS_CURRENT_SNAPSHOT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_has_current_snapshot_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param snap
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotGetParent = function(snap, flags, callback) {
  let data = new rp.remote_domain_snapshot_get_parent_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_GET_PARENT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_get_parent_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotCurrent = function(dom, flags, callback) {
  let data = new rp.remote_domain_snapshot_current_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_CURRENT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_current_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param snap
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotIsCurrent = function(snap, flags, callback) {
  let data = new rp.remote_domain_snapshot_is_current_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_IS_CURRENT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_is_current_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param snap
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotHasMetadata = function(snap, flags, callback) {
  let data = new rp.remote_domain_snapshot_has_metadata_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_HAS_METADATA(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_has_metadata_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param snap
 * @param flags
 * @param [callback]
 */
Domain.prototype.revertToSnapshot = function(snap, flags, callback) {
  let data = new rp.remote_domain_revert_to_snapshot_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_REVERT_TO_SNAPSHOT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param snap
 * @param flags
 * @param [callback]
 */
Domain.prototype.snapshotDelete = function(snap, flags, callback) {
  let data = new rp.remote_domain_snapshot_delete_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_DELETE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param devName
 * @param flags
 * @param [callback]
 */
Domain.prototype.openConsole = function(dom, devName, flags, callback) {
  let data = new rp.remote_domain_open_console_args({
    dom: dom,
    devName: devName,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_OPEN_CONSOLE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param name
 * @param flags
 * @param [callback]
 */
Domain.prototype.openChannel = function(dom, name, flags, callback) {
  let data = new rp.remote_domain_open_channel_args({
    dom: dom,
    name: name,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_OPEN_CHANNEL(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getState = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_state_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_STATE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_state_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param xmlin
 * @param flags
 * @param dname
 * @param resource
 * @param [callback]
 */
Domain.prototype.migrateBegin3 = function(dom, xmlin, flags, dname, resource, callback) {
  let data = new rp.remote_domain_migrate_begin3_args({
    dom: dom,
    xmlin: xmlin,
    flags: flags,
    dname: dname,
    resource: resource
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_BEGIN3(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_begin3_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param cookieIn
 * @param uriIn
 * @param flags
 * @param dname
 * @param resource
 * @param domXml
 * @param [callback]
 */
Domain.prototype.migratePrepare3 = function(cookieIn, uriIn, flags, dname, resource, domXml, callback) {
  let data = new rp.remote_domain_migrate_prepare3_args({
    cookieIn: cookieIn,
    uriIn: uriIn,
    flags: flags,
    dname: dname,
    resource: resource,
    domXml: domXml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE3(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_prepare3_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param cookieIn
 * @param flags
 * @param dname
 * @param resource
 * @param domXml
 * @param [callback]
 */
Domain.prototype.migratePrepareTunnel3 = function(cookieIn, flags, dname, resource, domXml, callback) {
  let data = new rp.remote_domain_migrate_prepare_tunnel3_args({
    cookieIn: cookieIn,
    flags: flags,
    dname: dname,
    resource: resource,
    domXml: domXml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE_TUNNEL3(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_prepare_tunnel3_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param xmlin
 * @param cookieIn
 * @param dconnuri
 * @param uri
 * @param flags
 * @param dname
 * @param resource
 * @param [callback]
 */
Domain.prototype.migratePerform3 = function(dom, xmlin, cookieIn, dconnuri, uri, flags, dname, resource, callback) {
  let data = new rp.remote_domain_migrate_perform3_args({
    dom: dom,
    xmlin: xmlin,
    cookieIn: cookieIn,
    dconnuri: dconnuri,
    uri: uri,
    flags: flags,
    dname: dname,
    resource: resource
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PERFORM3(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_perform3_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dname
 * @param cookieIn
 * @param dconnuri
 * @param uri
 * @param flags
 * @param cancelled
 * @param [callback]
 */
Domain.prototype.migrateFinish3 = function(dname, cookieIn, dconnuri, uri, flags, cancelled, callback) {
  let data = new rp.remote_domain_migrate_finish3_args({
    dname: dname,
    cookieIn: cookieIn,
    dconnuri: dconnuri,
    uri: uri,
    flags: flags,
    cancelled: cancelled
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_FINISH3(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_finish3_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param cookieIn
 * @param flags
 * @param cancelled
 * @param [callback]
 */
Domain.prototype.migrateConfirm3 = function(dom, cookieIn, flags, cancelled, callback) {
  let data = new rp.remote_domain_migrate_confirm3_args({
    dom: dom,
    cookieIn: cookieIn,
    flags: flags,
    cancelled: cancelled
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_CONFIRM3(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getControlInfo = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_control_info_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_CONTROL_INFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_control_info_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param idx
 * @param flags
 * @param [callback]
 */
Domain.prototype.openGraphics = function(dom, idx, flags, callback) {
  let data = new rp.remote_domain_open_graphics_args({
    dom: dom,
    idx: idx,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_OPEN_GRAPHICS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param idx
 * @param flags
 * @param [callback]
 */
Domain.prototype.openGraphicsFd = function(dom, idx, flags, callback) {
  let data = new rp.remote_domain_open_graphics_fd_args({
    dom: dom,
    idx: idx,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_OPEN_GRAPHICS_FD(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.shutdownFlags = function(dom, flags, callback) {
  let data = new rp.remote_domain_shutdown_flags_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SHUTDOWN_FLAGS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param maxerrors
 * @param flags
 * @param [callback]
 */
Domain.prototype.getDiskErrors = function(dom, maxerrors, flags, callback) {
  let data = new rp.remote_domain_get_disk_errors_args({
    dom: dom,
    maxerrors: maxerrors,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_DISK_ERRORS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_disk_errors_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param mountPoint
 * @param minimum
 * @param flags
 * @param [callback]
 */
Domain.prototype.fstrim = function(dom, mountPoint, minimum, flags, callback) {
  let data = new rp.remote_domain_fstrim_args({
    dom: dom,
    mountPoint: mountPoint,
    minimum: minimum,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_FSTRIM(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getTime = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_time_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_TIME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_time_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param seconds
 * @param nseconds
 * @param flags
 * @param [callback]
 */
Domain.prototype.setTime = function(dom, seconds, nseconds, flags, callback) {
  let data = new rp.remote_domain_set_time_args({
    dom: dom,
    seconds: seconds,
    nseconds: nseconds,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_TIME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param params
 * @param flags
 * @param [callback]
 */
Domain.prototype.migrateBegin3Params = function(dom, params, flags, callback) {
  let data = new rp.remote_domain_migrate_begin3_params_args({
    dom: dom,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_BEGIN3_PARAMS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_begin3_params_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param params
 * @param cookieIn
 * @param flags
 * @param [callback]
 */
Domain.prototype.migratePrepare3Params = function(params, cookieIn, flags, callback) {
  let data = new rp.remote_domain_migrate_prepare3_params_args({
    params: params,
    cookieIn: cookieIn,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE3_PARAMS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_prepare3_params_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param params
 * @param cookieIn
 * @param flags
 * @param [callback]
 */
Domain.prototype.migratePrepareTunnel3Params = function(params, cookieIn, flags, callback) {
  let data = new rp.remote_domain_migrate_prepare_tunnel3_params_args({
    params: params,
    cookieIn: cookieIn,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE_TUNNEL3_PARAMS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_prepare_tunnel3_params_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param dconnuri
 * @param params
 * @param cookieIn
 * @param flags
 * @param [callback]
 */
Domain.prototype.migratePerform3Params = function(dom, dconnuri, params, cookieIn, flags, callback) {
  let data = new rp.remote_domain_migrate_perform3_params_args({
    dom: dom,
    dconnuri: dconnuri,
    params: params,
    cookieIn: cookieIn,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PERFORM3_PARAMS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_perform3_params_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param params
 * @param cookieIn
 * @param flags
 * @param cancelled
 * @param [callback]
 */
Domain.prototype.migrateFinish3Params = function(params, cookieIn, flags, cancelled, callback) {
  let data = new rp.remote_domain_migrate_finish3_params_args({
    params: params,
    cookieIn: cookieIn,
    flags: flags,
    cancelled: cancelled
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_FINISH3_PARAMS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_finish3_params_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param params
 * @param cookieIn
 * @param flags
 * @param cancelled
 * @param [callback]
 */
Domain.prototype.migrateConfirm3Params = function(dom, params, cookieIn, flags, cancelled, callback) {
  let data = new rp.remote_domain_migrate_confirm3_params_args({
    dom: dom,
    params: params,
    cookieIn: cookieIn,
    flags: flags,
    cancelled: cancelled
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_CONFIRM3_PARAMS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param mountpoints
 * @param flags
 * @param [callback]
 */
Domain.prototype.fsfreeze = function(dom, mountpoints, flags, callback) {
  let data = new rp.remote_domain_fsfreeze_args({
    dom: dom,
    mountpoints: mountpoints,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_FSFREEZE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_fsfreeze_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param mountpoints
 * @param flags
 * @param [callback]
 */
Domain.prototype.fsthaw = function(dom, mountpoints, flags, callback) {
  let data = new rp.remote_domain_fsthaw_args({
    dom: dom,
    mountpoints: mountpoints,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_FSTHAW(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_fsthaw_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getFsinfo = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_fsinfo_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_FSINFO(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_fsinfo_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param source
 * @param flags
 * @param [callback]
 */
Domain.prototype.interfaceAddresses = function(dom, source, flags, callback) {
  let data = new rp.remote_domain_interface_addresses_args({
    dom: dom,
    source: source,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_INTERFACE_ADDRESSES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_interface_addresses_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param user
 * @param password
 * @param flags
 * @param [callback]
 */
Domain.prototype.setUserPassword = function(dom, user, password, flags, callback) {
  let data = new rp.remote_domain_set_user_password_args({
    dom: dom,
    user: user,
    password: password,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_USER_PASSWORD(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param newName
 * @param flags
 * @param [callback]
 */
Domain.prototype.rename = function(dom, newName, flags, callback) {
  let data = new rp.remote_domain_rename_args({
    dom: dom,
    newName: newName,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_RENAME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_rename_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.migrateStartPostCopy = function(dom, flags, callback) {
  let data = new rp.remote_domain_migrate_start_post_copy_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_START_POST_COPY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param flags
 * @param [callback]
 */
Domain.prototype.getGuestVcpus = function(dom, flags, callback) {
  let data = new rp.remote_domain_get_guest_vcpus_args({
    dom: dom,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_GET_GUEST_VCPUS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_guest_vcpus_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param dom
 * @param cpumap
 * @param state
 * @param flags
 * @param [callback]
 */
Domain.prototype.setGuestVcpus = function(dom, cpumap, state, flags, callback) {
  let data = new rp.remote_domain_set_guest_vcpus_args({
    dom: dom,
    cpumap: cpumap,
    state: state,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_SET_GUEST_VCPUS(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

