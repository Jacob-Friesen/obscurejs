#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var shape = {
    type: 'shape',

    announceType: function() {
        console.log(this.type);
    }
};

shape.announceType(); //shape

// Inheritance is very simple

var circle = Object.create(shape, {
    type: {value: 'circle'}
});

circle.announceType();// circle

// Make sure parent wasn't screwed over

shape.announceType();// shape
