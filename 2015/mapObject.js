#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Real Map
if (typeof Map !== 'undefined') {
    console.log('Using the base Map object');

    var myMap = new Map();

    var keyObj = {},
        keyFunc = function () {},
        keyString = "a string";

    // setting the values
    myMap.set(keyString, "for 'a string'");
    myMap.set(keyObj, "for keyObj");
    myMap.set(keyFunc, "for keyFunc");

    console.log(myMap.size); // 3

    // getting the values
    console.log(myMap.get(keyString));// "for 'a string'"
    console.log(myMap.get(keyObj));// "for keyObj"
    console.log(myMap.get(keyFunc));// "for keyFunc"
    console.log(myMap.get({}));// undefined (The key must be the original object)
    console.log(myMap.get(function() {}));// undefined

    // deletion
    myMap.delete(keyFunc);
    console.log(myMap.size);// 2

    // iteration
    myMap.forEach(function(obj) {
        console.log(obj);
    });// "for 'a string'"\n"for keyObj"
} else {
    console.log('This environment has no base Map object')
}

// The Map object
console.log('\nUsing a simulated Map object');

var Map2 = function() {
    this.keys = [];
    this.values = [];
};

Object.defineProperty(Map2.prototype, 'size', {
    get: function() {
        return this.keys.length;
    }
});

Map2.prototype.set = function(key, value) {
    this.keys.push(key);
    this.values.push(value);
};

Map2.prototype.get = function(key) {                                                            
    for (var i = 0; i < this.keys.length; i += 1) {
        if (this.keys[i] === key) {
            return this.values[i];
        }
    }
};

Map2.prototype.delete = function(key) {                                                            
    for (var i = 0; i < this.keys.length; i += 1) {
        if (this.keys[i] === key) {
            this.keys.splice(i, 1);
            this.values.splice(i, 1);
            return;
        }
    }
};

Map2.prototype.forEach = function(callback) {                                                            
    for (var i = 0; i < this.keys.length; i += 1) {
        callback(this.values[i], this.keys[i], this);
    }
};

// The Map object example

var myMap = new Map2();

var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";

// setting the values
myMap.set(keyString, "for 'a string'");
myMap.set(keyObj, "for keyObj");
myMap.set(keyFunc, "for keyFunc");

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString));// "for 'a string'"
console.log(myMap.get(keyObj));// "for keyObj"
console.log(myMap.get(keyFunc));// "for keyFunc"
console.log(myMap.get({}));// undefined (The key must be the original object)
console.log(myMap.get(function() {}));// undefined

// deletion
myMap.delete(keyFunc);
console.log(myMap.size);// 2

// iteration
myMap.forEach(function(obj) {
    console.log(obj);
});// "for 'a string'"\n"for keyObj"

