#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

function checkPassword(text) {
  if (!/\d/.test(text)) {
    return 'no numbers';
  }
  if (!/[A-Z]/.test(text)) {
    return 'no upper case';
  }
  if (!/[a-z]/.test(text)) {
    return 'no lower case';
  }
  if (!/.{8,}/.test(text)) {
    return 'too short';
  }
  return 'success';
}

console.log(checkPassword('test'));
// no numbers
console.log(checkPassword('test1'));
// no upper case
console.log(checkPassword('TEST1'));
// no lower case
console.log(checkPassword('Test1'));
// too short
console.log(checkPassword('Test1Test1'));
// success

console.log('\nCombined approach:');

function checkPassword2(text) {
  if (!/[\da-zA-Z]{8,}/.test(text)) {
    return 'failed';
  }
  return 'success';
} 

console.log(checkPassword2('test'));
// failed
console.log(checkPassword2('test1'));
// failed
console.log(checkPassword2('TEST1'));
// failed
console.log(checkPassword2('Test1'));
// failed
console.log(checkPassword2('Test1Test1'));
// success
