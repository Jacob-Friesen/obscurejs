#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
// 'use strict'; The fib example works best without this

console.info('Default JS fibonacci function:');

function fib2(n) {
  if (n < 2) {
    return n;
  }

  return fib2(n - 1) + fib2(n - 2);
};

console.log(fib2(0));// 0
console.log(fib2(1));// 1
console.log(fib2(2));// 1
console.log(fib2(11));// 89
console.log(fib2(17));// 1597

// Ruby Fibonacci for easy comparison (in ruby.js too)
// def fib(n)
//   if (n < 2)
//     return n
//   end

//   fib(n - 1) + fib(n - 2)
// end

// puts fib 0
// puts fib 1
// puts fib 2
// puts fib 11
// puts fib 17

console.info('\nMade to look like Ruby:');

// Symbols can be used as literal values. To reassign with the global, this must set globally with
// no prefix. i.e. this is not strict mode compliant
fib = Symbol('fib');

const puts = {};

function def(name, callback) {
  // This will always be in the format Symbol('string') for all strings
  const symbolString = String(name).slice(7, -1);

  // Make the given function accessible anywhere
  global[symbolString] = callback;

  // The ... take all the arguments and put them into the variable beside them
  puts[symbolString] = function(...args) {
    const result = callback.apply(this, args);
    console.log(result);
  };
};

def(fib, (n) => {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
})

puts. fib(0)
puts. fib(1)
puts. fib(2)
puts. fib(11)
puts. fib(17)



