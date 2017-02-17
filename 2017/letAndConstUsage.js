#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.info('const example:')

function ObjectA() {
  this.property1 = 'value1';
}

const objectA = new ObjectA(); 

// later in your script
objectA.property1 = 'value2';

// Most environments error, but older ones just silently don't set it
// objectA = {};

console.log(objectA.property1);

console.info('\nlet vs const example:');

function asyncLoop() {
  for (var a = 1; a <= 5; a += 1) {
    setTimeout(function() {
      console.log('Async Loop Iteration (var):', a);
    }, 500)
  }

  for (let b = 1; b <= 5; b += 1) {
    setTimeout(function() {
      console.log('Async Loop Iteration (let):', b);
    }, 500)
  }
}
asyncLoop();
// Async Loop Iteration (var): 6
// Async Loop Iteration (var): 6
// Async Loop Iteration (var): 6
// Async Loop Iteration (var): 6
// Async Loop Iteration (var): 6
// Async Loop Iteration (let): 1
// Async Loop Iteration (let): 2
// Async Loop Iteration (let): 3
// Async Loop Iteration (let): 4
// Async Loop Iteration (let): 5
