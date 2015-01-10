#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The bind

var bind = function(callback, scope) {
    return function() {
        return callback.apply(scope, arguments);
    };
};

// An object in a context that can print itself

var printState;
(function() {
    var carA = {
        name: 'mx-5',
        type: 'car',
        price: 20000,
        print: function() {
            console.log(this.name, '[' + this.type + ']', this.price);
        }
    }

    carA.print();// mx-5 [car] 20000

    printState = bind(carA.print, carA);// mx-5 [car] 20000
})();

// Now can print outside the context with bind

printState();// mx-5 [car] 20000

