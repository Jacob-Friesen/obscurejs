#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var _ = require('lodash');

console.log('Simple mixin example:');

_.mixin({
  objOf: function(key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
  }
});

function seedObjectPropertyArray(property, length) {
  return Array.apply(null, Array(length)).map(function(ele, index) {
    return _.objOf(property, index);
  });
}

console.log(seedObjectPropertyArray('property1', 4));
// [ { property1: 0 },
//   { property1: 1 },
//   { property1: 2 },
//   { property1: 3 } ]

console.log('\nChained mixin example:');

_.mixin({
  // Only handles arrays, since this is for demonstration purposes
  removeLast: function(arr) {
    return arr.slice(0, -1);
  }
});

var result = _([1,2,3]).reverse()
                       .removeLast()
                       .value();
console.log(result);
// [3, 2]

console.log('\nExtending Lodash using a new context:');

var lodash = _.runInContext();
lodash.mixin({
  sayHello: function() {
    return 'hello'
  }
});

console.log(lodash.sayHello + '');
// function () {
//   return 'hello'
// }
console.log(_.sayHello + '');
// undefined

// Also see useExtendedLodash.js
