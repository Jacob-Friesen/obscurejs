#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The object to search through

var cars = {
    property1: 1,
    property2: {
        property1: 'a',
        property2: {
            property1: 'A',
            property2: 'B',
            property3: 'C'
        },
        property3: 'b'
    },
    property3: 3
};

// The generic approach
var shortSpec = [];
shortSpec.push(cars.property1);
shortSpec.push(cars.property2.property3);
shortSpec.push(cars.property2.property2.property2);

console.log(shortSpec);// [1, 'b', 'B']

// Using a Monad; Reduces error potential

var Find = function(wait) {
    return {
        // (nextLevel == bind)
        nextLevel: function(callback) {
            return Find(callback(wait));
        }
    };
};

var shortSpec = [];
Find(cars).nextLevel(function(section) {
    shortSpec.push(section.property1);
    return section.property2;
}).nextLevel(function(section) {
    shortSpec.push(section.property3);
    return section.property2;
}).nextLevel(function(section) {
    shortSpec.push(section.property2);
});

console.log(shortSpec);// [1, 'b', 'B']

// Easy to change later. If one of the top values is modified, the above strategy requires changing all those names.

var cars = {
    property1: 1,
    propertyX: {
        property1: 'a',
        property2: {
            property1: 'A',
            property2: 'B',
            property3: 'C'
        },
        property3: 'b'
    },
    property3: 3
};

var shortSpec = [];
Find(cars).nextLevel(function(section) {
    shortSpec.push(section.property1);
    return section.propertyX;
}).nextLevel(function(section) {
    shortSpec.push(section.property3);
    return section.property2;
}).nextLevel(function(section) {
    shortSpec.push(section.property2);
});

console.log(shortSpec);// [1, 'b', 'B']

