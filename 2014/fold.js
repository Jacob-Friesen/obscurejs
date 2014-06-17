#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The implementation

var foldl = function(array, callback, accumulator, index) {
    index = index || 0;// 0 is falsey, so this still works
    accumulator = accumulator || array[0];
    
    // Base case (prevents infinite recursion)
    if (index === array.length - 1) {
        return accumulator;
    }
    accumulator = callback(accumulator, array[index + 1]);
    return foldl(array, callback, accumulator, index + 1);
};

// Sum up values

var sum = foldl([0, 1, 2, 3], function(previous, current) {
    return previous + current;
});
console.log(sum);// 6

// Flatten an array

var flat = foldl([[0, 1], [2, 3]], function(previous, current) {
    return previous.concat(current);
});
console.log(flat);// [0, 1, 2, 3]

// Flattening from the right is as simple as decrementing instead of incrementing

var foldr = function(array, callback, accumulator, index) {
    index = index || array.length;
    accumulator = accumulator || array[array.length];
    
    // Base case (prevents infinite recursion)
    if (index === 0) {
        return accumulator;
    }
    accumulator = callback(accumulator, array[index - 1]);
    return foldl(array, callback, accumulator, index);
};

// Using the flattened example

var flattened = foldl([[0, 1], [2, 3]], function(previous, current) {
    return previous.concat(current);
});
console.log(flattened);// [0, 1, 2, 3]
