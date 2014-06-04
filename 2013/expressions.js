#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// JS compare

function compare(a, b){
    if (a === b)
        return 'equal';
    else if (a < b)
        return 'a < b';
    return 'a > b';
}

console.log(compare(1,1), ':', compare(1,2), ':', compare(2,1));

// Make it one line

function compare(a, b){
    return (a === b && 'equal') || (a < b && 'a < b') || 'a > b'; 
}

console.log(compare(1,1), ':', compare(1,2), ':', compare(2,1));

// Once again taking it too far

var compare = null;
console.log((compare = function(a, b) {
    return (a === b && 'equal') || (a < b && 'a < b') || 'a > b';
}) && compare(1,1), ':', compare(1,2), ':', compare(2,1));