'use strict';

console.log('Clear a timeout with a given ID:');

const timeoutId = setTimeout(() => {
  console.log('Should never show');
}, 500);

clearTimeout(timeoutId);
console.log('(Nothing should appear)');

console.log('\nClear timeouts via a setTimeout override:');

let globalObject;
if (typeof window === 'undefined') {
  globalObject = global;
} else {
  globalObject = window;
}

let allTimeoutIds = [];
const originalTimeout = setTimeout;
// Use a function instead of () => to ensure this can be overridden.
globalObject.setTimeout = function(callback, timeInMS) {
  const timeoutId = originalTimeout(callback, timeInMS);
  allTimeoutIds.push(timeoutId);
};

const originalClearTimeout = clearTimeout;
globalObject.clearTimeout = function(timeoutId) {
  allTimeoutIds = allTimeoutIds.filter((id) => id !== timeoutId);
  originalClearTimeout(timeoutId);
};

// Somewhere much later in code...

setTimeout(() => {
  console.log('Should never show 2');
}, 300);

setTimeout(() => {
  console.log('Should never show 3');
}, 400);

for (const id of allTimeoutIds) {
  clearTimeout(id);
}
console.log(allTimeoutIds)
// []


globalObject.setTimeout = originalTimeout;
globalObject.clearTimeout = clearTimeout;
console.log('\nClear timeouts via a global function:');
if (typeof window === 'undefined') {
  console.log('Not supported outside browser code.');
  return false;
}

// Syntax slightly modified from a Stack Overflow answer:
// https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts/16440036#16440036
function createClearAllTimeouts() {
  const noop = () => {};
  let firstId = setTimeout(noop, 0);

  return () => {
    const lastId = setTimeout(noop, 0);
    while (firstId !== lastId) {
      firstId += 1;
      clearTimeout(firstId);
    }
  };
};
const clearAllTimeouts = createClearAllTimeouts();

setTimeout(() => {
  console.log('Should never show 4');
}, 300);

setTimeout(() => {
  console.log('Should never show 5');
}, 400);

clearAllTimeouts();

