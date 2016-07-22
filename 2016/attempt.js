#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Basic Error Handling
console.log('Basic Error handling:');

var getHp = function(json) {
  var data = 'Not Found';
  try {
    data = JSON.parse(json);
  } catch (e) {}

  if (data.hp) {
    return data.hp;
  }
  return 'Not Found';
};

console.log(getHp('{ "car": "miata", "hp": 150 }'));// 150
console.log(getHp('{}'));// Not Found
console.log(getHp(''));// Not Found
console.log(getHp({}));// Not Found

// Attempt

var attempt = function(callback) {
  try {
    return callback();
  } catch (e) {
    return e;
  }
};

// With attempt
console.log('\nWith attempt:');

var getHp = function(json) {
  var data = attempt(JSON.parse.bind(this, json));

  if (data.hp) {
    return data.hp;
  }
  return "Not Found";
};

console.log(getHp('{ "car": "miata", "hp": 150 }'));// 150
console.log(getHp('{}'));// Not Found
console.log(getHp(''));// Not Found
console.log(getHp({}));// Not Found