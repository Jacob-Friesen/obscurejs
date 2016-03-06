#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// The original call
console.log('Before the prepended api call:');

// Simulate an API call.
var apiCall = function(callback) {
  setTimeout(function() {
    callback(['some', 'results']);
  }, 500);
};

var success = function(results) {
  console.log('received results:', results);
};

var wrappedApiCall = function() {
  apiCall(success);
};
wrappedApiCall();
// received results: [ 'some', 'results' ]

// The call prepended with a function
var preSuccessMessage = function() {
  console.log('Calling before success');
};

setTimeout(function() {
  console.log('\nAdded a prepended function:');

  wrappedApiCall = function() {
    apiCall(function() {
      preSuccessMessage();
      success.apply(this, arguments);
      // Calling before success
      // received results: [ 'some', 'results' ]
    });
  };
  wrappedApiCall();
}, 600);


// The call prepended with a function using a callLater function.

var callLater = function() {
  var callbacks = Array.prototype.slice.call(arguments);

  return function() {
    var args = arguments,
        self = this;

    callbacks.forEach(function(callback) {
      callback.apply(self, args);
    });
  };
};

setTimeout(function() {
  console.log('\nAdded a prepended function with callLater:');

  wrappedApiCall = function() {
    apiCall(callLater(preSuccessMessage, success));
    // Calling before success
    // received results: [ 'some', 'results' ]
  };
  wrappedApiCall();
}, 1200);
