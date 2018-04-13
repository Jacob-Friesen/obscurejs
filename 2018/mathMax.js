console.log('Math Max basics:');

console.log(Math.max(1, 3, 1));
// 3

const arr = [1, 3, 1];
// The spread syntax converts the array into a set of arguments
// It is supported in all modern browsers except IE (but has MS Edge support)
console.log(Math.max(...arr));
// 3

console.log('With dates:');

const dates = [
  new Date('2011/06/25'),
  new Date('2011/06/28'),
  new Date('2011/06/27'),
  new Date('2011/06/26')
];

const maxDate = new Date(Math.max(...dates));
console.log(maxDate);
// 2011-06-28T04:00:00.000Z (Format varies per environment)

console.log('With an array of objects:');

const cars = [
  { hp: 155, weight: 2400 },
  { hp: 237, weight: 2465 },
  { hp: 217, weight: 2000 },
];

console.log(Math.max(...cars.map((car) => car.hp)));
// 237

const maxHp = cars.reduce((maxHp, car) => Math.max(maxHp, car.hp), 0);
console.log(maxHp);
// 237
