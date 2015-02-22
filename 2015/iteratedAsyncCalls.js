#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The problematic external calls

var makeCallsWith = function(animals) {
    for (var i = 0; i < 3; i += 1) {
        // The async nature of an API call is represented by this.
        setTimeout(function() {
            console.log(animals[i]);
        }, 100);
    }
};

makeCallsWith(['dog', 'cat', 'horse']);// undefined\nundefined\nundefined

// Solved by wrapping it with a function passing in the right arguments

makeCallsWith = function(animals) {
    for (var i = 0; i < 3; i += 1) {
        (function(i) {
            setTimeout(function() {
                console.log(animals[i]);
            }, 100);
        })(i);
    }
};

makeCallsWith(['dog', 'cat', 'horse']);// dog\nhorse\ncat

// Using forEach

makeCallsWith = function(animals) {
    animals.forEach(function(animal) {
        setTimeout(function() {
            console.log(animal);
        }, 100);
    });
};

makeCallsWith(['dog', 'cat', 'horse']);// dog\nhorse\ncat