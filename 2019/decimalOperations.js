'use strict';
const Decimal = require('decimal.js');

console.log('Basic decimal arithmetic');
console.log(0.1 + 0.2);
// 0.30000000000000004

console.log('\nInteger to decimal arithmetic');
const result = ((0.1 * 10) + (0.2 * 10)) / 10;
console.log(result);
// 0.3

console.log('\nIncorrect Compound Interest Calculation');

function getTotalCompoundInterest1(interest, years) {
    const epsilon = 1000000;
    return  Math.pow(interest * epsilon, years) / Math.pow(epsilon, years);
}

console.log(getTotalCompoundInterest1(1.10, 5));
// 1.61051
console.log(getTotalCompoundInterest1(1.12, 5));
// 1.7623416832000016
console.log(getTotalCompoundInterest1(1.1273, 5));
// 1.8205287217241934

console.log('\nCorrect Compound Interest Calculation (with decimal.js)');

function getTotalCompoundInterest2(interest, years) {
    return new Decimal(interest).toPower(years).toNumber();
}

console.log(getTotalCompoundInterest2(1.10, 5));
// 1.61051
console.log(getTotalCompoundInterest2(1.12, 5));
// 1.7623416832
console.log(getTotalCompoundInterest2(1.1273, 5));
// 1.8205287217241937
