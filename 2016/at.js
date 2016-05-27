#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Without at
console.log('Without at:');

var carData = {
  stats: {
    power: {
      hp: 152
    }
  }
};

var value = null;
if (carData &&
    carData.stats &&
    carData.stats.power &&
    carData.stats.power.hp) {
  value = carData.stats.power.hp;
}
console.log(value);// 152

value = null;
if (carData &&
    carData.stats &&
    carData.stats.other &&
    carData.stats.other.test) {
  value = carData.stats.other.test;
}
console.log(value);// null

// With at
console.log('\nWith at:');

var at = function(obj, description) {
  return (function getValue(keys, obj) {
    var value = obj[keys[0]];
    if (keys.length > 0 && value === Object(value)) {
      return getValue(keys.slice(1), value);
    }
    return value;
  })(description.split('.'), obj);
};

console.log(at(carData ,'stats.power.hp'));// 152
console.log(at(carData ,'stats.power.hp'));// null