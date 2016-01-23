#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var stub = function(base, property, replace) {
  var original = base[property];

  replace.restore = function() {
    base[property] = original;
  }

  base[property] = replace;
};

// Code to test

var apiCalls = {
  getCars: function(callback) {
    // simulate server call.
    setTimeout(function() {
      callback(['car1', 'car2']);
    }, 1000);
  }
};

var extractFirst = function(callback) {
  apiCalls.getCars(function(cars) {
    callback(cars[0]);
  });
};

// For the simple test suite

var assert = function(areEqual) {
  if (areEqual) {
    console.log('Passed.');
  } else {
    console.log('Failed.');
  }
};

// Simulate a test suite (Uses a syntax similar to sinon.js)

var runTests = function() {
  stub(apiCalls, 'getCars', function(callback) {
    callback(['testcar1', 'testcar2']);
  });

  extractFirst(function(result) {
    assert(result === 'testcar1');
  });

  apiCalls.getCars.restore();
};
runTests();

// The function should be restored properly
console.log('\nThe function should be restored and do API Calls as normal:')

extractFirst(function(result) {
  console.log(result);
});