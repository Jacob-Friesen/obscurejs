#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Combine interation with recursion

var flatten = function(array, result) {
    result = result || [];

    // Due to the soft copying of arrays, I cannot just
    // concatenate the flatten return onto results. Instead
    // I need to send the results in to merge.
    array.forEach(function(element) {
        if (Array.isArray(element)){
            result = flatten(element, result);
        } else {
            result.push(element);
        }
    });

    return result;
}

console.log(flatten([[0, '1'],[2, 3]]));// [0, '1', 2, 3]
console.log(flatten([[0, ['1', 2]], 3]));// [0, '1', 2, 3]
