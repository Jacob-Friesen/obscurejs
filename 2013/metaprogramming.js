#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// We are in Node.js which means this does not work, so throw an error
if (typeof module !== 'undefined' && module.exports) {
	throw('This only runs in a browser (or browser like environment)');
}

function fib(n){
  if (n === 0)
    return 0;
  else if (n === 1)
    return 1;

  var result = fib(n - 1) + fib(n - 2);
  window['fib' + n] = new Function('return ' + result);

  return result;
};

// A higher fibonacci number uses all the lower fibonacci 
// numbers to generate itself. So once 11 has been discovered,
// all previous values (excluding 0 and 1) are cached.
console.log( fib(11) );
console.log( fib7() );