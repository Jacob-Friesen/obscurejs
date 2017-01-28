#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var runCallback = function(callback) {
  callback();
};

console.log('Uncomment the below function calls to show the various error styles:');

// runCallback(function() {
//   throw('An Error');
// });
// Output:
//   throw('An Error');
//   ^
// test

// runCallback(function() {
//   throw({type: 'callbackError', message: 'An Error'});
// });
// Output:
//  throw({type: 'callbackError', message: 'An Error'});
//  ^
// [object Object]

// runCallback(function() {
//   throw(new Error('An Error'));
// });
// Error: An Error
//     at <YOUR_FULL_PATH>/obscurejs/2017/throw.js:20:9
//     at runCallback (<YOUR_FULL_PATH>/obscurejs/2017/throw.js:6:3)
//     and so on...

function CustomError(message) {
    this.name = 'CustomError';
    this.message = message;
    this.stack = (new Error()).stack;
};
CustomError.prototype = new Error;

// runCallback(function() {
//   throw(new CustomError('An Error'));
// });
// Error: 
//     at <YOUR_FULL_PATH>/obscurejs/2017/throw.js:20:9
//     at runCallback (<YOUR_FULL_PATH>/obscurejs/2017/throw.js:6:3)
//     and so on...
