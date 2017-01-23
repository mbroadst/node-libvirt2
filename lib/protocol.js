'use strict';

// values defined in header files
const definitions = {
  // from: // include/libvirt/libvirt-host.h
  VIR_SECURITY_MODEL_BUFLEN: (256 + 1),
  VIR_SECURITY_LABEL_BUFLEN: (4096 + 1),
  VIR_SECURITY_DOI_BUFLEN: (256 + 1),
  VIR_UUID_BUFLEN: (16),

  // from: include/libvirt/libvirt-common.h.in
  VIR_TYPED_PARAM_INT: 1,
  VIR_TYPED_PARAM_UINT: 2,
  VIR_TYPED_PARAM_LLONG: 3,
  VIR_TYPED_PARAM_ULLONG: 4,
  VIR_TYPED_PARAM_DOUBLE: 5,
  VIR_TYPED_PARAM_BOOLEAN: 6,
  VIR_TYPED_PARAM_STRING: 7
};

module.exports = {
  remote_protocol: require('./internal/remote_protocol')(definitions),
  virtnetprotocol: require('./internal/virnetprotocol')(definitions)
};
