#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Curry function

var curry = function(callback, prefixArgs) {
  prefixArgs = prefixArgs || [];
  var arity = callback.length;

  return function() {
    // [].slice is equivalent to Array.prototype.slice.call
    var innerArgs = [].slice.call(arguments),
        combinedArgs = prefixArgs.concat(innerArgs);

    if (combinedArgs.length >= arity) {
      return callback.apply(this, combinedArgs);
    }

    return curry(callback, combinedArgs);
  };
};

// Basic curried function
console.log('Basic curried function:');

var add3 = function(x, y, z) {
  return x * y * z;
};

var curriedAdd = curry(add3);
console.log(curriedAdd(2)(3)(7));// 42
console.log(curriedAdd(2, 3)(7));// 42
console.log(curriedAdd(2, 3, 7));// 42
console.log(curriedAdd(2)(3, 7));// 42
console.log(curriedAdd(2)(3)(7));// 42

// API based example
console.log('\nAPI based example:');

var printResults = curry(function(prefix, first, last) {
  console.log(prefix + ', ' + first + ' ' + last);
});

var getPrefix = function(callback) {
  // Simulate a server call.
  setTimeout(function() {
    callback('Hello');
  }, 200);
};

var getFirst = function(callback) {
  setTimeout(function() {
    callback('Bruce');
  }, 200);
};

var getLast = function(callback) {
  setTimeout(function() {
    callback('Wayne');
  }, 200);
};

getPrefix(function(prefix) {
  var curriedResults = printResults(prefix);
  getFirst(function(first) {
    curriedResults = curriedResults(first);
    getLast(curriedResults);
  });
});
