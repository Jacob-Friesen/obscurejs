#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var elapsedTime = function(callback) {
    var start = new Date().getTime();
    callback();
    var end = new Date().getTime() - start;
    console.log('Elapsed Time', end + 'ms');
};

var complexCalculation = function() {
    var value = 0;
    while (value < 1000000000) {
        value += 1;
    }

    complexCalculation = function() {
        return value;
    };
    return complexCalculation();
};

elapsedTime(complexCalculation);// should probably be > 1000ms
elapsedTime(complexCalculation);// should probably be < 1ms
