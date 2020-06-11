#!/usr/bin/env node

var fs = require('fs');
var pkg;

if (process.argv[2] === '-v' || process.argv[2] === '--version') {
  pkg = JSON.parse(fs.readFileSync(require.resolve('../package.json'), 'utf8'));
  console.log('v' + pkg.version);
  process.exit(0);
}

require('../cli');