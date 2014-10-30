#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Using psuedoclassical as it will provide the best performance

var Shape = function() {};
Shape.prototype.type = 'shape';
Shape.prototype.announceType = function() {
    console.log(this.type);
};

// New must be used with this style
var shape = new Shape();

shape.announceType(); //shape

// Inherit code, slightly modified from PsuedoClassicalInheritance.js to give a super

var inherit = function(child, parent) {
    var empty = function () {};
    empty.prototype = parent.prototype;
    child.prototype = new empty();
    child.prototype.constructor = child;
    // Just add super here
    child.prototype.super = parent.prototype;
};

// And the child with the super extension

var Circle = function() {
    this.type = 'circle';
};

// And inherit
inherit(Circle, Shape);

var circle = new Circle();

circle.announceType();// circle
shape.announceType();// shape
circle.super.announceType();// shape
