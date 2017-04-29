#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

const getFastCars = function(callback) {
  // Simulate async API
  setTimeout(function() {
    callback([
      { name: 'charger', hp: '707' },
      { name: 'elise', hp: '217' },
    ]);
  }, 500);
}

const getGoodHandlingCars = function(callback) {
  // Simulate async API
  setTimeout(function() {
    callback([
      { name: 'miata', hp: '155' },
      { name: 'elise', hp: '217' },
    ]);
  }, 300);
}


const getGoodPerformanceCars = function(callback) {
  let totalResults = new Set(),
      totalCalls = 0;

  const onCallComplete = function(results) {
    results.forEach(function(result) {
      totalResults.add(result.name);
    });

    totalCalls += 1;
    if (totalCalls >= 2) {
      // Note that Array.from has no IE support, only MS Edge
      callback(Array.from(totalResults));
    }
  }

  getFastCars(onCallComplete);
  getGoodHandlingCars(onCallComplete);
}

getGoodPerformanceCars(function(results) {
  console.info(results);
});
// [ 'miata', 'elise', 'charger' ]

