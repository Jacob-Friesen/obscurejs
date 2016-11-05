#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Naive Strategy:');

var convertHexToRgb = function(hex) {
  var red   = parseInt(hex.slice(0, 2), 16),
      green = parseInt(hex.slice(2, 4), 16),
      blue  = parseInt(hex.slice(4, 6), 16);
  return [red, green, blue];
};

console.log(convertHexToRgb('4286f4'));
// [ 66, 134, 244 ]
console.log(convertHexToRgb('ffaadd'));
// [ 255, 170, 221 ]
console.log(convertHexToRgb('ffffff'));
// [ 255, 255, 255 ]
console.log(convertHexToRgb('000000'));
// [ 0, 0, 0 ]
console.log(convertHexToRgb('0000ff'));
// [ 0, 0, 255 ]

console.log('\nBitwise Strategy:');

var convertHexToRgb = function(hex) {
  var rgb = parseInt(hex, 16);

  var red   = (rgb >> 16) & 0xFF,
      green = (rgb >> 8) & 0xFF,
      blue  = rgb & 0xFF;
  return [red, green, blue];
};

console.log(convertHexToRgb('4286f4'));
// [ 66, 134, 244 ]
console.log(convertHexToRgb('ffaadd'));
// [ 255, 170, 221 ]
console.log(convertHexToRgb('ffffff'));
// [ 255, 255, 255 ]
console.log(convertHexToRgb('000000'));
// [ 0, 0, 0 ]
console.log(convertHexToRgb('0000ff'));
// [ 0, 0, 255 ]
