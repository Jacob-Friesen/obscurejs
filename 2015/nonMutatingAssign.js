#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The assign function that mimics Lodash's one

var assign = function(/* objects */) {
    var objects = Array.prototype.slice.call(arguments);

    objects.forEach(function(obj) {
        for (var property in obj) {
            objects[0][property] = obj[property];
        }
    });

    return objects[0];
};

// Doing in place modifications

var personA = {
    name: 'Tom',
    age: 25
}

var personAWithTravel = assign(personA, {
    vehicle: 'bicycle',
    distance: 20000
});

var personAWithDisanceOnly = assign(personA, {
    distance: 20000
});

console.log(personAWithTravel);
// { name: 'Tom', age: 25, vehicle: 'bicycle', distance: 20000 }
console.log(personAWithDisanceOnly);
// { name: 'Tom', age: 25, vehicle: 'bicycle', distance: 20000 }

// _.assign({}, x, y);

// Avoiding the soft copying by passing in an empty base object and use the customizer 3rd argument
console.log('Avoiding soft copying')

var personA = {
    name: 'Tom',
    age: 25
}

var personAWithTravel = assign({}, personA, {
    vehicle: 'bicycle',
    distance: 20000
});

var personAWithDisanceOnly = assign({}, personA, {
    distance: 20000
});

console.log(personAWithTravel);
// { name: 'Tom', age: 25, vehicle: 'bicycle', distance: 20000 }
console.log(personAWithDisanceOnly);
// { name: 'Tom', age: 25, vehicle: 'bicycle', distance: 20000 }
