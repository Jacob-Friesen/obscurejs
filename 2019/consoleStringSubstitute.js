'use strict';

function logName(name) {
  console.log('Hello, %s!', name)
}
logName('Phil');
// Hello, Phil!
logName('Bob');
// Hello, Bob!

console.info('\nFormatting Examples:');

class Car {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  toString() {
    return `${this.name} (${this.hp})`;
  }
}
const miata = new Car('miata', 155);
console.log(miata);
// Car { name: 'miata', hp: 155 }
console.log(Car);
// [Function: Car]
console.log('%o', Car);
// { [Function: Car]
//   [length]: 2,
//   [prototype]:
//    Car {
//      [constructor]: [Circular],
//      [toString]: { [Function: toString] [length]: 0, [name]: 'toString' } },
//   [name]: 'Car' }
