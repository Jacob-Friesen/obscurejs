#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Generator example
console.log('Using the ES6 implementation:');

var incrementor = function*() {
    var index = 0;
    while(index < 2) {
        yield index += 1;
    }
};

var increment = incrementor();
console.log(increment.next().value); // 0
console.log(increment.next().value); // 1
console.log(increment.next().value); // undefined
console.log(increment.next().done); // true

// Custom generator example
console.log('\nUsing a custom implementation:');

var generator = function(callback) {
    var results = [],
        nextIncrement = -1;

    // Collect the results
    callback(function(result) {
        results.push(result);
    });

    // Return the collected result at the increment
    var next = function() {
        nextIncrement += 1;
        return {
            value: results[nextIncrement],
            done: nextIncrement >= results.length
        };
    };

    return function() {
        return {
            next: next
        };
    };
};

var incrementor = generator(function(_yield) {
    var index = 0;
    while(index < 2) {
        _yield(index += 1);
    }
});

var increment = incrementor();
console.log(increment.next().value); // 0
console.log(increment.next().value); // 1
console.log(increment.next().value); // undefined
console.log(increment.next().done); // true
