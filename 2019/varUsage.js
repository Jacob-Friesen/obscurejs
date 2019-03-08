// 'use strict';

console.log('Let VS Var Examples:');

function exampleTests() {
  var a = true;
  let b = 'value1';

  if (a) {
    let c = 1;
    var d = 2;
  }

  if (typeof c !== 'undefined') {
    console.log('let c: ', c);
  }

  if (typeof d !== 'undefined') {
    console.log('var d: ', d);
    var a = false;
    // Does not affect the parent block let
    let b = 'value2';
  }
  // Will throw a declaration error
  // let b = 'value3';

  console.log('var a: ', a);
  console.log('let b: ', b);
}
exampleTests();
// var d:  2
// var a:  false
// let b:  value1

// Assume all non-Node.js environments (that do not have require) are browser ones
// The below assumes when used in a browser, your webpage has Lodash installed globally.
let _;
if (typeof require !== 'undefined') {
  _ = require('lodash');
}

console.log('\nLodash version:', _.VERSION);
// Lodash version: 4.17.10 (On a browser this may vary)
