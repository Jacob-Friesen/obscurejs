#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Default syntax

var mailBox = {
    messages: {
        message1: 'hello',
        message2: 'I could not think of a message'
    }
};

with(mailBox.messages){
    console.log(message1);
    console.log(message2);
}

// Future proofed

var with_ = function(obj, callback) {
    var args = []
    for (var property in obj){
        args.push(obj[property]);
    }

    // Apply sets the context for the function and passes it args
    // specified by the array.
    callback.apply(null, args);
};

with_(mailBox.messages, function(message1, message2){
    console.log(message1);
    console.log(message2);
});

// Even simpler

var with_ = function(obj, callback) {
    var names = [],
        values = [];

    for (var property in obj){
        names.push(property);
        values.push(obj[property]);
    }

    // Create wrapper that runs the original function with the obj properties
    // as parameters
    var wrapper = Function.apply(null, names.concat('(' + callback + ')();'));

    // Execute the wrapper with the values of the object
    wrapper.apply(null, values);
};

with_(mailBox.messages, function(){
    console.log(message1);
    console.log(message2);
});