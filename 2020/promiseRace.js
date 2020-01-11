'use strict';

console.log('Promise Race:');

if (typeof Promise.race !== 'function') {
  Promise.race = function(promises) {
    let fulfilledOrRejected = false;

    return new Promise((resolve, reject) => {
       for (const promise of promises) {
        promise.then((result) => {
          if (fulfilledOrRejected !== true) {
            fulfilledOrRejected = true;

            resolve(result);
          }
        }).catch((err) => {
          if (fulfilledOrRejected !== true) {
            fulfilledOrRejected = true;

            reject(err);
          }
        });
      }
    });
  }
}

function apiA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ some: 'data', from: 'A' });
    }, 1000);
  });
}

function apiB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ some: 'data', from: 'B' });
    }, 200);
  });
}

function apiC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ some: 'data', from: 'C' });
    }, 1500);
  });
}

async function getData() {
  console.time('promise.race completion time');
  try {
    const data = await Promise.race([
      apiA(),
      apiB(),
      apiC(),
    ]);

    console.timeEnd('promise.race completion time');
    // (Does not reach here)
  } catch (err) {
    console.info('Error:', err);
    console.timeEnd('promise.race completion time');
    // Error: { some: 'data', from: 'B' }
    // promise.race completion time: 211.537ms
  }
}
getData();
