'use strict';

class Car {
  constructor(name, hp, weight) {
    this.name = name;
    this.hp = hp;
    this.weight = weight;
    this.setPowerToWeightRatio();
  }

  setPowerToWeightRatio() {
    this.powerRatio = Math.round((this.hp/this.weight) * 100) + '%';
  }

  // Complex functionality that also uses setPowerToWeightRatio() here
}

const miata = new Car('miata', 155, 2387);
console.log(miata.powerRatio);
// 6%

function powerToWeightRatio(hp, weight) {
  const collector = { hp, weight };
  Car.prototype.setPowerToWeightRatio.call(collector);
  return collector.powerRatio;
}

console.log(powerToWeightRatio(1000, 1000));
// 100%
console.log(powerToWeightRatio(500, 1000));
// 50%

