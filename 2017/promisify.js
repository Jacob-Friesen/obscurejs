#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

const util = require('util');

console.log('Without util.promisify:');

function apiCall(name, callback) {
  // Simulate a server API Call
  setTimeout(function() {
    const vehicles = {
      'mx-5': {name: 'mx-5', type: 'car'},
      'ninja': {name: 'ninja', type: 'motorcyle'},
      'enzo': {name: 'enzo', type: 'car'},
    };

    const error = !vehicles[name] ? 'No vehicle found' : null;
    callback(error, vehicles[name]);
  }, 500);
}

// Confirm that the basic API call works
// apiCall((result) => console.log(result));

const wrappedApiCall = function(name) {
  return new Promise(function(resolve, reject) {
    apiCall(name, function(err, result) {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    });
  });
}

wrappedApiCall('mx-5').then(function(result) {
  console.log(result);
  // { name: 'mx-5', type: 'car' }
  
  return wrappedApiCall('enzo');
}).then(function(result) {
  console.log(result);
  // { name: 'enzo', type: 'car' }
  
  return wrappedApiCall('other');
})
.then(function(result) {
  console.log(result);
  // (Doesn't get here)
})
.catch((err) => {
  console.log(err);
  // No vehicle found
  
  part2();
});

function part2() {
  console.log('\nWith util.promisify:');

  const wrappedApiCall2 = util.promisify(apiCall);

  wrappedApiCall2('ninja').then(function(result) {
    console.log(result);
    // { name: 'ninja', type: 'motorcyle' }
    
    return wrappedApiCall2('mx-5');
  }).then(function(result) {
    console.log(result);
    // { name: 'enzo', type: 'car' }
    
    return wrappedApiCall2('other');
  }).then(function(result) {
    console.log(result);
    // (Doesn't get here)
  })
  .catch((err) => {
    console.log(err);
    // No vehicle found
  });
}

