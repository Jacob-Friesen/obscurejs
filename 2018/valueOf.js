'use strict';
console.log('Date calculations without valueOf:');

const ONE_DAY_MS = 86400000;
const today = new Date();
const yesterday = new Date(new Date() - ONE_DAY_MS);

if (today - yesterday > 0) {
  console.log(`${today} takes place after ${yesterday}`);
} else {
  console.log(`${today} is the same as or before ${yesterday}`);
}
// Something like:
// Fri May 11 2018 20:56:47 GMT-0400 (EDT) takes place after Thu May 10 2018 20:56:47 GMT-0400 (EDT)

console.log('\nDate calculations with valueOf:');

const yesterday2 = new Date(new Date().valueOf() - ONE_DAY_MS);

if (today.valueOf() - yesterday2.valueOf() > 0) {
  console.log(`${today} takes place after ${yesterday2}`);
} else {
  console.log(`${today} is the same as or before ${yesterday2}`);
}
// Something like:
// Fri May 11 2018 20:56:47 GMT-0400 (EDT) takes place after Thu May 10 2018 20:56:47 GMT-0400 (EDT)

console.log('\nRounded object example:');

class Rounded {
  constructor(value) {
    this.value = Math.round(value);
  }

  valueOf() {
    return this.value;
  }
}

const revenue = new Rounded(201.2445);
const costs = new Rounded(325.2211);

const profit = revenue - costs;
const dreams = revenue * costs;

console.log(profit);
// -124
console.log(dreams);
// 65325

