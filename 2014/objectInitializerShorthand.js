#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// (https://github.com/google/traceur-compiler/wiki/LanguageFeatures#object-initializer-shorthand)
// var getPoint = function() {
//     var x = 1;
//     var y = 10;

//     return {x, y};
// };
// console.log(getPoint());// {x: 1, y: 10}

// The implementation (only works if there is one objectify in callee)

var objectify = function objectify() {
    var args = Array.prototype.slice.call(arguments),
        obj = {};

    // Look for the variables in the calling function
    var caller = objectify.caller + '',
        argNames = caller.split('objectify(').slice(-1)[0]
                         .split(')')[0]
                         .split(',');

    args.forEach(function(argument, index) {
     obj[argNames[index]] = argument;
    });

    return obj;
};

var getPoint = function() {
    var x = 1;
    var y = 10;

    return objectify(x, y);
};
console.log(getPoint());// {x: 1, y: 10}