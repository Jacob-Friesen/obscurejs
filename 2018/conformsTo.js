'use strict';

const _ = require('lodash');

console.log('\nConforms To View Lodash');

const cars = [
  { id: 'miata', hp: 155, weight: 2400 },
  { id: '4c', hp: 237, weight: 2465 },
  { id: 'elice', hp: 217, weight: 2000 }
];

const requirements = { 
  hp: (hp) => hp > 200,
  weight: (weight) => weight < 2400 ? 'yes' : '',
};

console.log(_.conformsTo(cars[0], requirements));
// false
console.log(_.conformsTo(cars[1], requirements));
// false
console.log(_.conformsTo(cars[2], requirements));
// true

console.log('\nConforms To Custom Function');

function conformsTo(obj = {}, requirements = {}) {
  for (let key in obj) {
    // Do not check inherited properties
    if (obj.hasOwnProperty(key)) {
      for (let requirementKey in requirements) {
        if (requirements.hasOwnProperty(requirementKey)) {
          const check = requirements[requirementKey];
          if (key === requirementKey && !check(obj[key])) {
            return false;
          }
        }
      }
    }
  }

  return true;
}

console.log(conformsTo(cars[0], requirements));
// false
console.log(conformsTo(cars[1], requirements));
// false
console.log(conformsTo(cars[2], requirements));
// true
