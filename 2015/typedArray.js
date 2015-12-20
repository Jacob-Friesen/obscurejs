#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var TOTAL = 10000000;

rl.question("Use a Typed Array instead of a regular Array (y/n)?", function(answer) {
  if (answer === 'y') {
    var largeArray = new Int16Array(TOTAL);
    console.log('Typed Array heap used:  ', process.memoryUsage().heapUsed);
    // Typed Array heap used:   4376184 (exact number may vary a little each time)
  } else {
    var largeArray = new Array(TOTAL);
    console.log('Regular Array heap used:', process.memoryUsage().heapUsed);
    // Regular Array heap used: 84373912 (exact number may vary a little each time)
  }

  rl.close();
});
