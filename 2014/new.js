#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Basic style, used in most languages

var A = function() {
    this.message = 'test';

    return this;
};

var a = A();
console.log(a);// {<Properties from global scope>, message: 'test' }

// Choose between node or browser globals
console.log(typeof global !== 'undefined' ? global.message : window.message)// test

var a2 = new A();// { message: 'test' }
console.log(a2);

// To not override globals then either new has to be used which can be forgotten or a constructed
// object can be returned instead

var A = function() {
    var self = {};

    self.message2 = 'test';

    return self;
};

var a = A();
console.log(a);// { message2: 'test' }
console.log(typeof global !== 'undefined' ? global.message2 : window.message2)// undefined

var a2 = new A();// { message2: 'test' }
console.log(a2);
