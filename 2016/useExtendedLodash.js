#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var _ = require('lodash');
// This is best understood after extendLodash.js is read through. Keep in mind running this will run through all of
// extendLodash.js too. In a non example case, usually an initializer would be used instead of an auto run.
require('./extendLodash');

console.log('\nUse an extended lodash from another module:');
console.log(_.objOf('property1', 'value1'));
// { property1: 'value1' }
