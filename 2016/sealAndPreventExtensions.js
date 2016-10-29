#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var attempt = function(callback) {
  try { 
    callback();
  } catch (e) {}
};

console.log('Object.preventExtensions:');

var obj = Object.preventExtensions({
  property1: 'value1',
  property2: 'value2',
  property3: 'value3'
});
obj.property1 = 'value1 EDITED';
attempt(function() { obj.property3 = 'value3' });// can't extend
delete obj.property3;
Object.defineProperty(obj, 'property2', { 
  get: function() { return 'test' } 
});

console.log(obj);
// { property1: 'value1 EDITED', property2: [Getter] }

console.log('\nObject.seal:');

var obj2 = Object.seal({
  property1: 'value1',
  property2: 'value2',
  property3: 'value3'
});
obj2.property1 = 'value1 EDITED';
attempt(function() { obj2.property3 = 'value3' });// can't extend
attempt(function() { delete obj2.property3 });// can't delete
attempt(function() {
  Object.defineProperty(obj2, 'property2', { 
    get: function() { return 'test' } 
  });
});// can't changing property definitions


console.log(obj2);
// { property1: 'value1 EDITED',
//   property2: 'value2',
//   property3: 'value3' }

console.log('\nObject.freeze:');

var obj3 = Object.freeze({
  property1: 'value1',
  property2: 'value2',
  property3: 'value3'
});
attempt(function() { obj3.property1 = 'value1 EDITED' });
attempt(function() { obj3.property3 = 'value3' });// can't extend
attempt(function() { delete obj3.property3 });// can't delete
attempt(function() {
  Object.defineProperty(obj3, 'property2', { 
    get: function() { return 'test' } 
  });
});// can't changing property definitions


console.log(obj3);
// { property1: 'value1', property2: 'value2', property3: 'value3' }


