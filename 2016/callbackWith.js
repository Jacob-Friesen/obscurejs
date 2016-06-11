#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var api = {
  getName: function(callback) {
    setTimeout(function() {
      callback('JavaScript', 'Fred');
    }, 500);
  }
};

var getMessage = function(callback) {
  api.getName(function(first, last) {
    var part1 = (typeof first === 'string') ? first : '';
    var part2 = (typeof last === 'string') ? ' ' + last : '';
    var prefix = (part1 === '' && part2 === '') ? 'Hello' : 'Hello, ';
    var message = (prefix + part1 + part2 + '!');

    callback(message.replace(/  /g, ' '));
  });
};

// Without using callbackWith
console.log('A Test without using callbackWith and argAtSync:');

var originalGetName = api.getName;
api.getName = function(callback) {
  callback('Test', 'User');
};

getMessage(function(message) {
  console.log('MESSAGE', message)
  console.assert(message === 'Hello, Test User!');
  // Test passes as this does not throw an exception
});
console.log('(Succeeded, no errors)');

api.getName = originalGetName;

// callbackWith and argAtSync

// Assume the callback is always the last argument
var callbackWith = function(name) {
  var replaceArgs = arguments;
  return function() {
    var args = Array.prototype.slice.call(arguments),
        callback = args.slice(-1)[0];

    return callback.apply(this, replaceArgs);
  };
};

var argAtSync = function(index, callback) {
  var result;
  callback(function() {
    result = arguments[index];
  });

  return result;
};

// With callbackWith
console.log('\nA Test with callbackWith and argAtSync:');

var originalGetName = api.getName;

api.getName = callbackWith('Test', 'User');
console.assert(argAtSync(0, getMessage) === 'Hello, Test User!');

api.getName = callbackWith('Test');
console.assert(argAtSync(0, getMessage) === 'Hello, Test!');

api.getName = callbackWith(null, 'User');
console.assert(argAtSync(0, getMessage) === 'Hello, User!');

api.getName = callbackWith();
console.assert(argAtSync(0, getMessage) === 'Hello!');

console.log('(Succeeded, no errors)');

api.getName = originalGetName;


// Uncomment to confirm that the tests do not mutate the original code.
// getMessage(function(message) {
//   console.log(message);
//   // Hello, JavaScript Fred!
// });
