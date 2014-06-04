#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The painful default

var a = 1, b = 2, c = 3, d = 4, e = 5;

if (a !== b && a !== c && a !== d && a !== e)
    console.log('a != b, c, d, e');

// Slightly better

var notEqual = true;
[b, c, d, e].forEach(function(condition){
    notEqual = a !== condition;
});
if (notEqual)
    console.log('a != b, c, d, e');

// A better way

Object.prototype.notEq = function(){
    var toCheck = Array.prototype.slice.call(arguments, 0);
    toCheck.forEach(function(check){
        // 'this' is the object that calls the function here
        if (this === check)
            return false;
    });
    return true;
};

if(a.notEq(b, c, d, e))
    console.log('a != b, c, d, e');

// Best not to override Object though

var notEq = function(main){
    var toCheck = Array.prototype.slice.call(arguments, 1);
    toCheck.forEach(function(check){
    // 'this' is the object that calls the function here
    if (main === check)
        return false;
    });
    return true;
};

if (notEq(a, b, c, d, e))
    console.log('a != b, c, d, e');
