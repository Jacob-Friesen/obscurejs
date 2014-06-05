#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Goal: assert(0 == true).is.false; and assert(0 == true).is.true;

// Based on the main function from the Bracket Free JS Post
var createParenFree = function(obj, name, callback) {
    // defineProperty is IE 9+
    Object.defineProperty(obj, name, {
        get: function() {
            return callback();
        }
    });
};

// Now I just make a true and false property that does true and false checks
var assert = function(condition) {
    var is = {};

    createParenFree(is, 'true', function() {
        if (condition !== true){
            console.log('Assert condition was not true');
        }
    });

    createParenFree(is, 'false', function() {
        if (condition !== false){
            console.log('Assert condition was not false');
        }
    })

    // Create a hardcoded chaining structure
    return {
        is: is
    }
}

assert(0 == true).is.false;// (nothing)
assert(0 == true).is.true;// Assert condition was not true