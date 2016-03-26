#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Mutating list reverse [2, 1, 3, 4]:');
var list = [2,1,3,4];
var doSomething = function(newList) {
  return newList.reverse();
};

console.log(doSomething(list));// [4, 3, 1, 2]
console.log(list);// [4, 3, 1, 2]

console.log('\nNon-Mutating list reverse [2, 1, 3, 4]:');
list = [2,1,3,4];
doSomething = function(newList) {
  return newList.slice().reverse();
}
console.log(doSomething(list)); // [4, 3, 1, 2]
console.log(list);// [2, 1, 3, 4]

console.log('\nNon-Mutating list sort [2, 1, 3, 4]:');
list = [2,1,3,4];
var sortedList = list.slice().sort();

console.log(sortedList); // [1, 2, 3, 4]
console.log(list);// [2, 1, 3, 4]
