#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

Function.prototype.overload = function overload(){
    // Like last time a naive approach to get the function name for example purposes
    var funcString = this.toString();
    var funcName = funcString.split('function')[1].split('(')[0].replace(' ', '');

    // Same storage approach as last time but I will use the overload function to
    // store values instead of an external variable. Arguably this is cleaner. 
    // Remember 'this' is the original callback and this.length gives the length of
    // arguments of a function.
    overload[funcName] = overload[funcName] || [];
    overload[funcName][this.length] = this;

    // Run the appropriate argument length constructor
    return function(){
        if (overload[funcName][arguments.length])
            return overload[funcName][arguments.length].apply(this, arguments);
        throw('Error: There is no defined version of function ' + funcName + ' for '
              + arguments.length + ' arguments.');
    };
}

var sum = (function sum(a){
    return a;
}).overload();

var sum = (function sum(a, b){
    return a + b;
}).overload();

console.log(sum(1));// 1
console.log(sum(1, 2));// 3
