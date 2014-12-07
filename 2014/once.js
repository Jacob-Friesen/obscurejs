#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The original structure

var a = null,
    b = null;

var initialize = function() {
    a = true;
    b = false;
};

var setValues = function() {
    // e.g. some kind of AJAX call which retrieves values
    a = true;
    b = true;
};

initialize();
setValues();
// Some point later in the code...
initialize();

console.log(a, b);// true false

// The once function

var once = function(callback) {
    var called = false;
    return function() {
        if (!callback) {
            callback();
        }
        callback = true;
    };
};

// Using once:

var a = null,
    b = null;

var initialize = once(function() {
    a = true;
    b = false;
});

var setValues = function() {
    // e.g. some kind of AJAX call which retrieves values
    a = true;
    b = true;
};

initialize();
setValues();
// Some point later in the code...
initialize();

console.log(a, b);// true true

