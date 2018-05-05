'use strict';
console.log('String normalize');

const userInput = 'Le café';
console.log(userInput);
// Le café

console.log(userInput.length);
// 8

console.log('\nPassword check example 1:');

function isValidPassword(password) {
  // A bunch of checks and then...
  if (password.length < 8) {
    return false;
  }
  return true;
}

console.log(isValidPassword('123Café'));
// true

console.log('\nPassword check example 2:');

function isValidPassword2(password) {
  // A bunch of checks and then...
  if (password.normalize().length < 8) {
    return false;
  }
  return true;
}

console.log(isValidPassword2('123Café'));
// false
console.log(isValidPassword2('1234Café'));
// true
console.log(isValidPassword2('😹😹😹😹'));
// true

console.log('\nPassword check example 3:');

function isValidPassword3(password) {
  // A bunch of checks and then...
  if (Array.from(password.normalize()).length < 8) {
    return false;
  }
  return true;
}

console.log(isValidPassword3('123Café'));
// false
console.log(isValidPassword3('1234Café'));
// true
console.log(isValidPassword3('😹😹😹😹'));
// false
console.log(isValidPassword3('😹😹😹😹😹😹😹😹'));
// true
