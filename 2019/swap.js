'use strict';

console.log('Basic Destructuring Assignment:');

const [a, b, c] = [1, 2, 3];
console.log(a, b, c);
// 1 2 3

console.log('\nBasic Value Swap:');

let d = 1,
  e = 2;

[d, e] = [e, d];
console.log(d, e);
// 2 1

console.log('\nExample Value Swap:');

const cars = [
  { id: 'miata', value1: 155, value2: 2400 },
  { id: '4c', value1: 237, value2: 2465 },
  { id: 'elice', value1: 217, value2: 2000 }
];

function swapProperties(arr, property1, property2) {
  for (const ele of arr) {
    [ele[property1], ele[property2]] = [ele[property2], ele[property1]]
  }

  return arr;
}
console.log(swapProperties(cars, 'value1', 'value2'));
// [ { id: 'miata', value1: 2400, value2: 155 },
//   { id: '4c', value1: 2465, value2: 237 },
//   { id: 'elice', value1: 2000, value2: 217 } ]
