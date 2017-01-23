'use strict';
const XDR = require('js-xdr');

function setup($defs) {
  return XDR.config(xdr => {
    xdr.const('VIR_NET_MESSAGE_INITIAL', 65536);
    xdr.const('VIR_NET_MESSAGE_LEGACY_PAYLOAD_MAX', 262120);
    xdr.const('VIR_NET_MESSAGE_MAX', 16777216);
    xdr.const('VIR_NET_MESSAGE_HEADER_MAX', 24);
    xdr.const('VIR_NET_MESSAGE_PAYLOAD_MAX', 16777192);
    xdr.const('VIR_NET_MESSAGE_LEN_MAX', 4);
    xdr.const('VIR_NET_MESSAGE_STRING_MAX', 4194304);
    xdr.const('VIR_NET_MESSAGE_NUM_FDS_MAX', 32);
    xdr.const('VIR_NET_MESSAGE_HEADER_XDR_LEN', 4);

    xdr.typedef('virNetMessageUUID', xdr.opaque($defs.VIR_UUID_BUFLEN));
    xdr.typedef('virNetMessageNonnullString', xdr.varArray(xdr.string(), xdr.lookup('VIR_NET_MESSAGE_STRING_MAX')));
    xdr.typedef('virNetMessageString', xdr.option(xdr.lookup('virNetMessageNonnullString')));
    xdr.typedef('virNetMessageDomain', xdr.option(xdr.lookup('virNetMessageNonnullDomain')));
    xdr.typedef('virNetMessageNetwork', xdr.option(xdr.lookup('virNetMessageNonnullNetwork')));


    xdr.struct('virNetMessageHeader', [
      [ 'prog', xdr.uint() ],
      [ 'vers', xdr.uint() ],
      [ 'proc', xdr.int() ],
      [ 'type', xdr.lookup('virNetMessageType') ],
      [ 'serial', xdr.uint() ],
      [ 'status', xdr.lookup('virNetMessageStatus') ]
    ]);

    xdr.struct('virNetMessageNonnullDomain', [
      [ 'name', xdr.lookup('virNetMessageNonnullString') ],
      [ 'uuid', xdr.lookup('virNetMessageUUID') ],
      [ 'id', xdr.int() ]
    ]);

    xdr.struct('virNetMessageNonnullNetwork', [
      [ 'name', xdr.lookup('virNetMessageNonnullString') ],
      [ 'uuid', xdr.lookup('virNetMessageUUID') ]
    ]);

    xdr.struct('virNetMessageError', [
      [ 'code', xdr.int() ],
      [ 'domain', xdr.int() ],
      [ 'message', xdr.lookup('virNetMessageString') ],
      [ 'level', xdr.int() ],
      [ 'dom', xdr.lookup('virNetMessageDomain') ],
      [ 'str1', xdr.lookup('virNetMessageString') ],
      [ 'str2', xdr.lookup('virNetMessageString') ],
      [ 'str3', xdr.lookup('virNetMessageString') ],
      [ 'int1', xdr.int() ],
      [ 'int2', xdr.int() ],
      [ 'net', xdr.lookup('virNetMessageNetwork') ]
    ]);

    xdr.enum('virNetMessageType', {
      VIR_NET_CALL: 0,
      VIR_NET_REPLY: 1,
      VIR_NET_MESSAGE: 2,
      VIR_NET_STREAM: 3,
      VIR_NET_CALL_WITH_FDS: 4,
      VIR_NET_REPLY_WITH_FDS: 5
    });

    xdr.enum('virNetMessageStatus', {
      VIR_NET_OK: 0,
      VIR_NET_ERROR: 1,
      VIR_NET_CONTINUE: 2
    });
  });
}

module.exports = setup;
