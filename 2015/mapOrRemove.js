#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The data

var vehicles = [
  {name: 'mx-5', type: 'car', hp: '152'},
  {name: 'ninja', type: 'motorcyle', hp: '300'},
  {name: 'enzo', type: 'car', hp: '660'}
];

// The default strategy

var makeNames = function(vehicles) {
    var filtered = [];
    vehicles.forEach(function(vehicle) {
        if (vehicle.type === 'car') {
            filtered.push(vehicle.name + ' (' + vehicle.hp + ')');
        }
    });

    return filtered;
};

console.log(makeNames(vehicles));
// [ 'mx-5 (car)', 'enzo (car)' ]

// Using a map and remove function to eliminate array management

var mapOrRemove = function(arr, callback) {
    var toReturn = [];

    arr.forEach(function(element) {
        var result = callback(element);
        if (result !== undefined) {
            toReturn.push(result);
        }
    });

    return toReturn;
};

var makeNames = function(vehicles) {
    return mapOrRemove(vehicles, function(vehicle) {
        if (vehicle.type === 'car') {
            return vehicle.name + ' (' + vehicle.hp + ')';
        }
    });
};

console.log(makeNames(vehicles));
// [ 'mx-5 (car)', 'enzo (car)' ]
