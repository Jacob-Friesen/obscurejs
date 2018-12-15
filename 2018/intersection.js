'use strict';

console.log('Simple intersection:');

function intersection(arr1, arr2) {
  const matched = [];

  arr1.forEach((element1) => {
    arr2.forEach((element2) => {
      if (element1 === element2) {
        matched.push(element1);
      }
    });
  });

  return matched;
};

console.log(intersection([1,2,3], [2,3,4]));
// [2, 3]

console.log('\nIntersection By:');

const carsWithHp = [
  { name: 'miata', hp: 155 },
  { name: 'elise', hp: 217 },
  { name: 'Romeo 4C', hp: 237 },
];

const carsWithWeight = [
  { name: 'miata', weight: 2332 },
  { name: 'Romeo 4C', weight: 2456 },
];

function intersectionBy(arr1, arr2, property) {
  const matched = [];

  arr1.forEach((element1) => {
    arr2.forEach((element2) => {
      if (element1[property] === element2[property]) {
        matched.push(element1);
      }
    });
  });

  return matched;
};

const uniqueCars = intersectionBy(carsWithHp, carsWithWeight, 'name');
console.log(uniqueCars);
// [ { name: 'miata', hp: 155 }, { name: 'Romeo 4C', hp: 237 } ]
