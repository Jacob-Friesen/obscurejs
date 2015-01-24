#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The array to use

var mx5parts = ['engine', '4wheels'],
    ninjaParts = ['engine', '2wheels'],
    enzoParts = ['engine', '4wheels'];

// The base algorithm

var correctCounts = function(need, arrays) {
    var used = {},
        correct = [];

    // Find the total counts of numbers
    arrays.forEach(function(arr) {
        arr.forEach(function(element) {
            if (used[element] === undefined){
                used[element] = 0;
            }
            used[element] += 1;
        });
    });

    // Extract the ones that are the number we need
    var correct = [];
    for(var name in used) {
        if (used[name] === need) {
            correct.push(name);
        }
    }

    return correct;
};

// Finding similar parts

var intersection = function(arrays) {
    return correctCounts(arrays.length, arrays);
};

console.log(intersection([mx5parts, ninjaParts, enzoParts]));
// ['engine']

// Finding unique parts

var union = function(arrays) {
    return correctCounts(1, arrays);
};

console.log(union([mx5parts, ninjaParts, enzoParts]));
// ['2wheels']
