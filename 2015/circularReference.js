#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Simple example of direct circular references
console.log('Direct circular reference')

var objectA = {
    property1: 'test'
};

objectA.self = objectA;

console.log(objectA); // { property1: 'test', self: [Circular] }
console.log(objectA.self); // { property1: 'test', self: [Circular] }
console.log(objectA.self.self); // { property1: 'test', self: [Circular] }

// Simple example of indirect circular references
console.log('Indirect circular reference');

var objectB = {
    objectA: objectA
};

console.log(objectB)
// { objectA: { property1: 'test', self: [Circular] } }

// Simple example of array circular references
console.log('Array circular reference');

var arr = [1,2];
arr.push(arr);

console.log(arr);
// [ 1, 2, [Circular] ]

// Stringify and circular references
console.log('Stringify and circular references');

try {
    JSON.stringify(arr);
} catch(e) {
    console.log(e);
    // Some form of TypeError
}
