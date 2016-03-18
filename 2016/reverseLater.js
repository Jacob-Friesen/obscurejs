#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// The compose function from the previous post

var compose = function() {
  var args = Array.prototype.slice.call(arguments);

  return function(passedIn) {
    if (args.length === 0) {
      return passedIn;
    }
    return compose.apply(this, args.slice(0, -1))( args.slice(-1)[0].apply(this, arguments) );
  };
};

// A basic example
console.log('A basic example:');

var reverseLater = function(callback) {
  return function() {
    var args = Array.prototype.slice.call(arguments);

    return callback.apply(this, args.reverse());
  };
};

var sayMessage = function(firstName, lastName) {
  console.log('Hello', firstName + ', ' + lastName);
};

sayMessage('Colt', 'Beretta');
// Hello Colt, Beretta

var messageReversed = reverseLater(sayMessage);

messageReversed('Colt', 'Beretta');
// Hello Beretta, Colt

// Over compose (Using the last posts data)
console.log('\nUsing reverse with compose:');

var add = function(x, y) {
  return x + y;
};

var timesItself = function(x) {
  return x * x;
};

var excite = function(text) {
  return text + '!';
};

console.log(compose(excite, timesItself, add)(3, 4));// 49!

var composeLtoR = reverseLater(compose);
console.log(composeLtoR(add, timesItself, excite)(3, 4));// 49!
