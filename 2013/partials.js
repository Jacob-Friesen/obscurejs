#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var greet = function(first, last) {
    console.log('hello', first, last);
}

// Know that first will always be the same, so

var greetWithFirst = function(last) {
    greet('The grand', last);
}
greetWithFirst('Chocolate');// hello the grand Chocolate
greetWithFirst('Cheese');// hello the grand Cheese

// Generalized for an arbitrary number of arguments

var partial = function(func){
    // Since the special arguments variable is not an array it will need 
    // to be transformed into one by an operation it supports
    var args = Array.prototype.slice.call(arguments, 1)

    return function() {
        func.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    }
}

var greetWithFirst = partial(greet, 'The Grand');

greetWithFirst('Chocolate');// hello the grand Chocolate
greetWithFirst('Cheese');// hello the grand Cheese

// Referencing past state

var fullGreeting;
(function(){
    var first = 'The Grand'

    fullGreeting = partial(greet, first);
})();

fullGreeting('Cheese');// hello the grand Cheese

// Also, good for repeating calls

var yell = function(word) {
    console.log(word + '!');
}
var huzzah = partial(yell, 'huzzah');

huzzah(), huzzah(), huzzah();//huzzah!\nhuzzah!\nhuzzah!