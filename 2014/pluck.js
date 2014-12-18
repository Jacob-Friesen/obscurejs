#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Get the number of vehicle types without pluck and unique

var vehicles = [
  {name: 'mx-5', type: 'car', price: 20000},
  {name: 'ninja', type: 'motorcyle', price: 10000},
  {name: 'enzo', type: 'car', price: 1000000}
];

var types = {};
vehicles.forEach(function(vehicle) {
    types[vehicle.type] = true;
});
var typeNumber = Object.keys(types).length;

console.log(typeNumber);// 2

// The pluck and unique

var unique = function(arr) {
    var types = {};
    arr.forEach(function(element) {
        types[element] = true;
    });

    return Object.keys(types);
};

var pluck = function(arr, type) {
    var plucked = [];
    arr.forEach(function(element) {
        plucked.push(element[type]);
    });

    return plucked;
};

// Smaller implementation

var typeNumber = unique(pluck(vehicles, 'type')).length;
console.log(typeNumber);// 2
