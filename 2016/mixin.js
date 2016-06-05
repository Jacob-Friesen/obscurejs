#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

function Car(name) {
  this.name = name;  
  this.currentSpeed = 0;
};

Car.prototype.accelerate = function (amount) {
  this.currentSpeed += amount;
};

Car.prototype.brake = function (amount) {
  this.currentSpeed -= amount;
};

var miata = new Car('miata');
miata.accelerate(15);
miata.brake(5);

console.log(miata);
// Car { name: 'miata', currentSpeed: 10 }

// With mixins
console.log('\nWith Mixins:');

var printer = function(obj) {
  obj.printAllProperties = function() {
    for (var key in this) {
      console.log(key + ': ' + this[key]);
    }
  }

  obj.printName = function() {
    console.log(this.name);
  }

  return obj;
};

var reset = function(obj) {
  obj.resetSpeed = function() {
    this.speed = 0;
  };

  return obj;
};

Car.prototype = printer(Car.prototype);
Car.prototype = reset(Car.prototype);

var miata = new Car('miata');
miata.accelerate(15);
miata.brake(5);
miata.resetSpeed();

miata.printName();
// miata
miata.printAllProperties();
// currentSpeed: 10
// speed: 0
// accelerate: function (amount) {
//   this.currentSpeed += amount;
// }
// brake: function (amount) {
//   this.currentSpeed -= amount;
// }
// printAllProperties: function () {
//   for (var key in this) {
//     console.log(key + ': ' + this[key]);
//   }
// }
// printName: function () {
//   console.log(this.name);
// }
// resetSpeed: function () {
//   this.speed = 0;
// }

// With the helper function
console.log('\nWith the helper function:');

var mixin = function(obj /* mixins... */) {
  var mixins = Array.prototype.slice.call(1, arguments);
  mixins.forEach(function(mixin) {
    obj.prototype = mixin(obj.prototype);
  });

  return obj;
};

Car = mixin(Car, printer, reset);
var miata = new Car('miata');
miata.accelerate(15);
miata.brake(5);
miata.resetSpeed();

miata.printName();
// miata
miata.printAllProperties();
// currentSpeed: 10
// speed: 0
// accelerate: function (amount) {
//   this.currentSpeed += amount;
// }
// brake: function (amount) {
//   this.currentSpeed -= amount;
// }
// printAllProperties: function () {
//   for (var key in this) {
//     console.log(key + ': ' + this[key]);
//   }
// }
// printName: function () {
//   console.log(this.name);
// }
// resetSpeed: function () {
//   this.speed = 0;
// }