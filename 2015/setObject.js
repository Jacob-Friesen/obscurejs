#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Real Set
if (typeof Set !== 'undefined') {
    console.log('Using the base Set object');

    var mySet = new Set();

    mySet.add(1);
    mySet.add(5);
    mySet.add('some text');
    var o = {a: 1, b: 2};
    mySet.add(o);

    // checking the values
    console.log(mySet.has(1)); // true
    console.log(mySet.has(3)); // false
    console.log(mySet.has(5)); // true
    console.log(mySet.has('some text')); // true
    console.log(mySet.has(o)); // true

    console.log(mySet.size); // 4

    // deletion
    mySet.delete(5);
    console.log(mySet.has(5));// false

    console.log(mySet.size);// 3

    // iteration
    mySet.forEach(function(obj) {
        console.log(obj);
    });// 1\n"some text"\n{ a: 1, b: 2 }
} else {
    console.log('This environment has no base Set object');
}

// The Set object
console.log('\nUsing a simulated Map object');

var Set2 = function() {
    this._values = [];
};

Object.defineProperty(Set2.prototype, 'size', {
    get: function() {
        return this._values.length;
    }
});

Set2.prototype.add = function(value) {
    this._values.push(value);
};

Set2.prototype.has = function(value) {                                                            
    for (var i = 0; i < this._values.length; i += 1) {
        if (this._values[i] === value) {
            return true;
        }
    }
    return false;
};

Set2.prototype.delete = function(value) {                                                            
    for (var i = 0; i < this._values.length; i += 1) {
        if (this._values[i] === value) {
            this._values.splice(i, 1);
            return;
        }
    }
};

Set2.prototype.forEach = function(callback) {                                                            
    for (var i = 0; i < this._values.length; i += 1) {
        callback(this._values[i], this);
    }
};

// The Set object example

var mySet = new Set2();

mySet.add(1);
mySet.add(5);
mySet.add('some text');
var o = {a: 1, b: 2};
mySet.add(o);

// checking the values
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false
console.log(mySet.has(5)); // true
console.log(mySet.has('some text')); // true
console.log(mySet.has(o)); // true

console.log(mySet.size); // 4

// deletion
mySet.delete(5);
console.log(mySet.has(5));// false

console.log(mySet.size);// 3

// iteration
mySet.forEach(function(obj) {
    console.log(obj);
});// 1\n"some text"\n{ a: 1, b: 2 }
