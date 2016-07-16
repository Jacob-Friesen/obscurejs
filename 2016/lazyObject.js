#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Basic Store
console.log('Basic object store:');

var Store = function() {
  var storage = {};
  var self = {};

  self.add = function(key, value) {
    storage[key] = value;
  };

  self.get = function(key) {
    return storage[key];
  }

  return self;
}; 

var store = Store();
store.add('car', 'miata');
store.add('hp', '155');

console.log(store.get('car'));// miata
console.log(store.get('hp'));// 155

// Basic Store
console.log('\nLazy object store:');

var store = function(key, value) {
  var storage = {};

  store = function(key, value) {
    if (value !== undefined) {
      storage[key] = value;
    }
    return storage[key];
  };

  return store(key, value);
};

store('car', 'miata');
store('hp', '155');

console.log(store('car'));// miata
console.log(store('hp'));// 155


// Basic Store
console.log('\nExtended Lazy object store:');

var store = function create(key, value) {
  var storage = {};

  var main = function(key, value) {
    if (value !== undefined) {
      storage[key] = value;
    }
    return storage[key];
  };

  main.remove = function(key) {
    delete storage[key];
  };

  // Wrapping this with a function prevents accidental sets with store.create().
  main.newStore = function() {
    return create();
  };

  if (key === undefined) {
    return main;
  }
  store = main;
  return store(key, value);
};

store('car', 'miata');
store('hp', '155');
store.remove('car');

var store2 = store.newStore();
store2('car', 'jaguar');

console.log(store('car'));// undefined
console.log(store('hp'));// 155
console.log(store2('car'));// jaguar
console.log(store2('hp'));// undefined

