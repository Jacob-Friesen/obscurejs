#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The polyfills (Extended from from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

if (!String.prototype.trimLeft) {
  String.prototype.trimLeft = function () {
    return this.replace(/^[\s\uFEFF\xA0]+/g, '');
  };
}

if (!String.prototype.trimRight) {
  String.prototype.trimRight = function () {
    return this.replace(/[\s\uFEFF\xA0]+$/g, '');
  };
}

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    var leftTrim = this.trimLeft()
    return leftTrim.trimRight();
  };
}

// Current trim implementation with the somewhat support trimLeft and trimRight

var str = '\t  test  \n';
console.log('[' + str.trim() + ']'); // '[test]'

console.log('[' + str.trimLeft() + ']');
// [test  
// ]

console.log('[' + str.trimRight() + ']');// [   test]
