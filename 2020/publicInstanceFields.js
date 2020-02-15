'use strict';
// Only works with Node.js 12+ or Chrome/Firefox currently

console.log('With fields in class constructor:');

class Car {
  constructor() {
    this.name = 'Not Set';
    this.hp = 0;
  }

  format() {
    return `${this.name} - ${this.hp}`;
  }
}

const defaultCar = new Car();
console.log(defaultCar.format());
// Not Set - 0


const miata = new Car();
miata.name = 'miata';
miata.hp = 155;

console.log(miata.format());
// miata - 155

console.log('\nWith public instance fields:');

class CarB {
  name = 'Not Set';
  hp = 0;

  format() {
    return `${this.name} - ${this.hp}`;
  }
}

const defaultCarB = new CarB();
console.log(defaultCarB.format());
// Not Set - 0


const miataB = new CarB();
miataB.name = 'miata';
miataB.hp = 155;

console.log(miataB.format());
// miata - 155
