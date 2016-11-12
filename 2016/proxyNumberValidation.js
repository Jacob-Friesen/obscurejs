#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';
// Make sure to run with a Node.js 6 or above.

var numberValidator = function(/*fieldNames*/) {
  var fieldNames = Array.prototype.slice.call(arguments);

  return {
    set: function(obj, prop, value) {
      // includes in supported where Proxy is supported
      if (fieldNames.includes(prop)) {
        if (!value.toFixed) {
          throw new TypeError('The "' + prop + '" is not a number');
        }
      }
      obj[prop] = value;

      // Indicate that the set succeeded.
      return true;
    }
  };
}

var car = new Proxy({}, numberValidator('hp', 'weight'));

car.name = 'miata';
car.hp = 155;
car.weight = 2332;
console.log(car);
// { name: 'miata', hp: 155, weight: 2332 }

// Blocking errors for demonstration purposes
try {
  car.hp = '155';
} catch (e) { 
  console.info(e);
}

console.log(car);
// { name: 'miata', hp: 155, weight: 2332 }

console.log('\nUsing the validator on a different object:');

var person = new Proxy({}, numberValidator('age'));

person.age = 100;
console.log(person.age);
// 100
try {
  person.age = 'one hundred';
} catch (e) { 
  console.info(e);
}
console.log(person.age);
// 100
