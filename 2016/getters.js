#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.info('In Object getters and setters:');

var circle = {
  radiusSquared: 0,

  get area() {
    return Math.round(4 * Math.PI * this.radiusSquared);
  },

  set radius(radius) {
    this.radiusSquared = Math.pow(radius, 2);
  }
}

circle.radius = 1.83;
console.log('Area:', circle.area);
// Area: 42

console.info('\nGetters and setters using Object.defineProperties:');

circle = Object.defineProperties({}, {
  radiusSquared: { value: 0, writable: true },

  area: {
    get: function() {
      return Math.round(4 * Math.PI * this.radiusSquared);
    }
  },

  radius: {
    set: function(radius) {
      this.radiusSquared = Math.pow(radius, 2);
    }
  }
});

circle.radius = 1.83;
console.log('Area:', circle.area);
// Area: 42

// (triggers an error)
// console.log('\nPassing getters does not work:');

// function callCallback(callback) {
//  console.info('Test', callback())
// }

// callCallback(circle.radius);



