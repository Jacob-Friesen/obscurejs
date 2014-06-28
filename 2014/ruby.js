#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
// This is the closest aproximation for fibonacci.rb

puts = console.log;

// Make def define the specified named object. Also, give that function an implicit return.
var def = function(name, func) {
    // Making an assumption that the last line only has one statement and that a bracket has it's
    // own line
    var lines = (func + '').split('\n'),
        variables = lines[0].split('(')[1].split(')')[0],
        lastStatement = (func + '').split('\n').slice(-2)[0],
        newFunctionString = (func + '').replace(lastStatement, 'return ' + lastStatement);

    // The new statement will self execute, sending the variables to the current function
    var functionString = 'return ('+ newFunctionString +')('+variables+')';
    var newFunction = new Function([variables.split(',')], functionString);

    // Make sure it works in Node.js and browsers
    if (typeof window !== 'undefined'){
        window[name] = newFunction; 
    } else {
        global[name] = newFunction;
    }
};

def('fib', function(n) {
    if (n < 2) return n
    fib(n - 1) + fib(n - 2)
})

puts(fib(0))// 0
puts(fib(1))// 1
puts(fib(17))// 1597
