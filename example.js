var pkgcloud = require('pkgcloud'),
    log = require('./logging'),
    _ = require('underscore');

var logger = log.getLogger('debug');

var client = pkgcloud.providers.rackspace.storage.createClient(require('./creds.json'));

client.on('log::*', log.logFunction);