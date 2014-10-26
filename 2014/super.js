#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The parent

var Shape = function(preSelf) {
    var self = preSelf || {};

    self.type = 'shape';

    self.sayType = function() {
        console.log(self.type);
    };

    return self;
};

var shape = Shape();
shape.sayType();// shape

// The child with a super call, it will just involve a slight modification to multipleInheritance.js's create.

var create = function() {
    var objects = Array.prototype.slice.call(arguments),
        lastObj = objects.slice(-1)[0];
    for (var i = objects.length - 2; i >= 0; i -= 1) {
        var newLastObj = objects[i](lastObj());
        // Not efficient, but very clear. 
        newLastObj.super = lastObj();
        lastObj = newLastObj;
    }
    
    return lastObj;
};

var Circle = function(preSelf) {
    var self = preSelf || {};

    self.type = 'circle';

    return self;
};

var circle = create(Circle, Shape);
circle.sayType();// circle
circle.super.sayType();// shape

// Check that nothing is being overridden:

shape.sayType();// shape
