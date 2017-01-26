'use strict';
const rp = {};
const proc = rp.remote_procedure;

class Connect {
  constructor() {}
}

/**
 *
 * @param name
 * @param flags
 * @param [callback]
 */
Connect.prototype.open = function(name, flags, callback) {
  let args = new rp.remote_connect_open_args({
    name: name,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_OPEN(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param feature
 * @param [callback]
 */
Connect.prototype.supportsFeature = function(feature, callback) {
  let args = new rp.remote_connect_supports_feature_args({
    feature: feature
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_SUPPORTS_FEATURE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_supports_feature_ret.fromXDR(payload);
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
Connect.prototype.getType = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_TYPE(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_type_ret.fromXDR(payload);
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
Connect.prototype.getVersion = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_VERSION(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_version_ret.fromXDR(payload);
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
Connect.prototype.getLibVersion = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_LIB_VERSION(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_lib_version_ret.fromXDR(payload);
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
Connect.prototype.getHostname = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_HOSTNAME(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_hostname_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param flags
 * @param [callback]
 */
Connect.prototype.getSysinfo = function(flags, callback) {
  let args = new rp.remote_connect_get_sysinfo_args({
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_SYSINFO(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_sysinfo_ret.fromXDR(payload);
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
Connect.prototype.getUri = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_URI(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_uri_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param type
 * @param [callback]
 */
Connect.prototype.getMaxVcpus = function(type, callback) {
  let args = new rp.remote_connect_get_max_vcpus_args({
    type: type
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_MAX_VCPUS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_max_vcpus_ret.fromXDR(payload);
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
Connect.prototype.getCapabilities = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_CAPABILITIES(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_capabilities_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param emulatorbin
 * @param arch
 * @param machine
 * @param virttype
 * @param flags
 * @param [callback]
 */
Connect.prototype.getDomainCapabilities = function(emulatorbin, arch, machine, virttype, flags, callback) {
  let args = new rp.remote_connect_get_domain_capabilities_args({
    emulatorbin: emulatorbin,
    arch: arch,
    machine: machine,
    virttype: virttype,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_DOMAIN_CAPABILITIES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_domain_capabilities_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param maxids
 * @param [callback]
 */
Connect.prototype.listDomains = function(maxids, callback) {
  let args = new rp.remote_connect_list_domains_args({
    maxids: maxids
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_DOMAINS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_domains_ret.fromXDR(payload);
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
Connect.prototype.numOfDomains = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NUM_OF_DOMAINS(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_num_of_domains_ret.fromXDR(payload);
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
Connect.prototype.createDomainXml = function(xmlDesc, flags, callback) {
  let args = new rp.remote_domain_create_xml_args({
    xmlDesc: xmlDesc,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_CREATE_XML(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_create_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Domain(this, result));
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
Connect.prototype.createDomainXmlWithFiles = function(xmlDesc, flags, callback) {
  let args = new rp.remote_domain_create_xml_with_files_args({
    xmlDesc: xmlDesc,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_CREATE_XML_WITH_FILES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_create_xml_with_files_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Domain(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param id
 * @param [callback]
 */
Connect.prototype.lookupDomainById = function(id, callback) {
  let args = new rp.remote_domain_lookup_by_id_args({
    id: id
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_LOOKUP_BY_ID(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_lookup_by_id_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Domain(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param uuid
 * @param [callback]
 */
Connect.prototype.lookupDomainByUuid = function(uuid, callback) {
  let args = new rp.remote_domain_lookup_by_uuid_args({
    uuid: uuid
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_LOOKUP_BY_UUID(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_lookup_by_uuid_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Domain(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param [callback]
 */
Connect.prototype.lookupDomainByName = function(name, callback) {
  let args = new rp.remote_domain_lookup_by_name_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_DOMAIN_LOOKUP_BY_NAME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_domain_lookup_by_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Domain(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param maxnames
 * @param [callback]
 */
Connect.prototype.listDefinedDomains = function(maxnames, callback) {
  let args = new rp.remote_connect_list_defined_domains_args({
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_DEFINED_DOMAINS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_defined_domains_ret.fromXDR(payload);
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
Connect.prototype.numOfDefinedDomains = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NUM_OF_DEFINED_DOMAINS(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_num_of_defined_domains_ret.fromXDR(payload);
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
Connect.prototype.numOfNetworks = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NUM_OF_NETWORKS(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_num_of_networks_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param maxnames
 * @param [callback]
 */
Connect.prototype.listNetworks = function(maxnames, callback) {
  let args = new rp.remote_connect_list_networks_args({
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_NETWORKS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_networks_ret.fromXDR(payload);
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
Connect.prototype.numOfDefinedNetworks = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NUM_OF_DEFINED_NETWORKS(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_num_of_defined_networks_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param maxnames
 * @param [callback]
 */
Connect.prototype.listDefinedNetworks = function(maxnames, callback) {
  let args = new rp.remote_connect_list_defined_networks_args({
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_DEFINED_NETWORKS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_defined_networks_ret.fromXDR(payload);
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
Connect.prototype.lookupNetworkByUuid = function(uuid, callback) {
  let args = new rp.remote_network_lookup_by_uuid_args({
    uuid: uuid
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_LOOKUP_BY_UUID(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_lookup_by_uuid_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Network(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param [callback]
 */
Connect.prototype.lookupNetworkByName = function(name, callback) {
  let args = new rp.remote_network_lookup_by_name_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_LOOKUP_BY_NAME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_lookup_by_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Network(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param xml
 * @param [callback]
 */
Connect.prototype.createNetworkXml = function(xml, callback) {
  let args = new rp.remote_network_create_xml_args({
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NETWORK_CREATE_XML(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_network_create_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Network(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param [callback]
 */
Connect.prototype.numOfNwfilters = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NUM_OF_NWFILTERS(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_num_of_nwfilters_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param maxnames
 * @param [callback]
 */
Connect.prototype.listNwfilters = function(maxnames, callback) {
  let args = new rp.remote_connect_list_nwfilters_args({
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_NWFILTERS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_nwfilters_ret.fromXDR(payload);
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
Connect.prototype.lookupNwfilterByUuid = function(uuid, callback) {
  let args = new rp.remote_nwfilter_lookup_by_uuid_args({
    uuid: uuid
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NWFILTER_LOOKUP_BY_UUID(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_nwfilter_lookup_by_uuid_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Nwfilter(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param [callback]
 */
Connect.prototype.lookupNwfilterByName = function(name, callback) {
  let args = new rp.remote_nwfilter_lookup_by_name_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NWFILTER_LOOKUP_BY_NAME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_nwfilter_lookup_by_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Nwfilter(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param [callback]
 */
Connect.prototype.numOfInterfaces = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NUM_OF_INTERFACES(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_num_of_interfaces_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param maxnames
 * @param [callback]
 */
Connect.prototype.listInterfaces = function(maxnames, callback) {
  let args = new rp.remote_connect_list_interfaces_args({
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_INTERFACES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_interfaces_ret.fromXDR(payload);
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
Connect.prototype.numOfDefinedInterfaces = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NUM_OF_DEFINED_INTERFACES(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_num_of_defined_interfaces_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param maxnames
 * @param [callback]
 */
Connect.prototype.listDefinedInterfaces = function(maxnames, callback) {
  let args = new rp.remote_connect_list_defined_interfaces_args({
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_DEFINED_INTERFACES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_defined_interfaces_ret.fromXDR(payload);
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
Connect.prototype.lookupInterfaceByName = function(name, callback) {
  let args = new rp.remote_interface_lookup_by_name_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_LOOKUP_BY_NAME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_interface_lookup_by_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Interface(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param mac
 * @param [callback]
 */
Connect.prototype.lookupInterfaceByMacString = function(mac, callback) {
  let args = new rp.remote_interface_lookup_by_mac_string_args({
    mac: mac
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_INTERFACE_LOOKUP_BY_MAC_STRING(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_interface_lookup_by_mac_string_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Interface(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param [callback]
 */
Connect.prototype.numOfStoragePools = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NUM_OF_STORAGE_POOLS(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_num_of_storage_pools_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param maxnames
 * @param [callback]
 */
Connect.prototype.listStoragePools = function(maxnames, callback) {
  let args = new rp.remote_connect_list_storage_pools_args({
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_STORAGE_POOLS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_storage_pools_ret.fromXDR(payload);
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
Connect.prototype.numOfDefinedStoragePools = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NUM_OF_DEFINED_STORAGE_POOLS(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_num_of_defined_storage_pools_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param maxnames
 * @param [callback]
 */
Connect.prototype.listDefinedStoragePools = function(maxnames, callback) {
  let args = new rp.remote_connect_list_defined_storage_pools_args({
    maxnames: maxnames
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_DEFINED_STORAGE_POOLS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_defined_storage_pools_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param type
 * @param srcSpec
 * @param flags
 * @param [callback]
 */
Connect.prototype.findStoragePoolSources = function(type, srcSpec, flags, callback) {
  let args = new rp.remote_connect_find_storage_pool_sources_args({
    type: type,
    srcSpec: srcSpec,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_FIND_STORAGE_POOL_SOURCES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_find_storage_pool_sources_ret.fromXDR(payload);
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
Connect.prototype.lookupStoragePoolByUuid = function(uuid, callback) {
  let args = new rp.remote_storage_pool_lookup_by_uuid_args({
    uuid: uuid
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_LOOKUP_BY_UUID(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_lookup_by_uuid_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new StoragePool(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param [callback]
 */
Connect.prototype.lookupStoragePoolByName = function(name, callback) {
  let args = new rp.remote_storage_pool_lookup_by_name_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_LOOKUP_BY_NAME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_lookup_by_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new StoragePool(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param vol
 * @param [callback]
 */
Connect.prototype.lookupStoragePoolByVolume = function(vol, callback) {
  let args = new rp.remote_storage_pool_lookup_by_volume_args({
    vol: vol
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_LOOKUP_BY_VOLUME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_lookup_by_volume_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new StoragePool(this, result));
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
Connect.prototype.createStoragePoolXml = function(xml, flags, callback) {
  let args = new rp.remote_storage_pool_create_xml_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_STORAGE_POOL_CREATE_XML(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_storage_pool_create_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new StoragePool(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param name
 * @param [callback]
 */
Connect.prototype.lookupNodeDeviceByName = function(name, callback) {
  let args = new rp.remote_node_device_lookup_by_name_args({
    name: name
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NODE_DEVICE_LOOKUP_BY_NAME(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_lookup_by_name_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new NodeDevice(this, result));
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
Connect.prototype.createNodeDeviceXml = function(xmlDesc, flags, callback) {
  let args = new rp.remote_node_device_create_xml_args({
    xmlDesc: xmlDesc,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NODE_DEVICE_CREATE_XML(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_node_device_create_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new NodeDevice(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param [callback]
 */
Connect.prototype.domainEventRegister = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_DOMAIN_EVENT_REGISTER(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_domain_event_register_ret.fromXDR(payload);
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
Connect.prototype.domainEventDeregister = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_DOMAIN_EVENT_DEREGISTER(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_domain_event_deregister_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param nativeFormat
 * @param nativeConfig
 * @param flags
 * @param [callback]
 */
Connect.prototype.domainXmlFromNative = function(nativeFormat, nativeConfig, flags, callback) {
  let args = new rp.remote_connect_domain_xml_from_native_args({
    nativeFormat: nativeFormat,
    nativeConfig: nativeConfig,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_DOMAIN_XML_FROM_NATIVE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_domain_xml_from_native_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param nativeFormat
 * @param domainXml
 * @param flags
 * @param [callback]
 */
Connect.prototype.domainXmlToNative = function(nativeFormat, domainXml, flags, callback) {
  let args = new rp.remote_connect_domain_xml_to_native_args({
    nativeFormat: nativeFormat,
    domainXml: domainXml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_DOMAIN_XML_TO_NATIVE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_domain_xml_to_native_ret.fromXDR(payload);
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
Connect.prototype.numOfSecrets = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NUM_OF_SECRETS(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_num_of_secrets_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param maxuuids
 * @param [callback]
 */
Connect.prototype.listSecrets = function(maxuuids, callback) {
  let args = new rp.remote_connect_list_secrets_args({
    maxuuids: maxuuids
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_SECRETS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_secrets_ret.fromXDR(payload);
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
Connect.prototype.lookupSecretByUuid = function(uuid, callback) {
  let args = new rp.remote_secret_lookup_by_uuid_args({
    uuid: uuid
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_SECRET_LOOKUP_BY_UUID(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_secret_lookup_by_uuid_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Secret(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param usageType
 * @param usageID
 * @param [callback]
 */
Connect.prototype.lookupSecretByUsage = function(usageType, usageID, callback) {
  let args = new rp.remote_secret_lookup_by_usage_args({
    usageType: usageType,
    usageID: usageID
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_SECRET_LOOKUP_BY_USAGE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_secret_lookup_by_usage_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, new Secret(this, result));
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param [callback]
 */
Connect.prototype.isSecure = function(callback) {
  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_IS_SECURE(), null, (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_is_secure_ret.fromXDR(payload);
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
Connect.prototype.compareCpu = function(xml, flags, callback) {
  let args = new rp.remote_connect_compare_cpu_args({
    xml: xml,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_COMPARE_CPU(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_compare_cpu_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param xmlCPUs
 * @param flags
 * @param [callback]
 */
Connect.prototype.baselineCpu = function(xmlCPUs, flags, callback) {
  let args = new rp.remote_connect_baseline_cpu_args({
    xmlCPUs: xmlCPUs,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_BASELINE_CPU(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_baseline_cpu_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param eventID
 * @param [callback]
 */
Connect.prototype.domainEventRegisterAny = function(eventID, callback) {
  let args = new rp.remote_connect_domain_event_register_any_args({
    eventID: eventID
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_DOMAIN_EVENT_REGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param eventID
 * @param [callback]
 */
Connect.prototype.domainEventDeregisterAny = function(eventID, callback) {
  let args = new rp.remote_connect_domain_event_deregister_any_args({
    eventID: eventID
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_DOMAIN_EVENT_DEREGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param eventID
 * @param dom
 * @param [callback]
 */
Connect.prototype.domainEventCallbackRegisterAny = function(eventID, dom, callback) {
  let args = new rp.remote_connect_domain_event_callback_register_any_args({
    eventID: eventID,
    dom: dom
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_DOMAIN_EVENT_CALLBACK_REGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_domain_event_callback_register_any_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param callbackID
 * @param [callback]
 */
Connect.prototype.domainEventCallbackDeregisterAny = function(callbackID, callback) {
  let args = new rp.remote_connect_domain_event_callback_deregister_any_args({
    callbackID: callbackID
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_DOMAIN_EVENT_CALLBACK_DEREGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param needResults
 * @param flags
 * @param [callback]
 */
Connect.prototype.listAllDomains = function(needResults, flags, callback) {
  let args = new rp.remote_connect_list_all_domains_args({
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_ALL_DOMAINS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_all_domains_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param needResults
 * @param flags
 * @param [callback]
 */
Connect.prototype.listAllStoragePools = function(needResults, flags, callback) {
  let args = new rp.remote_connect_list_all_storage_pools_args({
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_ALL_STORAGE_POOLS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_all_storage_pools_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param needResults
 * @param flags
 * @param [callback]
 */
Connect.prototype.listAllNetworks = function(needResults, flags, callback) {
  let args = new rp.remote_connect_list_all_networks_args({
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_ALL_NETWORKS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_all_networks_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param needResults
 * @param flags
 * @param [callback]
 */
Connect.prototype.listAllInterfaces = function(needResults, flags, callback) {
  let args = new rp.remote_connect_list_all_interfaces_args({
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_ALL_INTERFACES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_all_interfaces_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param needResults
 * @param flags
 * @param [callback]
 */
Connect.prototype.listAllNodeDevices = function(needResults, flags, callback) {
  let args = new rp.remote_connect_list_all_node_devices_args({
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_ALL_NODE_DEVICES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_all_node_devices_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param needResults
 * @param flags
 * @param [callback]
 */
Connect.prototype.listAllNwfilters = function(needResults, flags, callback) {
  let args = new rp.remote_connect_list_all_nwfilters_args({
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_ALL_NWFILTERS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_all_nwfilters_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param needResults
 * @param flags
 * @param [callback]
 */
Connect.prototype.listAllSecrets = function(needResults, flags, callback) {
  let args = new rp.remote_connect_list_all_secrets_args({
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_LIST_ALL_SECRETS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_list_all_secrets_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param arch
 * @param needResults
 * @param flags
 * @param [callback]
 */
Connect.prototype.getCpuModelNames = function(arch, needResults, flags, callback) {
  let args = new rp.remote_connect_get_cpu_model_names_args({
    arch: arch,
    needResults: needResults,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_CPU_MODEL_NAMES(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_cpu_model_names_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param eventID
 * @param net
 * @param [callback]
 */
Connect.prototype.networkEventRegisterAny = function(eventID, net, callback) {
  let args = new rp.remote_connect_network_event_register_any_args({
    eventID: eventID,
    net: net
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NETWORK_EVENT_REGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_network_event_register_any_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param callbackID
 * @param [callback]
 */
Connect.prototype.networkEventDeregisterAny = function(callbackID, callback) {
  let args = new rp.remote_connect_network_event_deregister_any_args({
    callbackID: callbackID
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NETWORK_EVENT_DEREGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param eventID
 * @param pool
 * @param [callback]
 */
Connect.prototype.storagePoolEventRegisterAny = function(eventID, pool, callback) {
  let args = new rp.remote_connect_storage_pool_event_register_any_args({
    eventID: eventID,
    pool: pool
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_STORAGE_POOL_EVENT_REGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_storage_pool_event_register_any_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param callbackID
 * @param [callback]
 */
Connect.prototype.storagePoolEventDeregisterAny = function(callbackID, callback) {
  let args = new rp.remote_connect_storage_pool_event_deregister_any_args({
    callbackID: callbackID
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_STORAGE_POOL_EVENT_DEREGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param eventID
 * @param dev
 * @param [callback]
 */
Connect.prototype.nodeDeviceEventRegisterAny = function(eventID, dev, callback) {
  let args = new rp.remote_connect_node_device_event_register_any_args({
    eventID: eventID,
    dev: dev
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NODE_DEVICE_EVENT_REGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_node_device_event_register_any_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param callbackID
 * @param [callback]
 */
Connect.prototype.nodeDeviceEventDeregisterAny = function(callbackID, callback) {
  let args = new rp.remote_connect_node_device_event_deregister_any_args({
    callbackID: callbackID
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_NODE_DEVICE_EVENT_DEREGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param doms
 * @param stats
 * @param flags
 * @param [callback]
 */
Connect.prototype.getAllDomainStats = function(doms, stats, flags, callback) {
  let args = new rp.remote_connect_get_all_domain_stats_args({
    doms: doms,
    stats: stats,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_GET_ALL_DOMAIN_STATS(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_get_all_domain_stats_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param eventID
 * @param secret
 * @param [callback]
 */
Connect.prototype.secretEventRegisterAny = function(eventID, secret, callback) {
  let args = new rp.remote_connect_secret_event_register_any_args({
    eventID: eventID,
    secret: secret
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_SECRET_EVENT_REGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_connect_secret_event_register_any_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param callbackID
 * @param [callback]
 */
Connect.prototype.secretEventDeregisterAny = function(callbackID, callback) {
  let args = new rp.remote_connect_secret_event_deregister_any_args({
    callbackID: callbackID
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_CONNECT_SECRET_EVENT_DEREGISTER_ANY(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

