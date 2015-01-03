#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The basic zip

var names = ['mx-5', 'ninja', 'enzo'],
    types = ['car', 'motorcyle', 'car'];

var zip = function(/*toZip*/) {
    var toZip = Array.prototype.slice.call(arguments),
        zipped = [];

    // For simplicity, assuming all array are the same length
    for (var i = 0; i < toZip[0].length; i += 1) {
        zipped.push([]);
        toZip.forEach(function(array) {
            zipped[i].push(array[i]);
        });
    }

    return zipped;
};

console.log(zip(names, types));// ['mx-5', 'car'], ['ninja', 'motorcycle'], ...

// An object based zip

var zipObject = function() {
    var zipped = zip.apply(null, arguments),
        objZipped = {};

    zipped.forEach(function(array) {
        objZipped[array[0]] = array[1];
    });

    return objZipped;
};

console.log(zipObject(names, types));// {'mx-5': 'car', 'ninja': 'motorcycle', ...}
