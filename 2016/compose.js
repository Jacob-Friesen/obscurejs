#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Without Compose
console.log('Without Compose:');

var add = function(x, y) {
  return x + y;
};

var timesItself = function(x) {
  return x * x;
};

var excite = function(text) {
  return text + '!';
};

console.log(excite(timesItself(add(3, 4))));// 49!

// With Compose
console.log('With Compose:');

var compose = function() {
  var args = Array.prototype.slice.call(arguments);

  return function(passedIn) {
    if (args.length === 0) {
      return passedIn;
    }
    return compose.apply(this, args.slice(0, -1))( args.slice(-1)[0].apply(this, arguments) );
  }
};

console.log(compose(excite, timesItself, add)(3, 4));// 49!
