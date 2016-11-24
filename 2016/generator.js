#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Basic iterator example:');

function* idMaker() {
  var index = 0,
      prefix = '';

  while(index < 3) {
    index += 1;
    prefix = yield(prefix + index);
  }
}

var gen = idMaker();

console.log(gen.next('test').value); // 1
console.log(gen.next('pre').value); // pre2
console.log(gen.next('other').value); // other3
console.log(gen.next()); // { value: undefined, done: true }

console.log('\nAsync example:');

// Instead of doing the request immediately, return a function to execute it later
var request = function(url) {
  return function(callback) {
    return setTimeout(function() {
      callback(url + '/test');
    }, 500);
  }
}

// Keep on feeding the generator with async results until there are none left
var runGenerator = function(Generator) {
  var generator = Generator();

  var iterate = function(value) {
    var result = generator.next(value);
    if (!result.done) {
      result.value(iterate);
    }
  };
  iterate();
}

runGenerator(function* doAsyncWork () {
  var result1 = yield request('http://test1');
  console.log('result1:', result1);
  
  var result2 = yield request('http://test2');
  console.log('result2:', result2);

  console.log('final result:', result1, result2);
});
