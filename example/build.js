var browserify = require('browserify');
var fs = require('fs');

var b = browserify();
b.require(__dirname + '/../index.js', { expose: 'fs' });
b.add(__dirname + '/test.js');
b.bundle().pipe(process.stdout);
