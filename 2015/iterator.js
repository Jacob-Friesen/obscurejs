#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// A basic iterator
console.log('Basic array based iterator:');

var arrayIterator = function(array) {
    var nextIndex = 0;
    
    return {
        next: function() {
            if (nextIndex < array.length) {
                nextIndex += 1;
                return {
                    value: array[nextIndex - 1],
                    done: false
                };
            }
            return {done: true};
       }
    }
};

var it = arrayIterator(['one', 'two', 'three']);
console.log(it.next().value);// 'one'
console.log(it.next().value);// 'two'
console.log(it.next().value);// 'three'
console.log(it.next().done);// true

// An iterator for non array like data
console.log('\nIterator for all values of a list of objects:');

var allValuesIterator = function(array) {
    var nextIndex = 0;
    
    return {
        next: function() {
            var arrIndex = Math.floor(nextIndex/2);
            if (arrIndex < array.length) {
                var property = nextIndex % 2 === 0 ? 'name' : 'hp';
                nextIndex += 1;
                return {
                    value: array[arrIndex][property],
                    done: false
                };
            }
            return {done: true};
       }
    };
};

var it = allValuesIterator([
    {name: 'car', hp: 1000},
    {name: 'motorcycle', hp: 300}
]);
console.log(it.next().value);// 'car'
console.log(it.next().value);// 1000
console.log(it.next().value);// 'motorcycle'
console.log(it.next().value);// 300

// Adding the values iterator to the previous simulate set object
console.log('\nImplementing the values() iterator for a simulated set:');

// Code from the previous Set blog post
var Set = function() {
    this._values = [];
};

Object.defineProperty(Set.prototype, 'size', {
    get: function() {
        return this._values.length;
    }
});

Set.prototype.add = function(value) {
    this._values.push(value);
};

Set.prototype.has = function(value) {                                                            
    for (var i = 0; i < this._values.length; i += 1) {
        if (this._values[i] === value) {
            return true;
        }
    }
    return false;
};

Set.prototype.delete = function(value) {                                                            
    for (var i = 0; i < this._values.length; i += 1) {
        if (this._values[i] === value) {
            this._values.splice(i, 1);
            return;
        }
    }
};

Set.prototype.forEach = function(callback) {                                                            
    for (var i = 0; i < this._values.length; i += 1) {
        callback(this._values[i], this);
    }
};

// The new values method

Set.prototype.values = function() {                                                    
    return arrayIterator(this._values);
};

var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add('some text');

var valuesIter = mySet.values();
console.log(valuesIter.next().value);// 1
console.log(valuesIter.next().value);// 5
console.log(valuesIter.next().value);// 'some text'