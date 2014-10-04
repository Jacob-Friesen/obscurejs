#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var Shape = function() {};
Shape.prototype.type = 'shape';
Shape.prototype.announceType = function() {
    console.log(this.type);
};

// New must be used with this style
var shape = new Shape();

shape.announceType(); //shape

// The inheritance

var Circle = function() {
    this.type = 'circle';
};

// And inherit
Circle.prototype = Shape.prototype;

var circle = new Circle();

circle.announceType();// circle

// Make sure parent or child wasn't screwed over

shape.announceType();// shape

// Methods can be modified dynamically, but there is a problem

Circle.prototype.announceType = function() {
    console.log('A new type message');
};

circle.announceType();// 'A new type message'
shape.announceType();// 'A new type message'

// So the inheritance strategy must be changed
console.log('--A New Strategy--');

var inherit = function(child, parent) {
    var empty = function () {};
    empty.prototype = parent.prototype;
    child.prototype = new empty();
    child.prototype.constructor = child;
};

// And to demonstrate, completely new classes are needed

var Shape2 = function() {};
Shape2.prototype.type = 'shape';
Shape2.prototype.announceType = function() {
    console.log(this.type);
};

var shape2 = new Shape2();

var Circle2 = function() {
    this.type = 'circle2';
};
inherit(Circle2, Shape2);

var circle2 = new Circle2();

circle2.announceType();// circle2

Circle2.prototype.announceType = function() {
    console.log('A new type message');
};

circle2.announceType();// 'A new type message'
shape2.announceType();// shape