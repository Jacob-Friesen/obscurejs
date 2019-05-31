'use strict';

console.info('Basic Example');

function invert(obj) {
  const newObj = {};

  for (const keyName in obj) {
    if (obj.hasOwnProperty(keyName)) {
      newObj[obj[keyName]] = keyName;
    }
  }

  return newObj;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(invert(obj));
// { '1': 'a', '2': 'b', '3': 'c' }

console.info('\nLooking up ids');

function hasIds(obj, ids) {
  const byId = invert(obj);
  return ids.map((id) => byId[id] !== undefined);
}

const cars = { 
  'miata': 1,
  'elise': 2,
  'elan': 3
};

console.log(hasIds(cars, [1, 2, 5]));
// [ true, true, false ]
