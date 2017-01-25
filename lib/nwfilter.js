'use strict';
const rp = {};
const proc = rp.remote_procedure;

function Nwfilter() {}

/**
 *
 * @param xml
 * @param [callback]
 */
Nwfilter.prototype.defineXml = function(xml, callback) {
  let data = new rp.remote_nwfilter_define_xml_args({
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NWFILTER_DEFINE_XML(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_nwfilter_define_xml_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param nwfilter
 * @param [callback]
 */
Nwfilter.prototype.undefine = function(nwfilter, callback) {
  let data = new rp.remote_nwfilter_undefine_args({
    nwfilter: nwfilter
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NWFILTER_UNDEFINE(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param nwfilter
 * @param flags
 * @param [callback]
 */
Nwfilter.prototype.getXmlDesc = function(nwfilter, flags, callback) {
  let data = new rp.remote_nwfilter_get_xml_desc_args({
    nwfilter: nwfilter,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.request(proc.REMOTE_PROC_NWFILTER_GET_XML_DESC(), data.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_nwfilter_get_xml_desc_ret.fromXDR(payload);
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

