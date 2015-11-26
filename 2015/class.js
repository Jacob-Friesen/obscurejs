#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Class example (Throws a compile error in older environments, so it cannot be checked for)
console.log('Using the ES6 implementation:');

var Polygon = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }

    static get baseClassName() {
        return 'Polygon';
    }
};

console.log(Polygon.baseClassName);// 'Polygon'

var polygon = new Polygon(2, 3);
console.log(polygon.area);// 6

var Square = class extends Polygon {
    get area() {
        return this.height * this.height;
    }
};

console.log(Square.baseClassName);// 'Polygon'

var square = new Square(2);
console.log(square.area);// 4

// Custom example
console.log('\nUsing a custom implementation:');

var Polygon = function(height, width) {
    this.height = height;
    this.width = width;

    Object.defineProperty(this, 'area', {
        configurable: true,// Cannot override the area property without this
        get: (function() {
            return this.height * this.width;
        }).bind(this)
    });
};

Object.defineProperty(Polygon.prototype, 'baseClassName', {
    get: function() {
        return 'Polygon';
    }
});

console.log(Polygon.prototype.baseClassName);// 'Polygon'

var polygon = new Polygon(2, 3);
console.log(polygon.area);// 6

var Square = function(height) {
    Polygon.call(this, height);

    Object.defineProperty(this, 'area', {
        get: (function() {
            return this.height * this.height;
        }).bind(this)
    });
};
Square.prototype = Object.create(Polygon.prototype);

console.log(Square.prototype.baseClassName);// 'Polygon'

var square = new Square(2);
console.log(square.area);// 4