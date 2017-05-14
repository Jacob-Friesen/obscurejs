#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

const Promise = function(callback) {
  return function() {
    let catchResult = null,
      resolveResult = null,
      rejectResult = null;

    const self = {
      catchResult: null,
      then: function(resolveCallback, rejectCallback) {
        const resolve = function(result) {
          resolveCallback(result);
        };

        const reject = function(result) {
          if (typeof rejectCallback === 'function') {
            rejectCallback(result);
          }
        };

        try {
          callback(resolve, reject);
        } catch (e) {
          self.catchResult = e;
        }

        return self;
      },
      catch: function(callback) {
        if (self.catchResult !== null) {
          callback(self.catchResult);
        }
      }
    };

    return self;
  };
};

const promise1 = new Promise(function(resolve, reject) {
  resolve('Promise 1 result');
});
const promise2 = new Promise(function(resolve, reject) {
  throw(new Error('An error'));
});
const promise3 = new Promise(function(resolve, reject) {
  reject('Promise 1 rejected')
});

console.log('Basic Promise:');
promise1().then(function(result) {
  console.log(result);
});
// Promise 1 result

promise2().then(function(result) {
  console.log('Should not appear');
}).catch(function(err) {
  console.log('Error message:', err.message);
});
// Error message An error

promise3().then(function(result) {
  console.log('Should not appear');
}, function(result) {
  console.log(result);
});
// Promise 1 rejected

const promise4 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Promise 4 result');
  }, Math.random * 100);
});

const promise5 = new Promise(function(resolve, reject) {
  resolve('Promise 5 result');
});

const promiseAll = function(promises) {
  promises = promises || [];
  let toFind = promises.length,
      catchResult = null;

  const self = {
    then: function(resolveCallback, rejectCallback) {
      const results = [];

      const resolve = function(callbackIndex, result) {
        results[callbackIndex] = result;

        if (results.length >= toFind && catchResult === null) {
          resolveCallback(results);
        }
      }

      const reject = function(result) {
        if (typeof rejectCallback === 'function') {
          rejectCallback(result);
          toFind = Infinity;
        }
      }

      promises.forEach(function(promise, callbackIndex) {
        // Pass in the callback position to resolve so that the results can
        // return in the right order.
        promise.then(function() {
          const args = []
          resolve.apply(this, [callbackIndex].concat(Array.from(arguments)));
        }, reject);

        if (promise.catchResult) {
          catchResult = promise.catchResult;
          toFind = Infinity;
        }
      });

      return self;
    },
    catch: function(callback) {
      if (catchResult !== null) {
        callback(catchResult);
      }
    }
  }

  return self;
};

console.log('\nPromise.all:')
promiseAll([promise4(), promise5(), promise4()]).then(function(results) {
  console.log('Recieved: ', results);
  extraCatchCheck(extraRejectCheck);
});
// Recieved:  [ 'Promise 4 result', 'Promise 5 result', 'Promise 4 result' ]

function extraCatchCheck(callback) {
  console.log('\nPromise.all catch check:');

  const promise6 = new Promise(function(resolve, reject) {
    throw(new Error('Promise 6 error'));
  });

  promiseAll([promise4(), promise6(), promise4()]).then(function(results) {
    console.log('Should not appear');
  }).catch(function(err) {
    console.log('ERROR', err);
    callback();
  });
  // (Exact error message display will vary per environment)
  //ERROR Error: Promise 6 error
  // at Object.callback (/Users/jacobfriesen/Documents/obscurejs/2017/promiseAll.js:138:11)
  // at /Users/jacobfriesen/Documents/obscurejs/2017/promiseAll.js:106:19
  // at Array.forEach (native)
  // at Object.then (/Users/jacobfriesen/Documents/obscurejs/2017/promiseAll.js:102:16)
  // at extraCheck (/Users/jacobfriesen/Documents/obscurejs/2017/promiseAll.js:141:46)
  // at /Users/jacobfriesen/Documents/obscurejs/2017/promiseAll.js:130:3
  // at resolve (/Users/jacobfriesen/Documents/obscurejs/2017/promiseAll.js:92:11)
  // at /Users/jacobfriesen/Documents/obscurejs/2017/promiseAll.js:108:21
  // at Timeout._onTimeout (/Users/jacobfriesen/Documents/obscurejs/2017/promiseAll.js:71:5)
  // at ontimeout (timers.js:380:14)
};

function extraRejectCheck() {
  console.log('\nPromise.all reject check:');

  const promise7 = new Promise(function(resolve, reject) {
    reject('Promise 7 reject');
  });

  promiseAll([promise4(), promise7(), promise4()]).then(function(results) {
    console.log('Should not appear');
  }, function(promise7) {
    console.log('REJECT:', promise7)
  }).catch(function(err) {
    console.log('ERROR', err);
  });
  // Promise 7 reject
};
