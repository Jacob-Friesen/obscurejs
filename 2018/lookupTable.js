'use strict';

console.log('Without a lookup table:');

function getVehicles() {
  const vehicles = [];

  for (let index = 0; index < 30000; index += 1) {
    vehicles.push({ id: index, name: `Car ${index}`,  });
  }

  return vehicles;
}

function getStats() {
  const stats = [];

  for (let index = 0; index < 30000; index += 1) {
    const weight = Math.round(((index * 10) + 100)/30);
    stats.push({ id: index, carId: 30000 - index - 1, weight });
  }

  return stats;
}

// Normally, these would probably come from backend calls which could be separate.
const vehicles = getVehicles();
const stats = getStats();

const carsWithWeight = [];
for (let vehicle of vehicles) {
  // 
  const statistic = stats.find((stat) => stat.carId === vehicle.id);
  const weight = statistic !== undefined ? statistic.weight : 'Unknown';
  carsWithWeight.push(`${vehicle.name} (${weight})`);
}
console.log(carsWithWeight.slice(0, 3));
// [ 'Car 0 (6670)', 'Car 1 (6669)', 'Car 2 (6669)' ]

console.log('\nWith a lookup table:');

const statisticsByCarId = {};
for (let stat of stats) {
  statisticsByCarId[stat.carId] = stat;
}

const carsWithWeight2 = [];
for (let vehicle of vehicles) {
  // 
  const statistic = statisticsByCarId[vehicle.id];
  const weight = statistic !== undefined ? statistic.weight : 'Unknown';
  carsWithWeight2.push(`${vehicle.name} (${weight})`);
}
console.log(carsWithWeight2.slice(0, 3));
// [ 'Car 0 (6670)', 'Car 1 (6669)', 'Car 2 (6669)' ]

