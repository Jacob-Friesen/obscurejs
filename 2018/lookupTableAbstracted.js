'use strict';

// See lookupTable.js for the first steps of this

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

function byProperty(arr, property) {
  const obj = {};
  if (!Array.isArray(arr)) {
    return obj;
  }

  for (let element of arr) {
    obj[element[property]] = element;
  }

  return obj;
}

// Normally, these would probably come from backend calls which could be separate.
const vehicles = getVehicles();
const stats = getStats();

const statisticsByCarId = byProperty(stats, 'carId');

const carsWithWeight = [];
for (let vehicle of vehicles) {
  // 
  const statistic = statisticsByCarId[vehicle.id];
  const weight = statistic !== undefined ? statistic.weight : 'Unknown';
  carsWithWeight.push(`${vehicle.name} (${weight})`);
}
console.log(carsWithWeight.slice(0, 3));
// [ 'Car 0 (6670)', 'Car 1 (6669)', 'Car 2 (6669)' ]
