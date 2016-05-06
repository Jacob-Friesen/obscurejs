#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var Shape = function(x, y) {
  var self = {
    x: x,
    y: y
  };

  self.expandX = function() {
    self.x += 10;

    return self;
  };

  self.expandY = function() {
    self.y += 10;

    return self;
  };

  return self;
};

console.log('Original object:');
var shape = Shape(10, 10);

shape.expandX().expandY();
console.log(shape.x, shape.y);// 20 20

var returnWrap = function(callback, newReturn) {
  return function() {
    callback.apply(this, arguments);
    return newReturn;
  };
};

var ShapeManager = function(x, y) {
  var self = {
    shape: Shape(x, y)
  };

  self.expandX = returnWrap(self.shape.expandX, self);
  self.expandY = returnWrap(self.shape.expandY, self);

  self.printShape = function() {
    console.log(shape.x, shape.y);
  };

  return self;
};

console.log('\nObject that overrides the chain:');
var shapeManager = ShapeManager(10, 10);

shapeManager.expandX().expandY().printShape();// 20 20

