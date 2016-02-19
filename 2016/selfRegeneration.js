#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Standard syntax
console.log('Standard syntax:');

var position;
(function() {
  var Position = function newPosition() {
    var self = {};
    var position = {
      x: 0,
      y: 0,
      z: 0
    };

    self.shift = function(type, amount) {
      position[type] += amount;
    };

    self.get = function() {
      return position;
    };

    self.newPosition = newPosition;

    return self;
  };

  position = Position();
})();

position.shift('x', 20);
position.shift('y', 30);

console.log(position.get());// { x: 20, y: 30, z: 0 }

var position2 = position.newPosition();
position2.shift('z', 20);
position.shift('y', -30);

console.log(position.get());// { x: 20, y: 0, z: 0 }
console.log(position2.get());// {x: 0, y: 0, z: 20}

// ES6 Class syntax
console.log('\nES6 Class syntax:');

var position;
(function() {
  class Position {
    constructor() {
      this.position = {
        x: 0,
        y: 0,
        z: 0
      };
    }

    shift(type, amount) {
      this.position[type] += amount;
    }

    get() {
      return this.position;
    }
  };
  Position.prototype.newPosition = Position;

  position = new Position();
})();

position.shift('x', 20);
position.shift('y', 30);

console.log(position.get());// { x: 20, y: 30, z: 0 }

var position2 = new position.newPosition();
position2.shift('z', 20);
position.shift('y', -30);

console.log(position.get());// { x: 20, y: 0, z: 0 }
console.log(position2.get());// {x: 0, y: 0, z: 20}