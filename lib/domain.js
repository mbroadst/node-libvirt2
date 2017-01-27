'use strict';
const Promise = require('bluebird');
const rp = require('./protocol').remote;
const proc = rp.remote_procedure;

class Domain {
  constructor(conn, attr) {
    this.conn = conn;
    this.ref = new rp.remote_nonnull_domain(attr);
  }
}

/**
 *
 * @param dom
 * @param [callback]
 */
Domain.prototype.getSchedulerType = function(callback) {

  let args = new rp.remote_domain_get_scheduler_type_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_SCHEDULER_TYPE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getSchedulerParameters = function(nparams, callback) {
  nparams = nparams || 0;
  let args = new rp.remote_domain_get_scheduler_parameters_args({
    dom: this.ref,
    nparams: nparams
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_SCHEDULER_PARAMETERS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_scheduler_parameters_ret.fromXDR(payload);
      result = result.params();
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
Domain.prototype.getSchedulerParametersFlags = function(nparams, flags, callback) {
  nparams = nparams || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_scheduler_parameters_flags_args({
    dom: this.ref,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_SCHEDULER_PARAMETERS_FLAGS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_scheduler_parameters_flags_ret.fromXDR(payload);
      result = result.params();
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
Domain.prototype.setSchedulerParameters = function(params, callback) {

  let args = new rp.remote_domain_set_scheduler_parameters_args({
    dom: this.ref,
    params: params
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_SCHEDULER_PARAMETERS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setSchedulerParametersFlags = function(params, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_set_scheduler_parameters_flags_args({
    dom: this.ref,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_SCHEDULER_PARAMETERS_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setBlkioParameters = function(params, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_set_blkio_parameters_args({
    dom: this.ref,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_BLKIO_PARAMETERS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getBlkioParameters = function(nparams, flags, callback) {
  nparams = nparams || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_blkio_parameters_args({
    dom: this.ref,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_BLKIO_PARAMETERS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setMemoryParameters = function(params, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_set_memory_parameters_args({
    dom: this.ref,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_MEMORY_PARAMETERS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getMemoryParameters = function(nparams, flags, callback) {
  nparams = nparams || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_memory_parameters_args({
    dom: this.ref,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_MEMORY_PARAMETERS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.blockResize = function(disk, size, flags, callback) {
  size = size || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_block_resize_args({
    dom: this.ref,
    disk: disk,
    size: size,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_BLOCK_RESIZE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setNumaParameters = function(params, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_set_numa_parameters_args({
    dom: this.ref,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_NUMA_PARAMETERS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getNumaParameters = function(nparams, flags, callback) {
  nparams = nparams || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_numa_parameters_args({
    dom: this.ref,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_NUMA_PARAMETERS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setPerfEvents = function(params, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_set_perf_events_args({
    dom: this.ref,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_PERF_EVENTS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getPerfEvents = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_perf_events_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_PERF_EVENTS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_perf_events_ret.fromXDR(payload);
      result = result.params();
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
Domain.prototype.blockStats = function(path, callback) {

  let args = new rp.remote_domain_block_stats_args({
    dom: this.ref,
    path: path
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_BLOCK_STATS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.blockStatsFlags = function(path, nparams, flags, callback) {
  nparams = nparams || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_block_stats_flags_args({
    dom: this.ref,
    path: path,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_BLOCK_STATS_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.interfaceStats = function(path, callback) {

  let args = new rp.remote_domain_interface_stats_args({
    dom: this.ref,
    path: path
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_INTERFACE_STATS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setInterfaceParameters = function(device, params, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_set_interface_parameters_args({
    dom: this.ref,
    device: device,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_INTERFACE_PARAMETERS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getInterfaceParameters = function(device, nparams, flags, callback) {
  nparams = nparams || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_interface_parameters_args({
    dom: this.ref,
    device: device,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_INTERFACE_PARAMETERS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.memoryStats = function(maxStats, flags, callback) {
  maxStats = maxStats || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_memory_stats_args({
    dom: this.ref,
    maxStats: maxStats,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MEMORY_STATS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_memory_stats_ret.fromXDR(payload);
      result = result.stats();
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
Domain.prototype.blockPeek = function(path, offset, size, flags, callback) {
  offset = offset || 0;
  size = size || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_block_peek_args({
    dom: this.ref,
    path: path,
    offset: offset,
    size: size,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_BLOCK_PEEK(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_block_peek_ret.fromXDR(payload);
      result = result.buffer();
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
Domain.prototype.memoryPeek = function(offset, size, flags, callback) {
  offset = offset || 0;
  size = size || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_memory_peek_args({
    dom: this.ref,
    offset: offset,
    size: size,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MEMORY_PEEK(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_memory_peek_ret.fromXDR(payload);
      result = result.buffer();
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
Domain.prototype.getBlockInfo = function(path, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_block_info_args({
    dom: this.ref,
    path: path,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_BLOCK_INFO(), args.toXDR(), (err, payload) => {
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
 * @param dom
 * @param [callback]
 */
Domain.prototype.suspend = function(callback) {

  let args = new rp.remote_domain_suspend_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SUSPEND(), args.toXDR(), (err, payload) => {
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
Domain.prototype.resume = function(callback) {

  let args = new rp.remote_domain_resume_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_RESUME(), args.toXDR(), (err, payload) => {
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
Domain.prototype.pmSuspendForDuration = function(target, duration, flags, callback) {
  target = target || 0;
  duration = duration || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_pm_suspend_for_duration_args({
    dom: this.ref,
    target: target,
    duration: duration,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_PM_SUSPEND_FOR_DURATION(), args.toXDR(), (err, payload) => {
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
Domain.prototype.pmWakeup = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_pm_wakeup_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_PM_WAKEUP(), args.toXDR(), (err, payload) => {
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
Domain.prototype.shutdown = function(callback) {

  let args = new rp.remote_domain_shutdown_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SHUTDOWN(), args.toXDR(), (err, payload) => {
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
Domain.prototype.reboot = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_reboot_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_REBOOT(), args.toXDR(), (err, payload) => {
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
Domain.prototype.reset = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_reset_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_RESET(), args.toXDR(), (err, payload) => {
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
Domain.prototype.destroy = function(callback) {

  let args = new rp.remote_domain_destroy_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_DESTROY(), args.toXDR(), (err, payload) => {
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
Domain.prototype.destroyFlags = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_destroy_flags_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_DESTROY_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getOsType = function(callback) {

  let args = new rp.remote_domain_get_os_type_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_OS_TYPE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_os_type_ret.fromXDR(payload);
      result = result.type();
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
Domain.prototype.getMaxMemory = function(callback) {

  let args = new rp.remote_domain_get_max_memory_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_MAX_MEMORY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_max_memory_ret.fromXDR(payload);
      result = result.memory();
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
Domain.prototype.setMaxMemory = function(memory, callback) {
  memory = memory || 0;
  let args = new rp.remote_domain_set_max_memory_args({
    dom: this.ref,
    memory: memory
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_MAX_MEMORY(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setMemory = function(memory, callback) {
  memory = memory || 0;
  let args = new rp.remote_domain_set_memory_args({
    dom: this.ref,
    memory: memory
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_MEMORY(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setMemoryFlags = function(memory, flags, callback) {
  memory = memory || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_set_memory_flags_args({
    dom: this.ref,
    memory: memory,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_MEMORY_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setMemoryStatsPeriod = function(period, flags, callback) {
  period = period || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_set_memory_stats_period_args({
    dom: this.ref,
    period: period,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_MEMORY_STATS_PERIOD(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getInfo = function(callback) {

  let args = new rp.remote_domain_get_info_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_INFO(), args.toXDR(), (err, payload) => {
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
Domain.prototype.save = function(to, callback) {

  let args = new rp.remote_domain_save_args({
    dom: this.ref,
    to: to
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SAVE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.saveFlags = function(to, dxml, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_save_flags_args({
    dom: this.ref,
    to: to,
    dxml: dxml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SAVE_FLAGS(), args.toXDR(), (err, payload) => {
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

  let args = new rp.remote_domain_restore_args({
    from: from
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_RESTORE(), args.toXDR(), (err, payload) => {
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
  flags = flags || 0;
  let args = new rp.remote_domain_restore_flags_args({
    from: from,
    dxml: dxml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_RESTORE_FLAGS(), args.toXDR(), (err, payload) => {
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
  flags = flags || 0;
  let args = new rp.remote_domain_save_image_get_xml_desc_args({
    file: file,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SAVE_IMAGE_GET_XML_DESC(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_save_image_get_xml_desc_ret.fromXDR(payload);
      result = result.xml();
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
  flags = flags || 0;
  let args = new rp.remote_domain_save_image_define_xml_args({
    file: file,
    dxml: dxml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SAVE_IMAGE_DEFINE_XML(), args.toXDR(), (err, payload) => {
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
Domain.prototype.coreDump = function(to, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_core_dump_args({
    dom: this.ref,
    to: to,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_CORE_DUMP(), args.toXDR(), (err, payload) => {
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
Domain.prototype.coreDumpWithFormat = function(to, dumpformat, flags, callback) {
  dumpformat = dumpformat || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_core_dump_with_format_args({
    dom: this.ref,
    to: to,
    dumpformat: dumpformat,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_CORE_DUMP_WITH_FORMAT(), args.toXDR(), (err, payload) => {
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
Domain.prototype.screenshot = function(screen, flags, callback) {
  screen = screen || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_screenshot_args({
    dom: this.ref,
    screen: screen,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SCREENSHOT(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_screenshot_ret.fromXDR(payload);
      result = result.mime();
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
Domain.prototype.getXmlDesc = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_xml_desc_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_XML_DESC(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_xml_desc_ret.fromXDR(payload);
      result = result.xml();
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
  flags = flags || 0;
  resource = resource || 0;
  let args = new rp.remote_domain_migrate_prepare_args({
    uriIn: uriIn,
    flags: flags,
    dname: dname,
    resource: resource
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.migratePerform = function(cookie, uri, flags, dname, resource, callback) {
  flags = flags || 0;
  resource = resource || 0;
  let args = new rp.remote_domain_migrate_perform_args({
    dom: this.ref,
    cookie: cookie,
    uri: uri,
    flags: flags,
    dname: dname,
    resource: resource
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PERFORM(), args.toXDR(), (err, payload) => {
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
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_finish_args({
    dname: dname,
    cookie: cookie,
    uri: uri,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_FINISH(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_finish_ret.fromXDR(payload);
      result = result.ddom();
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
  flags = flags || 0;
  resource = resource || 0;
  let args = new rp.remote_domain_migrate_prepare2_args({
    uriIn: uriIn,
    flags: flags,
    dname: dname,
    resource: resource,
    domXml: domXml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE2(), args.toXDR(), (err, payload) => {
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
  flags = flags || 0;
  retcode = retcode || 0;
  let args = new rp.remote_domain_migrate_finish2_args({
    dname: dname,
    cookie: cookie,
    uri: uri,
    flags: flags,
    retcode: retcode
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_FINISH2(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_finish2_ret.fromXDR(payload);
      result = result.ddom();
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
Domain.prototype.create = function(callback) {

  let args = new rp.remote_domain_create_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_CREATE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.createWithFlags = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_create_with_flags_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_CREATE_WITH_FLAGS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_create_with_flags_ret.fromXDR(payload);
      result = result.dom();
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
Domain.prototype.createWithFiles = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_create_with_files_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_CREATE_WITH_FILES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_create_with_files_ret.fromXDR(payload);
      result = result.dom();
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

  let args = new rp.remote_domain_define_xml_args({
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_DEFINE_XML(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_define_xml_ret.fromXDR(payload);
      result = result.dom();
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
  flags = flags || 0;
  let args = new rp.remote_domain_define_xml_flags_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_DEFINE_XML_FLAGS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_define_xml_flags_ret.fromXDR(payload);
      result = result.dom();
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
Domain.prototype.undefine = function(callback) {

  let args = new rp.remote_domain_undefine_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_UNDEFINE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.undefineFlags = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_undefine_flags_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_UNDEFINE_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.injectNmi = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_inject_nmi_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_INJECT_NMI(), args.toXDR(), (err, payload) => {
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
Domain.prototype.sendKey = function(codeset, holdtime, keycodes, flags, callback) {
  codeset = codeset || 0;
  holdtime = holdtime || 0;
  keycodes = keycodes || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_send_key_args({
    dom: this.ref,
    codeset: codeset,
    holdtime: holdtime,
    keycodes: keycodes,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SEND_KEY(), args.toXDR(), (err, payload) => {
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
Domain.prototype.sendProcessSignal = function(pidValue, signum, flags, callback) {
  pidValue = pidValue || 0;
  signum = signum || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_send_process_signal_args({
    dom: this.ref,
    pidValue: pidValue,
    signum: signum,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SEND_PROCESS_SIGNAL(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setVcpus = function(nvcpus, callback) {
  nvcpus = nvcpus || 0;
  let args = new rp.remote_domain_set_vcpus_args({
    dom: this.ref,
    nvcpus: nvcpus
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_VCPUS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setVcpusFlags = function(nvcpus, flags, callback) {
  nvcpus = nvcpus || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_set_vcpus_flags_args({
    dom: this.ref,
    nvcpus: nvcpus,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_VCPUS_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getVcpusFlags = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_vcpus_flags_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_VCPUS_FLAGS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_vcpus_flags_ret.fromXDR(payload);
      result = result.num();
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
Domain.prototype.pinVcpu = function(vcpu, cpumap, callback) {
  vcpu = vcpu || 0;
  let args = new rp.remote_domain_pin_vcpu_args({
    dom: this.ref,
    vcpu: vcpu,
    cpumap: cpumap
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_PIN_VCPU(), args.toXDR(), (err, payload) => {
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
Domain.prototype.pinVcpuFlags = function(vcpu, cpumap, flags, callback) {
  vcpu = vcpu || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_pin_vcpu_flags_args({
    dom: this.ref,
    vcpu: vcpu,
    cpumap: cpumap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_PIN_VCPU_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getVcpuPinInfo = function(ncpumaps, maplen, flags, callback) {
  ncpumaps = ncpumaps || 0;
  maplen = maplen || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_vcpu_pin_info_args({
    dom: this.ref,
    ncpumaps: ncpumaps,
    maplen: maplen,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_VCPU_PIN_INFO(), args.toXDR(), (err, payload) => {
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
Domain.prototype.pinEmulator = function(cpumap, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_pin_emulator_args({
    dom: this.ref,
    cpumap: cpumap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_PIN_EMULATOR(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getEmulatorPinInfo = function(maplen, flags, callback) {
  maplen = maplen || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_emulator_pin_info_args({
    dom: this.ref,
    maplen: maplen,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_EMULATOR_PIN_INFO(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getVcpus = function(maxinfo, maplen, callback) {
  maxinfo = maxinfo || 0;
  maplen = maplen || 0;
  let args = new rp.remote_domain_get_vcpus_args({
    dom: this.ref,
    maxinfo: maxinfo,
    maplen: maplen
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_VCPUS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getMaxVcpus = function(callback) {

  let args = new rp.remote_domain_get_max_vcpus_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_MAX_VCPUS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_max_vcpus_ret.fromXDR(payload);
      result = result.num();
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
Domain.prototype.getIothreadInfo = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_iothread_info_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_IOTHREAD_INFO(), args.toXDR(), (err, payload) => {
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
Domain.prototype.pinIothread = function(iothreadsId, cpumap, flags, callback) {
  iothreadsId = iothreadsId || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_pin_iothread_args({
    dom: this.ref,
    iothreadsId: iothreadsId,
    cpumap: cpumap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_PIN_IOTHREAD(), args.toXDR(), (err, payload) => {
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
Domain.prototype.addIothread = function(iothreadId, flags, callback) {
  iothreadId = iothreadId || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_add_iothread_args({
    dom: this.ref,
    iothreadId: iothreadId,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_ADD_IOTHREAD(), args.toXDR(), (err, payload) => {
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
Domain.prototype.delIothread = function(iothreadId, flags, callback) {
  iothreadId = iothreadId || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_del_iothread_args({
    dom: this.ref,
    iothreadId: iothreadId,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_DEL_IOTHREAD(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getSecurityLabel = function(callback) {

  let args = new rp.remote_domain_get_security_label_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_SECURITY_LABEL(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getSecurityLabelList = function(callback) {

  let args = new rp.remote_domain_get_security_label_list_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_SECURITY_LABEL_LIST(), args.toXDR(), (err, payload) => {
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
Domain.prototype.attachDevice = function(xml, callback) {

  let args = new rp.remote_domain_attach_device_args({
    dom: this.ref,
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_ATTACH_DEVICE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.attachDeviceFlags = function(xml, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_attach_device_flags_args({
    dom: this.ref,
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_ATTACH_DEVICE_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.detachDevice = function(xml, callback) {

  let args = new rp.remote_domain_detach_device_args({
    dom: this.ref,
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_DETACH_DEVICE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.detachDeviceFlags = function(xml, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_detach_device_flags_args({
    dom: this.ref,
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_DETACH_DEVICE_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.updateDeviceFlags = function(xml, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_update_device_flags_args({
    dom: this.ref,
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_UPDATE_DEVICE_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getAutostart = function(callback) {

  let args = new rp.remote_domain_get_autostart_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_AUTOSTART(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_autostart_ret.fromXDR(payload);
      result = result.autostart();
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
Domain.prototype.setAutostart = function(autostart, callback) {
  autostart = autostart || 0;
  let args = new rp.remote_domain_set_autostart_args({
    dom: this.ref,
    autostart: autostart
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_AUTOSTART(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setMetadata = function(type, metadata, key, uri, flags, callback) {
  type = type || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_set_metadata_args({
    dom: this.ref,
    type: type,
    metadata: metadata,
    key: key,
    uri: uri,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_METADATA(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getMetadata = function(type, uri, flags, callback) {
  type = type || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_metadata_args({
    dom: this.ref,
    type: type,
    uri: uri,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_METADATA(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_metadata_ret.fromXDR(payload);
      result = result.metadata();
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
Domain.prototype.blockJobAbort = function(path, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_block_job_abort_args({
    dom: this.ref,
    path: path,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_BLOCK_JOB_ABORT(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getBlockJobInfo = function(path, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_block_job_info_args({
    dom: this.ref,
    path: path,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_BLOCK_JOB_INFO(), args.toXDR(), (err, payload) => {
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
Domain.prototype.blockJobSetSpeed = function(path, bandwidth, flags, callback) {
  bandwidth = bandwidth || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_block_job_set_speed_args({
    dom: this.ref,
    path: path,
    bandwidth: bandwidth,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_BLOCK_JOB_SET_SPEED(), args.toXDR(), (err, payload) => {
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
Domain.prototype.blockPull = function(path, bandwidth, flags, callback) {
  bandwidth = bandwidth || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_block_pull_args({
    dom: this.ref,
    path: path,
    bandwidth: bandwidth,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_BLOCK_PULL(), args.toXDR(), (err, payload) => {
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
Domain.prototype.blockRebase = function(path, base, bandwidth, flags, callback) {
  bandwidth = bandwidth || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_block_rebase_args({
    dom: this.ref,
    path: path,
    base: base,
    bandwidth: bandwidth,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_BLOCK_REBASE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.blockCopy = function(path, destxml, params, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_block_copy_args({
    dom: this.ref,
    path: path,
    destxml: destxml,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_BLOCK_COPY(), args.toXDR(), (err, payload) => {
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
Domain.prototype.blockCommit = function(disk, base, top, bandwidth, flags, callback) {
  bandwidth = bandwidth || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_block_commit_args({
    dom: this.ref,
    disk: disk,
    base: base,
    top: top,
    bandwidth: bandwidth,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_BLOCK_COMMIT(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setBlockIoTune = function(disk, params, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_set_block_io_tune_args({
    dom: this.ref,
    disk: disk,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_BLOCK_IO_TUNE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getBlockIoTune = function(disk, nparams, flags, callback) {
  nparams = nparams || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_block_io_tune_args({
    dom: this.ref,
    disk: disk,
    nparams: nparams,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_BLOCK_IO_TUNE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getCpuStats = function(nparams, startCpu, ncpus, flags, callback) {
  nparams = nparams || 0;
  startCpu = startCpu || 0;
  ncpus = ncpus || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_cpu_stats_args({
    dom: this.ref,
    nparams: nparams,
    startCpu: startCpu,
    ncpus: ncpus,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_CPU_STATS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getHostname = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_hostname_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_HOSTNAME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_hostname_ret.fromXDR(payload);
      result = result.hostname();
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
  flags = flags || 0;
  resource = resource || 0;
  let args = new rp.remote_domain_migrate_prepare_tunnel_args({
    flags: flags,
    dname: dname,
    resource: resource,
    domXml: domXml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE_TUNNEL(), args.toXDR(), (err, payload) => {
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
Domain.prototype.isActive = function(callback) {

  let args = new rp.remote_domain_is_active_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_IS_ACTIVE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_is_active_ret.fromXDR(payload);
      result = result.active();
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
Domain.prototype.isPersistent = function(callback) {

  let args = new rp.remote_domain_is_persistent_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_IS_PERSISTENT(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_is_persistent_ret.fromXDR(payload);
      result = result.persistent();
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
Domain.prototype.isUpdated = function(callback) {

  let args = new rp.remote_domain_is_updated_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_IS_UPDATED(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_is_updated_ret.fromXDR(payload);
      result = result.updated();
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
Domain.prototype.getJobInfo = function(callback) {

  let args = new rp.remote_domain_get_job_info_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_JOB_INFO(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getJobStats = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_job_stats_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_JOB_STATS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.abortJob = function(callback) {

  let args = new rp.remote_domain_abort_job_args({
    dom: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_ABORT_JOB(), args.toXDR(), (err, payload) => {
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
Domain.prototype.migrateSetMaxDowntime = function(downtime, flags, callback) {
  downtime = downtime || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_set_max_downtime_args({
    dom: this.ref,
    downtime: downtime,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_SET_MAX_DOWNTIME(), args.toXDR(), (err, payload) => {
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
Domain.prototype.migrateGetCompressionCache = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_get_compression_cache_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_GET_COMPRESSION_CACHE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_get_compression_cache_ret.fromXDR(payload);
      result = result.cacheSize();
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
Domain.prototype.migrateSetCompressionCache = function(cacheSize, flags, callback) {
  cacheSize = cacheSize || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_set_compression_cache_args({
    dom: this.ref,
    cacheSize: cacheSize,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_SET_COMPRESSION_CACHE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.migrateSetMaxSpeed = function(bandwidth, flags, callback) {
  bandwidth = bandwidth || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_set_max_speed_args({
    dom: this.ref,
    bandwidth: bandwidth,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_SET_MAX_SPEED(), args.toXDR(), (err, payload) => {
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
Domain.prototype.migrateGetMaxSpeed = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_get_max_speed_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_GET_MAX_SPEED(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_get_max_speed_ret.fromXDR(payload);
      result = result.bandwidth();
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
Domain.prototype.managedSave = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_managed_save_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MANAGED_SAVE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.hasManagedSaveImage = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_has_managed_save_image_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_HAS_MANAGED_SAVE_IMAGE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_has_managed_save_image_ret.fromXDR(payload);
      result = result.result();
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
Domain.prototype.managedSaveRemove = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_managed_save_remove_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MANAGED_SAVE_REMOVE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.snapshotCreateXml = function(xmlDesc, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_create_xml_args({
    dom: this.ref,
    xmlDesc: xmlDesc,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_CREATE_XML(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_create_xml_ret.fromXDR(payload);
      result = result.snap();
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
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_get_xml_desc_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_GET_XML_DESC(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_get_xml_desc_ret.fromXDR(payload);
      result = result.xml();
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
Domain.prototype.snapshotNum = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_num_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_NUM(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_num_ret.fromXDR(payload);
      result = result.num();
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
Domain.prototype.snapshotListNames = function(maxnames, flags, callback) {
  maxnames = maxnames || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_list_names_args({
    dom: this.ref,
    maxnames: maxnames,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_LIST_NAMES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_list_names_ret.fromXDR(payload);
      result = result.names();
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
Domain.prototype.listAllSnapshots = function(needResults, flags, callback) {
  needResults = needResults || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_list_all_snapshots_args({
    dom: this.ref,
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_LIST_ALL_SNAPSHOTS(), args.toXDR(), (err, payload) => {
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
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_num_children_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_NUM_CHILDREN(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_num_children_ret.fromXDR(payload);
      result = result.num();
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
  maxnames = maxnames || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_list_children_names_args({
    snap: snap,
    maxnames: maxnames,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_LIST_CHILDREN_NAMES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_list_children_names_ret.fromXDR(payload);
      result = result.names();
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
  needResults = needResults || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_list_all_children_args({
    snapshot: snapshot,
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_LIST_ALL_CHILDREN(), args.toXDR(), (err, payload) => {
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
Domain.prototype.snapshotLookupByName = function(name, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_lookup_by_name_args({
    dom: this.ref,
    name: name,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_LOOKUP_BY_NAME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_lookup_by_name_ret.fromXDR(payload);
      result = result.snap();
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
Domain.prototype.hasCurrentSnapshot = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_has_current_snapshot_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_HAS_CURRENT_SNAPSHOT(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_has_current_snapshot_ret.fromXDR(payload);
      result = result.result();
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
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_get_parent_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_GET_PARENT(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_get_parent_ret.fromXDR(payload);
      result = result.snap();
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
Domain.prototype.snapshotCurrent = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_current_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_CURRENT(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_current_ret.fromXDR(payload);
      result = result.snap();
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
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_is_current_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_IS_CURRENT(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_is_current_ret.fromXDR(payload);
      result = result.current();
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
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_has_metadata_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_HAS_METADATA(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_snapshot_has_metadata_ret.fromXDR(payload);
      result = result.metadata();
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
  flags = flags || 0;
  let args = new rp.remote_domain_revert_to_snapshot_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_REVERT_TO_SNAPSHOT(), args.toXDR(), (err, payload) => {
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
  flags = flags || 0;
  let args = new rp.remote_domain_snapshot_delete_args({
    snap: snap,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SNAPSHOT_DELETE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.openConsole = function(devName, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_open_console_args({
    dom: this.ref,
    devName: devName,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_OPEN_CONSOLE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.openChannel = function(name, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_open_channel_args({
    dom: this.ref,
    name: name,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_OPEN_CHANNEL(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getState = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_state_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_STATE(), args.toXDR(), (err, payload) => {
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
Domain.prototype.migrateBegin3 = function(xmlin, flags, dname, resource, callback) {
  flags = flags || 0;
  resource = resource || 0;
  let args = new rp.remote_domain_migrate_begin3_args({
    dom: this.ref,
    xmlin: xmlin,
    flags: flags,
    dname: dname,
    resource: resource
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_BEGIN3(), args.toXDR(), (err, payload) => {
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
  flags = flags || 0;
  resource = resource || 0;
  let args = new rp.remote_domain_migrate_prepare3_args({
    cookieIn: cookieIn,
    uriIn: uriIn,
    flags: flags,
    dname: dname,
    resource: resource,
    domXml: domXml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE3(), args.toXDR(), (err, payload) => {
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
  flags = flags || 0;
  resource = resource || 0;
  let args = new rp.remote_domain_migrate_prepare_tunnel3_args({
    cookieIn: cookieIn,
    flags: flags,
    dname: dname,
    resource: resource,
    domXml: domXml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE_TUNNEL3(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_prepare_tunnel3_ret.fromXDR(payload);
      result = result.cookie_out();
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
Domain.prototype.migratePerform3 = function(xmlin, cookieIn, dconnuri, uri, flags, dname, resource, callback) {
  flags = flags || 0;
  resource = resource || 0;
  let args = new rp.remote_domain_migrate_perform3_args({
    dom: this.ref,
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
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PERFORM3(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_perform3_ret.fromXDR(payload);
      result = result.cookie_out();
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
  flags = flags || 0;
  cancelled = cancelled || 0;
  let args = new rp.remote_domain_migrate_finish3_args({
    dname: dname,
    cookieIn: cookieIn,
    dconnuri: dconnuri,
    uri: uri,
    flags: flags,
    cancelled: cancelled
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_FINISH3(), args.toXDR(), (err, payload) => {
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
Domain.prototype.migrateConfirm3 = function(cookieIn, flags, cancelled, callback) {
  flags = flags || 0;
  cancelled = cancelled || 0;
  let args = new rp.remote_domain_migrate_confirm3_args({
    dom: this.ref,
    cookieIn: cookieIn,
    flags: flags,
    cancelled: cancelled
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_CONFIRM3(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getControlInfo = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_control_info_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_CONTROL_INFO(), args.toXDR(), (err, payload) => {
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
Domain.prototype.openGraphics = function(idx, flags, callback) {
  idx = idx || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_open_graphics_args({
    dom: this.ref,
    idx: idx,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_OPEN_GRAPHICS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.openGraphicsFd = function(idx, flags, callback) {
  idx = idx || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_open_graphics_fd_args({
    dom: this.ref,
    idx: idx,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_OPEN_GRAPHICS_FD(), args.toXDR(), (err, payload) => {
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
Domain.prototype.shutdownFlags = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_shutdown_flags_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SHUTDOWN_FLAGS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getDiskErrors = function(maxerrors, flags, callback) {
  maxerrors = maxerrors || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_get_disk_errors_args({
    dom: this.ref,
    maxerrors: maxerrors,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_DISK_ERRORS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.fstrim = function(mountPoint, minimum, flags, callback) {
  minimum = minimum || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_fstrim_args({
    dom: this.ref,
    mountPoint: mountPoint,
    minimum: minimum,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_FSTRIM(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getTime = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_time_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_TIME(), args.toXDR(), (err, payload) => {
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
Domain.prototype.setTime = function(seconds, nseconds, flags, callback) {
  seconds = seconds || 0;
  nseconds = nseconds || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_set_time_args({
    dom: this.ref,
    seconds: seconds,
    nseconds: nseconds,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_TIME(), args.toXDR(), (err, payload) => {
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
Domain.prototype.migrateBegin3Params = function(params, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_begin3_params_args({
    dom: this.ref,
    params: params,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_BEGIN3_PARAMS(), args.toXDR(), (err, payload) => {
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
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_prepare3_params_args({
    params: params,
    cookieIn: cookieIn,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE3_PARAMS(), args.toXDR(), (err, payload) => {
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
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_prepare_tunnel3_params_args({
    params: params,
    cookieIn: cookieIn,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PREPARE_TUNNEL3_PARAMS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_prepare_tunnel3_params_ret.fromXDR(payload);
      result = result.cookie_out();
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
Domain.prototype.migratePerform3Params = function(dconnuri, params, cookieIn, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_perform3_params_args({
    dom: this.ref,
    dconnuri: dconnuri,
    params: params,
    cookieIn: cookieIn,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_PERFORM3_PARAMS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_migrate_perform3_params_ret.fromXDR(payload);
      result = result.cookie_out();
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
  flags = flags || 0;
  cancelled = cancelled || 0;
  let args = new rp.remote_domain_migrate_finish3_params_args({
    params: params,
    cookieIn: cookieIn,
    flags: flags,
    cancelled: cancelled
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_FINISH3_PARAMS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.migrateConfirm3Params = function(params, cookieIn, flags, cancelled, callback) {
  flags = flags || 0;
  cancelled = cancelled || 0;
  let args = new rp.remote_domain_migrate_confirm3_params_args({
    dom: this.ref,
    params: params,
    cookieIn: cookieIn,
    flags: flags,
    cancelled: cancelled
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_CONFIRM3_PARAMS(), args.toXDR(), (err, payload) => {
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
Domain.prototype.fsfreeze = function(mountpoints, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_fsfreeze_args({
    dom: this.ref,
    mountpoints: mountpoints,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_FSFREEZE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_fsfreeze_ret.fromXDR(payload);
      result = result.filesystems();
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
Domain.prototype.fsthaw = function(mountpoints, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_fsthaw_args({
    dom: this.ref,
    mountpoints: mountpoints,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_FSTHAW(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_fsthaw_ret.fromXDR(payload);
      result = result.filesystems();
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
Domain.prototype.getFsinfo = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_fsinfo_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_FSINFO(), args.toXDR(), (err, payload) => {
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
Domain.prototype.interfaceAddresses = function(source, flags, callback) {
  source = source || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_interface_addresses_args({
    dom: this.ref,
    source: source,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_INTERFACE_ADDRESSES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_interface_addresses_ret.fromXDR(payload);
      result = result.ifaces();
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
Domain.prototype.setUserPassword = function(user, password, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_set_user_password_args({
    dom: this.ref,
    user: user,
    password: password,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_USER_PASSWORD(), args.toXDR(), (err, payload) => {
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
Domain.prototype.rename = function(newName, flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_rename_args({
    dom: this.ref,
    newName: newName,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_RENAME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_rename_ret.fromXDR(payload);
      result = result.retcode();
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
Domain.prototype.migrateStartPostCopy = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_migrate_start_post_copy_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_MIGRATE_START_POST_COPY(), args.toXDR(), (err, payload) => {
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
Domain.prototype.getGuestVcpus = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_domain_get_guest_vcpus_args({
    dom: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_GET_GUEST_VCPUS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_get_guest_vcpus_ret.fromXDR(payload);
      result = result.params();
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
Domain.prototype.setGuestVcpus = function(cpumap, state, flags, callback) {
  state = state || 0;
  flags = flags || 0;
  let args = new rp.remote_domain_set_guest_vcpus_args({
    dom: this.ref,
    cpumap: cpumap,
    state: state,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_DOMAIN_SET_GUEST_VCPUS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

module.exports = Domain;
