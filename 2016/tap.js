#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// A simple chain used to illustrate the concept
var chain = function(value) {
  var self = {};

  self.trim = function() {
    value = (value + '').trim();
    return self;
  };

  // Making this string based only for demonstration
  self.reverse = function() {
    value = value.reverse();
    return self;
  };

  self.tap = function(callback) {
    callback(value);
    return self;
  };

  self.thru = function(callback) {
    value = callback(value);
    return self;
  };

  self.value = function() {
    return value;
  };

  return self;
};

// Thru Example
console.info('Thru example:');
var result = chain('  abc  ')
              .trim()
              .thru(function(value) {
                return [value];
              })
              .value();
console.log(result);
// ['abc']

// Tap Example (modification)
console.info('\nTap example (modification):');
var result = chain([1, 2, 3])
               .tap(function(array) {
                 array.pop();
               })
               .reverse()
               .value();
console.log(result);
// [ 2, 1 ]


// Tap Example (debugging)
console.info('\nTap example (debugging):');
var result = chain([1, 2, 3])
               .reverse()
               .tap(function(array) {
                 console.log('Reversed array is:', array);
               })
               .value();
// Reversed array is: [ 3, 2, 1 ]

// Tap and the technology explanation... (more for debugging)
// https://lodash.com/docs/4.16.1#tap

// And explain thru (return intermediate value): 
// https://lodash.com/docs/4.16.4#thru


