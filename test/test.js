'use strict';
const Promise = require('bluebird'),
      Connection = require('../lib/connection');

let client = new Connection();
client.connect({ host: '127.0.0.1', port: 16509 }, err => {
  if (err) {
    console.log('error: ', err);
    process.exit(1);
    return;
  }

  console.log('connected!');
  client.listDomains(100)
    .then(domains => Promise.map(domains, id => client.lookupDomainById(id)))
    .then(domains => Promise.map(domains, d => d.getState(0)))
    .then(names => console.log('state: ', names))
    .catch(err => console.log(err));
});

