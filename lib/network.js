'use strict';
const rp = {};
const proc = rp.remote_procedure;

function Network() {}

/**
 *
 * @param xml
 * @param [callback]
 */
Network.prototype.createXml = function(xml, callback) {
  let data = new rp.remote_network_create_xml_args({
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_CREATE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_create_xml_ret.fromXDR(payload);
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
Network.prototype.defineXml = function(xml, callback) {
  let data = new rp.remote_network_define_xml_args({
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_DEFINE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_define_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.undefine = function(net, callback) {
  let data = new rp.remote_network_undefine_args({
    net: net
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_UNDEFINE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param command
 * @param section
 * @param parentIndex
 * @param xml
 * @param flags
 * @param [callback]
 */
Network.prototype.update = function(net, command, section, parentIndex, xml, flags, callback) {
  let data = new rp.remote_network_update_args({
    net: net,
    command: command,
    section: section,
    parentIndex: parentIndex,
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_UPDATE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.create = function(net, callback) {
  let data = new rp.remote_network_create_args({
    net: net
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_CREATE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.destroy = function(net, callback) {
  let data = new rp.remote_network_destroy_args({
    net: net
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_DESTROY(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param flags
 * @param [callback]
 */
Network.prototype.getXmlDesc = function(net, flags, callback) {
  let data = new rp.remote_network_get_xml_desc_args({
    net: net,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_GET_XML_DESC(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_get_xml_desc_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.getBridgeName = function(net, callback) {
  let data = new rp.remote_network_get_bridge_name_args({
    net: net
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_GET_BRIDGE_NAME(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_get_bridge_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.getAutostart = function(net, callback) {
  let data = new rp.remote_network_get_autostart_args({
    net: net
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_GET_AUTOSTART(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_get_autostart_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param autostart
 * @param [callback]
 */
Network.prototype.setAutostart = function(net, autostart, callback) {
  let data = new rp.remote_network_set_autostart_args({
    net: net,
    autostart: autostart
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_SET_AUTOSTART(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.isActive = function(net, callback) {
  let data = new rp.remote_network_is_active_args({
    net: net
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_IS_ACTIVE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_is_active_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param [callback]
 */
Network.prototype.isPersistent = function(net, callback) {
  let data = new rp.remote_network_is_persistent_args({
    net: net
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_IS_PERSISTENT(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_is_persistent_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param net
 * @param mac
 * @param needResults
 * @param flags
 * @param [callback]
 */
Network.prototype.getDhcpLeases = function(net, mac, needResults, flags, callback) {
  let data = new rp.remote_network_get_dhcp_leases_args({
    net: net,
    mac: mac,
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_GET_DHCP_LEASES(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_get_dhcp_leases_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

