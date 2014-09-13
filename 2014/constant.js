#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var createConstants = function(constants) {
    var self = {};

    for (name in constants) {
        Object.defineProperty(self, name, {
            value: constants[name],

            // This should be default values, but you know how browsers are...
            writable: false,
            configurable: false
        });
    }

    return self;
};

// Then in a function scope (e.g. in an object)

var constants = createConstants({
    a: 1,
    b: 2
});

// The value at this point will not change

console.log(constants.a);// 1
console.log(constants.b);// 2
constants.a = 3;
constants.b = 4;
console.log(constants.a);// 1
console.log(constants.b);// 2