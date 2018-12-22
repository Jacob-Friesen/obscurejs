'use strict';

console.log('Intl:');

const number1 = 19342.987;

console.log(Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(number1));
// $19,342.99

console.log(Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
}).format(number1));
// £19,342.99

console.log(Intl.NumberFormat('cmn-CN', {
  style: 'currency',
  currency: 'CNY'
}).format(number1));
// CN¥ 19,342.99

console.log(Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 3,
  maximumFractionDigits: 3
}).format(number1));
// $19,342.987