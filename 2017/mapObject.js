#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Rough launch dates in MM/DD/YYYY
const cars = new Map();
cars.set(new Date('09/01/2013'), '4C');
cars.set(new Date('07/04/1989'), 'miata');
cars.set(new Date('09/01/1996'), 'elise');

console.log(cars.size);
// 3

// later in the code
const byDate = [];
cars.forEach(function(value, key) {
  const result = { name: value, date: key };
  if (byDate.length === 0 || key <= byDate[byDate.length - 1].date) {
    byDate.push(result);
  } else {
    byDate.splice(byDate.length - 1, 0, result);
  }
});

console.info(byDate);
// [ { name: '4C', date: 2013-09-01T04:00:00.000Z },
//   { name: 'elise', date: 1996-09-01T04:00:00.000Z },
//   { name: 'miata', date: 1989-07-04T04:00:00.000Z } ]
