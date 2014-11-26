#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The full function

var greet = function(first, last) {
    console.log('hello', first, last);
};

greet('Obscure', 'JS');// hello Obscure JS

// Manual currying for the above

var greetCurried = function(first) {
    return function(last) {
        console.log('hello', first, last);
    };
};

greetCurried('Obscure')('JS');// hello Obscure JS

// Using it to save a value

var greetWithFirst = greetCurried('Obscure');
greetWithFirst('World');// hello Obscure World

// Automatic currying for the first part

// Hide implementation details by providing an interface
// that calls the internal curry function
var curry = function(callback) {
    return curry2(callback, []);
};

var curry2 = function(callback, args) {
    // function.length gives the function arity
    if (args.length < callback.length) {
        return function(/*arguments*/) {
            var args2 = [].slice.call(arguments);

            // concat does affect the original array
            return curry2(callback, args.concat(args2));
        }
    } else {
        return callback.apply(this, args);
    }
}

var greetCurried2 = curry(greet);
greetCurried2('Obscure')('JS2');// hello Obscure JS2

var greetWithFirst2 = greetCurried2('Obscure');
greetWithFirst2('World2');// hello Obscure World2

// Test an example like the one provided in Lo-Dash

var curried = curry(function(a, b, c) {
  return a + b + c;
});

console.log(curried(2)(3)(5));// 10
console.log(curried(2, 3)(5));// 10
console.log(curried(2, 3, 5));// 10
