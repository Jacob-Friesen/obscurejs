'use strict';
console.log('Original HP increment:');

function generateCars() {
  return [
    { name: 'miata', hp: 155},
    { name: 'elise', hp: 217},
    { name: 'alfaromeo', hp: 237}
  ];
}

function addMoreHp(cars) {
  for (let car of cars) {
    const oldHp = car.hp;
    car.hp += 10;
  }
}

let carsHp = generateCars();

addMoreHp(carsHp);
console.log(carsHp);
// [ { name: 'miata', hp: 165 },
//   { name: 'elise', hp: 227 },
//   { name: 'alfaromeo', hp: 247 } ]

console.log('\nInternal loop extraction (via callback):');

function addMoreHp2(cars, callback) {
  for (let car of cars) {
    const oldHp = car.hp;
    car.hp += 10;
    callback(oldHp, car.hp);
  }
}

carsHp = generateCars();

addMoreHp2(carsHp, (oldHP, newHP) => {
  console.log(oldHP, '=>', newHP);
});
// 165 '=>' 175
// 227 '=>' 237
// 247 '=>' 257

console.log('\nExternal loop extraction (via generator):');

function* addMoreHp3(cars) {  
  for (let car of cars) {
    const oldHp = car.hp;
    car.hp += 10;
    yield [oldHp, car.hp];
  }
}

carsHp = generateCars();

for (let [oldHP, newHP] of addMoreHp3(carsHp)) {
  console.log(oldHP, '=>', newHP);
}
// 165 '=>' 175
// 227 '=>' 237
// 247 '=>' 257
