#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Annoying defaults

function printMessages(a, b){
    a = (typeof a === 'undefined') ? 'Hello' : a;
    b = (typeof b === 'undefined') ? 'World' : b;

    console.log(a, b);
}

printMessages();

// Better way

// I think adding a property to functions is the easiest way, but this could also be
// implemented by sending in the function as the first argument then taking the rest
// as the defaults. The this at the top would be replaced with the first argument.
// This style would be called like:
// var printMessages = defaults(function(){}, default1, default2, ...);
Function.prototype.defaults = function(){
    // turn arguments sent in into a basic array
    var defaults = Array.prototype.slice.call(arguments),
        toCall = this;

    // Create a new function that stores the sent in defaults in the above scope
    // which calls the original once the defaults are applied.
    return function(){
        var args = Array.prototype.slice.call(arguments);

        defaults.forEach(function(val, index){
            args[index] = (typeof args[index] === 'undefined') ?
                          defaults[index] : args[index]; 
        });

        // apply calls the function it's attached to with the provided scope and an
        // array of arguments.
        return toCall.apply(this, args);
    }
}

// For now, Firefox only
// function printMessages(a = 'Hello', b = 'World'){
//     console.log(a, b);
// }

printMessages();