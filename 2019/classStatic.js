'use strict';

class Money {
  constructor(value) {
    this.baseValue = value;
  }

  toString() {
    const rounded = Math.round(this.baseValue * 100) / 100;
    // For example purposes, no internationalization is done
    return `$${rounded}`;
  }

  // This value will be used in any calculation
  valueOf() {
    return this.baseValue;
  }

  static subtract(money1, money2) {
    return new Money(money1 - money2);
  }
}

// Old static strategy
Money.subtract = function subtract(money1, money2) {
  return new Money(money1 - money2);
};

const revenue = new Money(2145.2267);
const costs = new Money(1000);

console.log(`Revenue: ${revenue}`);
// $2145.23
console.log(`Costs: ${costs}`);
// $1000

console.log(`Profit: ${Money.subtract(revenue, costs)}`);
// Profit: $1145.23
