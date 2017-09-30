#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

function findIndex(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index]) === true) {
      return index;
    }
  }

  return -1;
}

function findIndices(array, callback) {
  const indices = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index]) === true) {
      indices.push(index);
    }
  }

  return indices;
}

function insertBatch(data, callback) {
  // Simulate an API call with some error returns
  setTimeout(function() {
    callback([
      data[0],
      data[1],
      { error: 'Cannot insert with a negative quantity' },
      { error: '"row-2" was already specified' },
      data[4]
    ]);
  }, 500);
}

console.log('Find Index Version:');

const formattedUserInput = [
  { id: 'row-1', display: 'Test A' , quantity: 100 },
  { id: 'row-2', display: 'Test B' , quantity: 50 },
  { id: 'row-3', display: 'Test C' , quantity: -100 },
  { id: 'row-2', display: 'Test D' , quantity: 100 },
  { id: 'row-5', display: 'Test E' , quantity: 1 },
];

insertBatch(formattedUserInput, function(data) {
  const errorIndex = findIndex(data, function(row) {
    return row.error !== undefined;
  });

  if (errorIndex !== -1) {
    console.log('There was an error at row', (errorIndex + 1) + ':');
    console.log(data[errorIndex].error);
  } else {
    console.log('All rows inserted successfully.');
  }

  findIndicesVersion();
});
// There was an error at row 3
// Cannot insert with a negative quantity

function findIndicesVersion() {
  console.log('\nFind Indices Version:');

  insertBatch(formattedUserInput, function(data) {
    const errorIndices = findIndices(data, function(row) {
      return row.error !== undefined;
    });

    if (errorIndices.length !== 0) {
      errorIndices.forEach(function(errorIndex) {
        console.log('There was an error at row', (errorIndex + 1) + ':');
        console.log(data[errorIndex].error);
      });
    } else {
      console.log('All rows inserted successfully.');
    }
  });
}
// There was an error at row 3:
// Cannot insert with a negative quantity
// There was an error at row 4:
// "row-2" was already specified

