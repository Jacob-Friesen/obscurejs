'use strict';

console.info('Change object keys:');

const cars = [
  { id: 'miata', hp: 155, weight: 2400 },
  { id: '4c', hp: 237, weight: 2465 },
  { id: 'elice', hp: 217, weight: 2000 }
];

function mapKeysArray(arr, keySets) {
  return arr.map((element) => {
    for (const key in keySets) {
      element[keySets[key]] = element[key];
      delete element[key];
    }
    return element;
  });
}

console.log(mapKeysArray(cars, { id: 'name', weight: 'pounds' }));
// [ { hp: 155, name: 'miata', pounds: 2400 },
//   { hp: 237, name: '4c', pounds: 2465 },
//   { hp: 217, name: 'elice', pounds: 2000 } ]
