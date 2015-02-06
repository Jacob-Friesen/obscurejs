#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The object to clone

var a = {
    property1: 'valueA',
    property2: {
        property3: 'valueB',
        property4: {
            property5: 'valueC'
        }
    },
    property5: ['valueD', 'valueE']
};

// Without cloning

var b = a;

b.property2.property3 = 'modified';

console.log(a.property2.property3);
// modified

b.property2.property3 = 'valueB';

// The clone function

var clone = function(obj) {
    // No point in loop through primitives e.g. strings
    if (typeof obj !== 'object' || obj === null){
        return obj
    }

    var newObj = Array.isArray(obj) ? [] : {};
    for (var name in obj) {
        newObj[name] = clone(obj[name]);
    }
    return newObj;
};

// With cloning

var b = clone(a);

b.property2.property3 = 'modified';

console.log(a.property2.property3);
// valueB

console.log(a);
// { property1: 'valueA',
//   property2: { property3: 'valueB', property4: { property5: 'valueC' } },
//   property5: [ 'valueD', 'valueE' ] }

console.log(b);
// { property1: 'valueA',
//   property2: { property3: 'modified', property4: { property5: 'valueC' } },
//   property5: [ 'valueD', 'valueE' ] }
