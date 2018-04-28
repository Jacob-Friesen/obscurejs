'use strict';
// Don't forget to run `npm install dotenv` to ensure the .env can be loaded.
// Try running with PASSEDIN='test' node 2018/nodeEnvironmentVariables.js
let path = '.env';
if (process.cwd().indexOf('2018') < 0) {
  path = '2018/.env';
}
require('dotenv').config({ path });

console.log(process.cwd());

console.log('HOME', process.env.HOME);
// HOME (Your home directory)

console.log('PASSEDIN', process.env.PASSEDIN);
// PASSEDIN test

console.log('MODE (from env)', process.env.MODE);
// MODE (from env) development

console.log('PORT (from env)', process.env.PORT);
// PORT (from env) 5000
