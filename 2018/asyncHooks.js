'use strict';
const version = Number(process.version.replace('v', '').split('.')[0]);
if (version < 8) {
  console.log('This example only works on Node 8 and above.');
}

const async_hooks = require('async_hooks');
const fs = require('fs');
const http = require('http');

const asyncHook = async_hooks.createHook({
  init: (asyncId, type, triggerAsyncId, resource) => {
    // Using console would trigger events which would trigger infinite recursion
    // console.info(asyncId, type, triggerAsyncId, resource);
    fs.writeSync(1, `Event: ${type}\n`);
    if (type === 'Timeout') {
      const stack = new Error().stack;
      fs.writeSync(1, `Callback: ${type} ${resource._onTimeout.toString()} \n`);
      fs.writeSync(1, `  Location: ${stack} \n`);
    }
  }
});

// asyncHook being defined in code snippet above
asyncHook.enable();

http.createServer((req, res) => {
  setTimeout(() => {
    console.log('Running an async event');
  });

  res.end('hello\n');
}).listen(5000);

console.log('The HTTP server was started on port 5000');


