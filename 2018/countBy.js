'use strict';

const _ = require('lodash');

const cars = [
  { id: 'miata', hp: 155, weight: 2400 },
  { id: '4c', hp: 237, weight: 2465 },
  { id: 'elice', hp: 217, weight: 2000 }
];

console.log('Count By (Using Lodash):');

console.log(_.countBy(['one', 'two', 'three'], 'length'));
// { '3': 2, '5': 1 }

// Classes of 100s
const hpClasses = _.countBy(cars, (car) => {
  return Math.floor(car.hp / 100) * 100;
});
console.log(hpClasses);
// { '100': 1, '200': 2 }

console.log('\nCount By (No Libraries):');

function countBy(arr, applicator) {
  const classes = {};

  arr.forEach((element) => {
    // class is a reserved word that should not be overidden.
    let class_ = null;
    if (typeof applicator !== 'function') {
      class_ = element[applicator];
    } else {
      class_ = applicator(element);
    }

    classes[class_] = (classes[class_] || 0) + 1
  });

  return classes;
}

console.log(countBy(['one', 'two', 'three'], 'length'));
// { '3': 2, '5': 1 }
const hpClasses2 = countBy(cars, (car) => {
  return Math.floor(car.hp / 100) * 100;
});
console.log(hpClasses2);