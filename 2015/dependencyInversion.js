#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Without dependency inversion

var getCells = function(width) {
    return width * width;
};

var makeCellSentence = function(name, width) {
    return 'A ' + name + ' has ' + getCells(width) + ' cells';
};

console.log(makeCellSentence('2D Matrix', 5));
// A 2D Matrix has 25 cells

// Using getCells for dependency inversion

var makeCellSentence = function(name, getCells) {
    return 'A ' + name + ' has ' + getCells() + ' cells';
};

console.log(makeCellSentence('2D Matrix', function() {
    return getCells(5);
}));
// A 2D Matrix has 25 cells

// Now what if getCells name gets changed (this is a close aproximation of that)

var getCells2 = getCells;
var getCells = undefined;

console.log(makeCellSentence('3D Matrix', function() {
    return getCells2(5);
}));
// A 3D Matrix has 25 cells
