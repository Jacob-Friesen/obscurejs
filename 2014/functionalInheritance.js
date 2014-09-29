#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var Shape = function() {
    var self = {};

    self.type = 'shape';

    self.announceType = function() {
        console.log(self.type);
    };

    return self;
};

var shape = Shape();

shape.announceType(); //shape

// Inheritance is very simple

var Circle = function() {
    var self = Shape();

    self.type = 'circle';

    return self;
};

var circle = Circle();

circle.announceType();// circle

// Make sure parent wasn't screwed over

shape.announceType();// shape
