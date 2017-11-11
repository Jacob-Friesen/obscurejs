#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Type Coercion vs Not Using It');

// Using type coercion
console.log('1' == 1);
// true

// Not using it
console.log('1' === 1);
// false
console.log(1 === 1);
// true

console.log('\nMath.sign() examples:');

console.log(Math.sign(150));
// 1
console.log(Math.sign(-150));
// -1
console.log(Math.sign('-150'));
// -1
console.log(Math.sign(0));
// 0
console.log(Math.sign('0'));
// 0
console.log(Math.sign(-0));
// -0
console.log(Math.sign('-0'));
// -0
console.log(Math.sign('string'));
// NaN
console.log(Math.sign());
// NaN
console.log(Math.sign(-1e-323));
// -1

console.log('\nMath.sign implementation using coercion:');

function sign(value) {
  if (value < 0) {
    return -1;
  }
  if (value > 0) {
    return 1;
  }

  // sign differentiates between -0 and 0.
  // Normal equality checks will not work
  if ((1/value) === -Infinity) {
    return -0;
  }
  if (value == 0) {
    return 0;
  }

  return NaN;
}

console.log(sign(150));
// 1
console.log(sign(-150));
// -1
console.log(sign('-150'));
// -1
console.log(sign(0));
// 0
console.log(sign('0'));
// 0
console.log(sign(-0));
// -0
console.log(Math.sign('-0'));
// -0
console.log(sign('string'));
// NaN
console.log(sign());
// NaN
console.log(Math.sign(-1e-323));
// -1
