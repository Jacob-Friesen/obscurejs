#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// How the ~ works

console.log(~1);// -2

// Can be before anything

console.log(~function(){});// -1

// Multiple operations

console.log(~~function(){});// 0
console.log(~~function(){}-~function(){})// 1

// Combining these

console.log('JavaScripts as easy as', 
  ~~function(){}-~function(){}+~~function(){}-~function(){},
  '+',
  ~~function(){}-~function(){}+~~function(){}-~function(){}
);

// Making it shorter

console.log(!function(){}); // false
console.log(!!function(){}); // true
console.log(+!!function(){}); // 1
console.log('JavaScripts as easy as', 
  +!!function(){}+!!function(){}, '+', +!!function(){}+!!function(){}
);