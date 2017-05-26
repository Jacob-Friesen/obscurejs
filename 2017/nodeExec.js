#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

if (typeof require === 'undefined') {
  throw(new Error('Only Node.js is supported for this example.'));
}

const exec = require('child_process').exec;

// From https://stackoverflow.com/a/13322549
const cmd = "ifconfig | grep -Eo 'inet (addr:)?([0-9]*\\.){3}[0-9]*' | grep -Eo '([0-9]*\\.){3}[0-9]*' | grep -v '127.0.0.1'";
exec(cmd, function(err, output, errorOuput) {
  if (err) {
    console.log(errorOuput);
    throw(new Error(err));
  }

  console.info('IP Address:', output);
  // IP Address: Your computers (or virtual machines) IP address
 
  nvmExample();
});

function nvmExample() {
  exec('. "$NVM_DIR/nvm.sh" && nvm ls', {
    // $HOME is a default environment variable that will point to the current users Home directory
    NVM_DIR: '$HOME/.nvm'
  }, function(err, output, errorOuput) {
    if (err) {
      console.log(errorOuput);
      throw(new Error(err));
    }

    console.info('Installed Node.js versions:\n', output);
    // Installed Node.js versions:
    // (Your Node.js versions installed with NVM)
  });
}
