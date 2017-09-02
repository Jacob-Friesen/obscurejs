#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.info('Simplifying Apply Syntax:');

function greet(firstName, middleI, lastName) {
  console.log('Hello, ' + firstName + ' ' + middleI + ' ' + lastName);
}

// The names came in array format from an external source
const names = ['Henry', 'S', 'Fop-doodle'];

greet.apply(null, names);
// Hello, Henry S Fop-doodle
greet(...names);
// Hello, Henry S Fop-doodle

console.info('\nUsing slice:');

greet(...names.slice(0, 2), 'Johnson');
// Hello, Henry S Johnson

console.info('\nUsing array operations:');

const extendedName = ['Dr.', ...names, 'Senior'];

// Each argument passed to console.log is separated with a space
// Making it easy to do array print outs
console.log(...extendedName);

console.info('\nnew Date() spread:');

const dateAsArray = [1990, 0, 19];

console.log(new Date(dateAsArray));
// Invalid Date
// This will cause an error
// console.log(new Date.apply(null, dateAsArray));
console.log(new Date(...dateAsArray));
// 1990-01-19T05:00:00.000Z (Exact display will vary by JS platform)