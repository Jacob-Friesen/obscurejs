#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var positioning = function() {
    console.log('Positioning items');

    // Simulate some complicated sizing and positioning algorithms:
    for (var i = 0; i <= 2000000000; i += 1);

    console.log('Done positioning items');
};

console.log('manipulating DOM object');
console.log('changed position');

// External sizing and position code somewhere else (could be in a library that you cannot touch). Represented by
// this function:
positioning();

console.log('\nUsing defer:')

// By putting the things do after the changed position in a defer they will be executed after.
var defer = function(callback) {
    return setTimeout(callback, 0);
};

defer(function() {
    console.log('changed position');
});

// External sizing and position code somewhere else (could be in a library that you cannot touch). Represented by
// this function:
positioning();
