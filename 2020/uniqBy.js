'use strict';

console.log('Uniq By:');

const cars = [
  { name: 'miata', hp: 155, weight: 2400 },
  { name: '4c', hp: 237, weight: 2465 },
  { name: '4c', hp: 237, weight: 2465 },
  { name: 'miata', hp: 155, weight: 2400 },
  { name: 'elise', hp: 217, weight: 2000 },
  { name: '4c', hp: 237, weight: 2465 },
];

function uniqBy(arr, callback) {
  const mapObj = {};
  const uniques = [];

  for (const ele of arr) {
    const result = callback(ele);
    if (mapObj[result] !== true) {
      mapObj[result] = true;
      uniques.push(ele);
    }
  }

  return uniques;
}

const uniqueCars = uniqBy(cars, (car) => car.name);
console.log(uniqueCars);
// [ { name: 'miata', hp: 155, weight: 2400 },
//   { name: '4c', hp: 237, weight: 2465 },
//   { name: 'elise', hp: 217, weight: 2000 } ]
