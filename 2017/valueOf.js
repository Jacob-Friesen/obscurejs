#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('valueOf default:');

const ObjectA = function() {
  this.property1 = 'value1';
};

let objectA = new ObjectA();
console.log(objectA.valueOf());
// { property1: 'value1' }

console.log('\nMoney valueOf:');

const Money = function(value) {
  // Assume that Numbers are only sent in.
  this.value = Math.round(value * 1000) / 1000;
};

Money.prototype.valueOf = function() {
  return this.value;
}

let oneHundred = new Money(100),
    oneHundredAgain = new Money(100),
    below1 = new Money(0.1256);

console.log(oneHundred.value);
// 100
console.log(below1.value);
// 0.126

console.log(oneHundred - below1);
// 99.874
console.log(oneHundred * oneHundredAgain);
// 10000
console.log(oneHundred == oneHundredAgain);
// false

Money.prototype.toString = Money.prototype.valueOf;

console.log(new Money(oneHundred / below1) + '');
// 793.651
