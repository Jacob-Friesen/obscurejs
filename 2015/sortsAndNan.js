#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

console.log([2,1,4].sort());// [1,2,4]

console.log([2,1,4].sort(function(a,b) {
    return a - b;
}));// [1,2,4]

console.log([NaN,1,NaN,2,1,4,NaN].sort());
// [1,1,2,4,NaN,NaN,NaN]

console.log(NaN < 1);// false
console.log(NaN == 1);// false
console.log(1 > NaN);// false

console.log([NaN,1,NaN,2,1,4,NaN].sort(function(a,b) {
    return a - b;
}));//  [NaN,1,2,4,NaN,1,NaN]

console.log([NaN,1,NaN,2,1,4,NaN].sort(function(a,b) {
    if (isNaN(a)){
        return 1;
    } else if (isNaN(b)) {
        return -1;
    } 
    return a - b;
}));// [1,1,2,4,NaN,NaN,NaN]

