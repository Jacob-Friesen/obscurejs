#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('ES5 Require:');

const mod = require('./partialModuleImportsToRequire');
const property1a = mod.property1;
const property2a = mod.property2;

property1a();
// Message for property1
property2a();
// Message for property2

console.log('\nES6 Require:');

const { property1, property2 } = require('./partialModuleImportsToRequire');

property1();
// Message for property1
property2();
// Message for property2

console.log('\nDestructuring Assignment Explanation:');

const {
  property1c: property1c,
  property2c: property2c
} = {
  property1c: function() {
    console.log('Message for property1');
  },
  property2c: function() {
    console.log('Message for property2');
  },
  doNotIncludeThis: 'doNotIncludeThis'
}

property1c();
// Message for property1
property2c();
// Message for property2
