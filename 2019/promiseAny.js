'use strict';

if (typeof Promise.any !== 'function') {
  // Only for example purposes. This does not implement the error handling of Promise.any. For a production ready
  // implementation instead consider libraries like Bluebird: https://github.com/petkaantonov/bluebird
  Promise.any = function(promises) {
    let resolved = false;

    return new Promise((resolve, reject) => {
       for (const promise of promises) {
        promise.then((result) => {
          if (resolved !== true) {
            resolved = true;

            resolve(result);
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
      resolve({ some: 'data', from: 'B' });
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
  console.time('promise.any completion time');
  const data = await Promise.any([
    apiA(),
    apiB(),
    apiC(),
  ]);

  console.info('Retrieved', data);
  console.timeEnd('promise.any completion time');
  // Retrieved { some: 'data', from: 'B' }
  // promise.any completion time: 203.451ms (exact time will vary slightly)
}
getData();
