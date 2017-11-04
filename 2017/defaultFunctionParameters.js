#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Without default function parameters:');

function formatName(firstName, lastName) {
  firstName = firstName !== undefined ?  firstName : '(none)';
  lastName = lastName !== undefined ?  lastName : '(none)';
  return '(First:Last) ' + firstName + ':' + lastName;
}

console.log(formatName('Jacob'));
// (First:Last) Jacob:(none)
console.log(formatName('Super', 'Jacob'));
// (First:Last) Super:Jacob
console.log(formatName());
// (First:Last) (none):(none)

console.log('\nDefault function parameters:');

function formatName2(firstName = '(none)', lastName = '(none)') {
  return '(First:Last) ' + firstName + ':' + lastName;
}

console.log(formatName2('Jacob'));
// (First:Last) Jacob:(none)
console.log(formatName2('Super', 'Jacob'));
// (First:Last) Super:Jacob
console.log(formatName2());
// (First:Last) (none):(none)

console.log('\nEarlier parameters can be referenced later:');

// When the second part needs to be the first when not specified
// The point is not to show implementation here, so this is a very simple check.
function isEqual(value1, value2 = value1) {
  return value1 === value2;
}

console.log(isEqual(2));
// true
console.log(isEqual(2, 2));
// true
console.log(isEqual(2, 3));
// false
