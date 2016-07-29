#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// pickBy and is

var pickBy = function(obj, callback) {
  var keep = {};
  for (var key in obj) {
    if (callback(obj[key]) === true) {
      keep[key] = obj[key];
    }
  }

  return keep;
};

var is = function(type, value) {
  return typeof type === typeof value;
};

// Example

var obj = {
  property1: 'value1',
  function1: function() {},
  function2: function() {}
};

console.log(pickBy(obj, is.bind(this, Function)));
// { function1: [Function], function2: [Function] }

console.log(pickBy(obj, is.bind(this, '')));// String only applies to values created with String().
// { property1: 'value1' }

// Alternative function checker
console.log(pickBy(obj, is.bind(this, function() {})));
// { function1: [Function], function2: [Function] }