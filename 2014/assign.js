#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The default way

var personA = {
    name: 'Tom',
    age: 25
}

var personAWithTravel = {};
personAWithTravel.name = 'Tom';
personAWithTravel.age = 25;
personAWithTravel.vehicle = 'bicycle';
personAWithTravel.distance = 20000;

console.log(personAWithTravel);// { name: 'Tom',...}

// The assign function

var assign = function(/* objects */) {
    var combined = {},
        objects = Array.prototype.slice.call(arguments);

    objects.forEach(function(obj) {
        for (var property in obj) {
            combined[property] = obj[property];
        }
    });

    return combined;
};

// The new style

var personA = {
    name: 'Tom',
    age: 25
}

var personAWithTravel2 = assign(personA, {
    vehicle: 'bicycle',
    distance: 20000
});

console.log(personAWithTravel2);// { name: 'Tom',...}
