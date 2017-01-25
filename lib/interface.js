'use strict';
const rp = {};
const proc = rp.remote_procedure;

function Interface() {}

/**
 *
 * @param name
 * @param [callback]
 */
Interface.prototype.lookupByName = function(name, callback) {
  let data = new rp.remote_interface_lookup_by_name_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_LOOKUP_BY_NAME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_interface_lookup_by_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param mac
 * @param [callback]
 */
Interface.prototype.lookupByMacString = function(mac, callback) {
  let data = new rp.remote_interface_lookup_by_mac_string_args({
    mac: mac
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_LOOKUP_BY_MAC_STRING(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_interface_lookup_by_mac_string_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param iface
 * @param flags
 * @param [callback]
 */
Interface.prototype.getXmlDesc = function(iface, flags, callback) {
  let data = new rp.remote_interface_get_xml_desc_args({
    iface: iface,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_GET_XML_DESC(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_interface_get_xml_desc_ret.fromXDR(payload);
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
Interface.prototype.defineXml = function(xml, flags, callback) {
  let data = new rp.remote_interface_define_xml_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_DEFINE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_interface_define_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param iface
 * @param [callback]
 */
Interface.prototype.undefine = function(iface, callback) {
  let data = new rp.remote_interface_undefine_args({
    iface: iface
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_UNDEFINE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param iface
 * @param flags
 * @param [callback]
 */
Interface.prototype.create = function(iface, flags, callback) {
  let data = new rp.remote_interface_create_args({
    iface: iface,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_CREATE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param iface
 * @param flags
 * @param [callback]
 */
Interface.prototype.destroy = function(iface, flags, callback) {
  let data = new rp.remote_interface_destroy_args({
    iface: iface,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_DESTROY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param flags
 * @param [callback]
 */
Interface.prototype.changeBegin = function(flags, callback) {
  let data = new rp.remote_interface_change_begin_args({
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_CHANGE_BEGIN(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param flags
 * @param [callback]
 */
Interface.prototype.changeCommit = function(flags, callback) {
  let data = new rp.remote_interface_change_commit_args({
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_CHANGE_COMMIT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param flags
 * @param [callback]
 */
Interface.prototype.changeRollback = function(flags, callback) {
  let data = new rp.remote_interface_change_rollback_args({
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_CHANGE_ROLLBACK(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param iface
 * @param [callback]
 */
Interface.prototype.isActive = function(iface, callback) {
  let data = new rp.remote_interface_is_active_args({
    iface: iface
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_IS_ACTIVE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_interface_is_active_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

