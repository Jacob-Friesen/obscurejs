#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Var example
console.log('Var example:');

for (var i = 1; i <= 5; i += 1) {
    var j = i;
    setTimeout(function() {
        console.log(j);
    }, 1);
}// 5\n5\n5\n5\n5

// Let example
setTimeout(function() {
    console.log('\nLet example:');

    for (var i = 1; i <= 5; i += 1) {
        let j = i;
        setTimeout(function() {
            console.log(j);
        }, 1);
    }// 1\n2\n3\n4\n5

    setTimeout(iife, 10);
}, 10);

var iife = function() {
    console.log('\niife example:');

    for (var i = 1; i <= 5; i += 1) {
        (function() {
            var j = i;
            setTimeout(function() {
                console.log(j);
            }, 1);
        })();
    }// 1\n2\n3\n4\n5
};