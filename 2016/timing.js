#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var complexFunction = function(loopCount) {
  for (var i = 0; i < loopCount; i += 1);
};

console.log('Date based timing:');
var oldTime = new Date();
complexFunction(1000000000);
// Dates convert to ms since 1970 automatically
console.info(new Date() - oldTime);
// ~461, but will vary largely on devices

console.log('\nConsole.time based timing:');

console.time('complexFunction: 1000000000');
complexFunction(1000000000);
console.timeEnd('complexFunction: 1000000000');
// complexFunction: 1000000000: 456.614ms

console.time('complexFunction: 1000');
complexFunction(1000);
console.timeEnd('complexFunction: 1000');
// complexFunction: 1000: 0.016ms, but some implementations only track whole ms

console.log('\nPerformance.now based timing:');

if (typeof performance !== 'undefined') {
  var start = performance.now();
  complexFunction(1000000000);
  console.log(performance.now() - start);
  // ~461 (with lots of precision), but will vary largely on devices
  
  start = performance.now();
  complexFunction(1000);
  console.log(performance.now() - start);
  // <1ms (with lots of precision), but will vary largely on devices
} else {
  console.log('The "performance" API is not present in this environment.');
}
