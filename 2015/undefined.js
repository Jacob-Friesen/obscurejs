#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Global undefined

console.log(typeof undefined);// undefined

// Checking for non existent variable

console.log(typeof notStated === 'undefined');// true

// undefined variable

var x;
console.log(x);// undefined

console.log(typeof x);// undefined
x = undefined;
console.log(typeof x);// undefined

// undefined return value

var function1 = function() {};
console.log(function1());// undefined

var function2 = function() {
    return
};
console.log(function2());// undefined

// Checking for a non existent variable

try {
    notStated;
} catch (e) {
    if ((e + '').indexOf('ReferenceError') > -1) {
        console.log(e.message);
    }
}

// Object properties

var obj = {};
console.log(obj.property1);// undefined

// Remember that array positions are properties too
var arr = [1, 2, 3];

console.log(arr[3]);// undefined
console.log(arr['3']);// undefined

console.log(obj.hasOwnProperty('property1'));// false

console.log('property1' in obj);// false
console.log('toString' in obj);// true

