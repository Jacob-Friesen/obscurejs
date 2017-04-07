#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

const str = 'test';
const arr = [1, 2, 3];

console.log('\nstring:');
for (let value of str) {
  console.log(value);
}
// 't\ne\ns\nt\n'


console.log('\narray:');
for (let value of arr) {
  console.log(value);
}
// '1\n2\n3\n'

const obj = {
  property2: 'value2',
  property1: 'value1'
}
obj[Symbol.iterator] = function() {
  const self = this;
  const keys = Object.keys(this).sort();
  let index = -1;

  return {
    next: function() {
      index += 1;
      if (index < keys.length) {
        return { done: false, value: self[keys[index]] };
      }
      return { done: true };
    }
  }
}

console.log('\nobject (with custom iterable):');
for (let value of obj) {
  console.log(value);
}
// value 1
// value 2

for (let keyName in obj) {
  console.log(obj[keyName]);
}
// (Order below depends on your environment)
// value 2
// value 1
