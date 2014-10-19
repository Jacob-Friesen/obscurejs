#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The parents

var Shape = function(preSelf) {
    var self = preSelf || {};

    self.type = 'shape';

    self.sayType = function() {
        console.log(self.type);
    };

    return self;
};

var Position = function(preSelf) {
    var self = preSelf || {};

    self.x = 0;
    self.y = 0;
    self.sayPosition = function() {
        console.log(self.x + ':' + self.y);
    }

    return self;
};

var shape = Shape();
shape.sayType();// shape

var position = Position();
position.sayPosition();// 0:0

// The multiple inheritance

var CenterCircle = function(preSelf) {
    var self = preSelf || {};

    self.type = 'circle';
    self.x = 6;
    self.y = 7;

    return self;
};

var centerCircle = CenterCircle(Shape(Position()));
centerCircle.sayType();// circle
centerCircle.sayPosition();// 6:7

// A cleaner way

var create = function() {
    var objects = Array.prototype.slice.call(arguments),
        lastObj = objects.slice(-1)[0]();
    for (var i = objects.length - 2; i >= 0; i -= 1) {
        lastObj = objects[i](lastObj);
    }
    
    return lastObj;
};

var centerCircle = create(CenterCircle, Shape, Position);
centerCircle.sayType();// circle
centerCircle.sayPosition();// 6:7

// Check that nothing is being overridden:

shape.sayType();// shape
position.sayPosition();// 0:0