#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';
console.info('Circular references (issue):');

// Put this at the top instead and the print should work
// module.exports = {
//   property1: 'value1'
// };

const circularReferenceB = require('./circularReferenceB');
const property1 = 'value1';

circularReferenceB.printProperty1(function() {
  return module.exports.property1;
});
// undefined

console.info('\nCircular references (fixed):');
circularReferenceB.printProperty2(property1);
// value1

module.exports = { property1 };
