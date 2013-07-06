var leveljs = require('level-js');
var levelup = require('levelup');
var fs = require('level-fs');

var db = levelup('level-fs', { db: leveljs });
module.exports = fs(db);
