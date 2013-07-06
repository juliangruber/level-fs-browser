var fs = require('fs');

fs.readFile('foo', function () {
  console.log(arguments);
});
