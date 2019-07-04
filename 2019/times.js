'use strict';
const _ = require('lodash');

console.info('With for loops:');

function withForLoops() {
  const size = 4;
  const coordinates = [];
  for (let index = 0; index < size; index += 1) {
    coordinates.push([]);

    for (let indexInner = 0; indexInner < size; indexInner += 1) {
      coordinates[index][indexInner] = 0;
    }
  }

  console.log(coordinates);
  // [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
}
withForLoops();

console.info('\nWith times():');

function withTimes() {
  function times(number, callback) {
    const results = [];

    for (let index = 0; index < number; index += 1) {
      results.push(callback(index));
    }

    return results;
  }

  const size = 4;
  const coordinates = times(size, () => {
    return times(size, () => 0);
  });

  console.log(coordinates);
  // [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
}
withTimes();
