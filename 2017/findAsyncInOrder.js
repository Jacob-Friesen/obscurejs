#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Without interface:

// Simulate an API call
function getCar(carName, callback) {
  const cars = {
    miata: { hp: 155, weight: 2400 },
    elise: { hp: 217, weight: 2000 },
    '4C': { hp: 237, weight: 2465 }
  };

  setTimeout(function() {
    callback(cars[carName]);
  }, 1000);
};

function findAllCars(carNames, callback, index, cars) {
  index = index || 0;
  cars = cars || [];

  getCar(carNames[index], function(car) {
    cars.push(car);

    if (cars.length < carNames.length) {
      findAllCars(carNames, callback, index + 1, cars);
    } else {
      callback(cars);
    }
  });
};

const carNames = ['4C', 'miata', 'elise'];
findAllCars(carNames, function(cars) {
  console.log(cars);
  // [ { hp: 237, weight: 2465 },
  //   { hp: 155, weight: 2400 },
  //   { hp: 217, weight: 2000 } ]
  
  part2();
});

function findAllCarsOptimized(carNames, callback) {
  let index = 0,
    cars = [];

  carNames.forEach(function(carName) {
    getCar(carName, function(car) {
      cars.push(car);

      if (cars.length === carNames.length) {
        callback(cars);
      }
    });
  });
};

function part2() {
  console.log('Find all the cars as fast as possible:');

  findAllCarsOptimized(carNames, function(cars) {
    console.log(cars);
    // The order will vary
    // [ { hp: 237, weight: 2465 },
    //   { hp: 155, weight: 2400 },
    //   { hp: 217, weight: 2000 } ]
  });
}
