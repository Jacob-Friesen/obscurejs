#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Rest via Traceur: 
// (https://github.com/google/traceur-compiler/wiki/LanguageFeatures#rest-parameters)
// var push = function(array, ...items) {
//   items.forEach(function(item) {
//     array.push(item);
//   });
// }
// var res = [];
// push(res, 1, 2, 3);
// console.log(res);// [1, 2, 3]

// The implementation

var restize = function(callback) {
    return function() {
        var args = Array.prototype.slice.call(arguments);

        // Take all the specified arguments and send them
        // directly, the rest will go in the last argument.
        // Function.length = function arity.
        var number = (arguments.length - 1) - callback.length,
            toSend = args.slice(0, number)
                         .concat([args.slice(number)]);
        
        // Empty rest param, when there is not enough args.
        if (toSend.length === 1){
            toSend.push([]);
        }

        return callback.apply(null, toSend);
    };
};

var push = restize(function(array, _items) {
    _items.forEach(function(item) {
        array.push(item);
    });
});

var res = [];
push(res, 1, 2, 3);
console.log(res);// [1, 2, 3]

// This has the potential to screw up more, so some basic testing is needed
console.log('Extra checks...');

var res = [];
push(res, 1);
console.log(res);// [1]

var res = [1,2,3];
push(res);
console.log(res);// [1,2,3]

var res = [];
push(res);
console.log(res);// []

// should not error
push();

var sum = restize(function(_items) {
    var total = 0;
    _items[0].forEach(function(item) {
        total += item;
    });

    return total;
});

console.log(sum([]));// 0
console.log(sum([1,2,3]));// 6