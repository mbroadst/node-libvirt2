'use strict';
const Promise = require('bluebird');
const rp = require('./protocol').remote;
const proc = rp.remote_procedure;

class Nwfilter {
  constructor(conn, attr) {
    this.conn = conn;
    this.ref = new rp.remote_nonnull_nwfilter(attr);
  }
}

/**
 *
 * @param {String} xml
 * @param {Function} [callback]
 */
Nwfilter.prototype.defineXml = function(xml, callback) {

  let args = new rp.remote_nwfilter_define_xml_args({
    xml: xml
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NWFILTER_DEFINE_XML(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_nwfilter_define_xml_ret.fromXDR(payload);
      result = result.nwfilter();
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
Nwfilter.prototype.undefine = function(callback) {

  let args = new rp.remote_nwfilter_undefine_args({
    nwfilter: this.ref
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NWFILTER_UNDEFINE(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      cb();
    });
  });

  return promise.asCallback(callback);
};

/**
 *
 * @param {Number} flags
 * @param {Function} [callback]
 */
Nwfilter.prototype.getXmlDesc = function(flags, callback) {
  flags = flags || 0;
  let args = new rp.remote_nwfilter_get_xml_desc_args({
    nwfilter: this.ref,
    flags: flags
  });

  let promise = new Promise((resolve, reject) => {
    let cb = (e, r) => (e) ? reject(e) : resolve(r);
    this.conn.request(proc.REMOTE_PROC_NWFILTER_GET_XML_DESC(), args.toXDR(), (err, payload) => {
      if (err) { cb(err, null); return; }
      let result = rp.remote_nwfilter_get_xml_desc_ret.fromXDR(payload);
      result = result.xml();
      result = result.hasOwnProperty('_attributes') ? result._attributes : result;
      cb(null, result);
    });
  });

  return promise.asCallback(callback);
};

module.exports = Nwfilter;
