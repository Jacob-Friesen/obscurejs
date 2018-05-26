'use strict';
console.log('To Object Example:');

function toObjectLong(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
}

function toObject(key, value) {
  return { [key]: value };
}

console.log(toObjectLong('hp', 100));
// { hp: 100 }
console.log(toObject('hp', 100));
// { hp: 100 }

console.log('\nComplex example:');

function createCarsObj(cars, key1, key2) {
  const carObj = {};

  for (let car of cars) {
    carObj[car[0]] = {
      [key1]: car[1],
      [key2]: car[2]
    };
  }

  return carObj;
}

const carData = [
  ['miata', 155, 2400],
  ['elise', 217, 2000],
  ['alfaromeo', 237, 2465]
];

console.log(createCarsObj(carData, 'hp', 'weight'));
// { miata: { hp: 155, weight: 2400 },
//   elise: { hp: 217, weight: 2000 },
//   alfaromeo: { hp: 237, weight: 2465 } }




