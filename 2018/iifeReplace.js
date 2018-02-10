console.log('Isolating scope via IIFE:');

function printErrorOnly(callback) {
  // Errors should be handled in a direct way, but this is just for
  // demonstration purposes.
  try {
    callback();
  } catch(e) {
    console.log(e);
  }
}

(function() {
  var a = 1;
  let b = 2;
  const c = 3;
  
  console.log(a, b, c);
  // 1 2 3
})();

printErrorOnly(() => a);
// ReferenceError: a is not defined...
printErrorOnly(() => b);
// ReferenceError: b is not defined...
printErrorOnly(() => c);
// ReferenceError: c is not defined...

console.log('\nIsolating scope via an Immediately Invoked Arrow Function:');

(() => {
  var a = 1;
  let b = 2;
  const c = 3;
  
  console.log(a, b, c);
  // 1 2 3
})();

printErrorOnly(() => a);
// ReferenceError: a is not defined...
printErrorOnly(() => b);
// ReferenceError: b is not defined...
printErrorOnly(() => c);
// ReferenceError: c is not defined...

console.log('\nIsolating scope via a block:');

{
  var a = 1;
  let b = 2;
  const c = 3;
  
  console.log(a, b, c);
  // 1 2 3
};

printErrorOnly(() => a);
// (no message and no error)
printErrorOnly(() => b);
// ReferenceError: b is not defined...
printErrorOnly(() => c);
// ReferenceError: c is not defined...
