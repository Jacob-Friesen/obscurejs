#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The data

var vehicles = [
  {name: 'mx-5', type: 'car', parts: ['engine', '4wheels']},
  {name: 'ninja', type: 'motorcyle', parts: ['engine', '2wheels']},
  {name: 'enzo', type: 'car', parts: ['engine', '4wheels']}
];

// The where function

// Only need to check if the second appears in the first. This assumes
var equalOr2In1 = function(item1, item2) {
    if (item1 === item2) {
        return true;
    } else if (typeof item1 === 'object' && typeof item2 === 'object') {
        var allEqual = true;
        for (var name in item2) {
            allEqual = equalOr2In1(item1[name], item2[name]);
        }

        return allEqual;
    }

    return false;
}

var where =  function(array, checkObj) {
    var results = [];

    array.forEach(function(obj) {
        // No external libraries so no equals function
        for (var name in checkObj) {
            if (equalOr2In1(obj[name], checkObj[name])) {
                results.push(obj);
            }
        }
    });

    return results;
};

// Various tests of it

console.log(where(vehicles, {type: 'other'}));
// []
console.log(where(vehicles, {type: 'car'}));
// [{name: 'enzo', type: 'car', ...}, {name: 'mx-5', type: 'car', ...}]
console.log(where(vehicles, {parts: ['engine', '2wheels']}));
// [{name: 'ninja', type: 'motorcycle', ...}];
console.log(where(vehicles, {parts: ['engine']}));
// [<all of the results>];
vehicles[2].type = {
    property: 'value1'
}
console.log(where(vehicles, {type: {
    property: 'value1'
}}));
// [{ name: 'enzo', ...}];


