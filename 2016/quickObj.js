#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Without quickObj
console.log('Without quickObj:');

// e.g. from an API
var extractHp = function(carData) {
  return carData.stats.power.hp;
};

var test1 = function() {
  var result = extractHp({
    stats: {
      power: {
        hp: 152
      }
    }
  });

  console.assert(result === 152, '✗ Failed');
  console.log('✓ Passed');
};
test1();


// quickObj

var quickObj = function(description, value) {
  return (function createObj(keys, value, obj) {
    if (keys.length > 0) {
      obj[keys[0]] = createObj(keys.slice(1), value, obj);
      return obj;
    }
    return value;
  })(description.split('.'), value, {});
};

// Without quickObj
console.log('\nWith quickObj:');

var test1 = function() {
  var result = extractHp(quickObj('stats.power.hp', 152));
  console.assert(result === 152, '✗ Failed');
  console.log('✓ Passed');
};
test1();
