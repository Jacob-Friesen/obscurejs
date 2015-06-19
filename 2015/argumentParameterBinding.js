#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var test = function(message) {
    console.log(message);// test

    arguments[0] = 'modified';
    console.log(message);// modified

    message = 'modified again';
    console.log(arguments[0]);// modified again

};

test('test');
