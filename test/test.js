'use strict';
const Connection = require('../lib/connection');

let client = new Connection();
client.connect({ host: '192.168.1.11', port: 16509 }, err => {
  if (err) {
    console.log('error: ', err);
    process.exit(1);
    return;
  }

  console.log('connected!');

  // client.getHostname((err, result) => {
  //   console.log('bananas');
  //   console.log('result: ', result);
  // });

  client.getHostname()
    .then(hostname => console.log('hostname: ', hostname))
    .catch(err => console.log(err));

  client.getSysinfo(0)
    .then(sysinfo => console.log('sysinfo: ', sysinfo))
    .catch(err => console.log(err));
});

