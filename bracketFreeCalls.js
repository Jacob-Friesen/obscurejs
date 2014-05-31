#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var createParenFree = function(name, callback) {
    // defineProperty is IE 9+ if you are wondering
    return Object.defineProperty({}, name, {
        get: function() {
            return callback();
        }
    });
};

var obj = createParenFree('test', function() {
    console.log('Running paren-free call'); 
})

obj.test; // Running paren-free call