'use strict';

console.log('Not once limited:');

function once(callback) {
  let called = false,
    result = undefined;
  return () => {
    if (called === false) {
      result = callback(...arguments);
    }
    called = true;
    return result;
  }
}

let value = 0;
function increment() {
  value += 1;
  return value;
}

console.log(increment());
// 1
console.log(increment());
// 2
console.log(increment());
// 3

console.log('\nOnce limited in a custom way:');

let called = false;
function oneTimeIncrement() {
  if (!called) {
    value += 1;
  }
  called = true;

  return value;
}

console.log(oneTimeIncrement());
// 4
console.log(oneTimeIncrement());
// 4
console.log(oneTimeIncrement());
// 4

console.log('\nOnce limited in a generalized way');

const oneTimeIncrement2 = once(increment);
console.log(oneTimeIncrement2());
// 4
console.log(oneTimeIncrement2());
// 4
console.log(oneTimeIncrement2());
// 4
