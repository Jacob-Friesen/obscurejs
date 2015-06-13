#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Helper functions

var hasEngine = function(parts) {
    return parts[0];
};

var hasWheels = function(parts) {
    return parts[1];
};

// Basic strategy
console.log('Basic strategy:');

var vehicles = [
  {name: 'mx-5', type: 'car', parts: [true, true]},
  {name: 'ninja', type: 'motorcyle', parts: [true, true]},
  {name: 'enzo', type: 'car', parts: [false, true]},
  {name: 'chair', type: 'chair', parts: [true, true]}
];

vehicles.forEach(function(vehicle) {
    if((vehicle.type === 'car' || vehicle.type === 'motorcyle') &&
       (hasEngine(vehicle.parts) && hasWheels(vehicle.parts))) {
        console.log('The', vehicle.name, 'can be driven.');
    } else {
        console.log('The', vehicle.name, 'cannot be driven.');
    }
});
// The mx-5 can be driven.
// The ninja can be driven.
// The enzo cannot be driven.
// The chair cannot be driven.

// multiIf implementation

var multiIf = function(orig) {
    var self = {};
    isTrue = true;

    self.search = function(inArray) {
        var found = 0;
        inArray.forEach(function(arg) {
            if((typeof arg === 'function' && arg(orig)) ||
               (arg === orig)) {
                found += 1;
            }
        });

        return found;
    };

    self.using = function(newOrig) {
        orig = newOrig;
        return self;
    };

    self.one = function(inArray) {
        isTrue = isTrue && self.search(inArray) > 0;
        return self;
    };

    self.all = function(inArray) {
        isTrue = isTrue && self.search(inArray) === inArray.length;
        return self;
    };

    self.then = function(callback, invert) {
        if (isTrue === !invert) {
            callback.call(this);
        }
        return self;
    };

    self._else = function(callback) {
        return self.then(callback, true)
    };

    return self;
};

// With the _if
console.log('With multiIf:');

vehicles.forEach(function(vehicle) {
    multiIf(vehicle.type).one(['car', 'motorcyle'])
                         .using(vehicle.parts)
                         .all([hasEngine, hasWheels])
                         .then(function() {
        console.log('The', vehicle.name, 'can be driven.');
    })._else(function() {
        console.log('The', vehicle.name, 'cannot be driven.');
    });
});
// The mx-5 can be driven.
// The ninja can be driven.
// The enzo cannot be driven.
// The chair cannot be driven.
