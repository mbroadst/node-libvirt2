'use strict';
const util = require('util');
let errors = module.exports = {};

/**
 * The base error all node-libvirt2 errors inherit from.
 *
 * @constructor
 * @alias Error
 */
errors.BaseError = function() {
  let tmp = Error.apply(this, arguments);
  tmp.name = this.name = 'VirtError';

  this.message = tmp.message;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  }
};
util.inherits(errors.BaseError, Error);

errors.ProtocolError = function(attributes) {
  errors.BaseError.call(this, 'protocol error');
  this.name = 'VirtProtocolError';
  Object.assign(this, attributes);
};
util.inherits(errors.ProtocolError, errors.BaseError);
