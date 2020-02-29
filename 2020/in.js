'use strict';

let weight;
const car = {
  name: 'miata',
  hp: 0,
  weight,
};

console.log('Incorrect truthy check:');

console.log('Has "name":', car.name ? true : false);
// Has "name": true
console.log('Has "hp":', car.hp ? true : false);
// Has "hp": false
console.log('Has "weight":', car.weight ? true : false);
// Has "weight": false
console.log('Has "other":', car.other ? true : false);
// Has "other": false

console.log('\nIncorrect undefined check:');

console.log('Has "name":', car.name !== undefined);
// Has "name": true
console.log('Has "hp":', car.hp !== undefined);
// Has "hp": true
console.log('Has "weight":', car.weight !== undefined);
// Has "weight": false
console.log('Has "other":', car.other !== undefined);
// Has "other": false

console.log('\nCorrect in check:');

console.log('Has "name":', 'name' in car);
// Has "name": true
console.log('Has "hp":', 'hp' in car);
// Has "hp": true
console.log('Has "weight":', 'weight' in car);
// Has "weight": true
console.log('Has "other":', 'other' in car);
// Has "other": false

console.log('\nDeleting the hp property:');

delete car.hp;

console.log('Has "name":', 'name' in car);
// Has "name": true
console.log('Has "hp":', 'hp' in car);
// Has "hp": false
console.log('Has "weight":', 'weight' in car);
// Has "weight": true
console.log('Has "other":', 'other' in car);
// Has "other": false
