'use strict';

console.info('Implications of creating a class without new:');

function Car() {
  return this;
}
Car.prototype.setName = function(name) {
  this.name = name;
};

Car.prototype.getName = function() {
  return this.name;
};

const miata = new Car();
miata.setName('miata');
console.log(miata.getName());
// miata

const ferrari = Car();
// ferrari.setName('ferrari');
// TypeError: Cannot read property 'setName' of undefined

console.info('\nUsing class syntax to avoid that:');

class Car2 {
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const miata2 = new Car2();
miata2.setName('miata');
console.log(miata2.getName());
// miata

// const ferrari2 = Car2();
// TypeError: Class constructor Car2 cannot be invoked without 'new'

console.info('\nUsing new.target to avoid that:');

function Car3() {
  if (!new.target) {
    throw(new TypeError("Class constructor Car3 cannot be invoked without 'new'"));
  }
}
Car3.prototype.setName = function(name) {
  this.name = name;
};

Car3.prototype.getName = function() {
  return this.name;
};

const miata3 = new Car3();
miata3.setName('miata');
console.log(miata3.getName());
// miata

// const ferrari3 = Car3();
// TypeError: Class constructor Car3 cannot be invoked without 'new'
