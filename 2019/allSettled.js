'use strict';

console.log('Using Promise.all:');

// Simulated API Calls
function api1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('Error 1'), 200);
  });
}
function api2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(['some', 'data']), 300);
  });
}
function api3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('Error 2'), 400);
  });
}

async function displayAllResults() {
  try {
    const results = await Promise.all([api1(), api2(), api3()]);
    console.log('results', results);
    // (never called)
  } catch (err) {
    console.log(err);
    // Error 1
  }

  displayAllResults2();
}
displayAllResults();

if (typeof Promise.allSettled !== 'function') {
  const alwaysResolveWrapper = function(promise) {
    return promise.then((value) => {
      return { status: 'fulfilled', value };
    }, (err) => {
      return { status: 'rejected', reason: err };
    });
  }

  Promise.allSettled = function(promises) {
    return Promise.all(promises.map((promise) => {
      return alwaysResolveWrapper(promise);
    }));
  }
}

async function displayAllResults2() {
  console.log('\nUsing Promise.allSettled:');

  try {
    const results = await Promise.allSettled([api1(), api2(), api3()]);

    const errors = results.filter((result) => result.status === 'rejected');
    console.log(errors.map((error) => error.reason));
    // [ 'Error 1', 'Error 2' ]
  } catch (err) {
    console.info(err);
    // (never called)
  }
}
