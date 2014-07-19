#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var range = function(expression) {
    var result = [],
        parts = [],
        inclusive = expression.indexOf('...') > -1;

    if (inclusive){
        parts = expression.split('...');
    } else {
        parts = expression.split('..');
    }

    // + converts variables to Number
    for (var i = +parts[0]; i < +parts[1]; i += 1){
        result.push(i);
    }

    if (!inclusive) {
        result.push(+parts[1]);
    }

    return result;
};

console.log(range('1..5'));// [1, 2, 3, 4]
console.log(range('1...5'));// [1, 2, 3, 4, 5]

// Better for loop like syntax (But much more inefficient)

(range('10..15')).forEach(function(index) {
    console.log(index);
});// 10\n11\n12\n13\n14\n15
