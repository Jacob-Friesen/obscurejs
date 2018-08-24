'use strict';

const _ = require('lodash');

const cars = [
  { id: 'miata', hp: 155, weight: 2400 },
  { id: '4c', hp: 237, weight: 2465 },
  { id: 'elice', hp: 217, weight: 2000 }
];

const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

console.log('Order By (Using Lodash):');

const result1 = _.orderBy(cars, 'hp', 'desc');
console.log(result1);
// [ { id: '4c', hp: 237, weight: 2465 },
//   { id: 'elice', hp: 217, weight: 2000 },
//   { id: 'miata', hp: 155, weight: 2400 } ]

const result2 = _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
console.log(result2);
// [ { user: 'barney', age: 36 },
//   { user: 'barney', age: 34 },
//   { user: 'fred', age: 48 },
//   { user: 'fred', age: 40 } ]

console.log('\nOrder By (No Libraries):');

function orderBy(list, properties, orders) {
  properties = Array.isArray(properties) ? properties : [properties];
  orders = Array.isArray(orders) ? orders : [orders];

  // To keep the example simple, this only sorts strings and numbers
  list.sort((a, b) => {
    let result;
    for (let index = 0; index < properties.length; index += 1) {
      let one = a,
        two = b;
      if (orders[index] === 'desc') {
        [one, two] = [two, one];
      }

      const value1 =  one[properties[index]];
      if (typeof value1 === 'string') {
        result = String(value1).localeCompare(two[properties[index]]);
      } else if (typeof value1 === 'number') {
        result = value1 - two[properties[index]];
      }

      // Only proceed to deeper comparisons if the current results are equal
      if (result !== 0) {
        return result;
      }
    }

    return result;
  });

  return list;
}

const result3 = orderBy(cars, 'hp', 'desc');
console.log(result3);
// [ { id: '4c', hp: 237, weight: 2465 },
//   { id: 'elice', hp: 217, weight: 2000 },
//   { id: 'miata', hp: 155, weight: 2400 } ]

const result4 = orderBy(users, ['user', 'age'], ['asc', 'desc']);
console.log(result4);
// [ { user: 'barney', age: 36 },
//   { user: 'barney', age: 34 },
//   { user: 'fred', age: 48 },
//   { user: 'fred', age: 40 } ]
