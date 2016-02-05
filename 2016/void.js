#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Replacing local undefined
console.log('Undefined can be replaced in the local scope:');
var testLocalRedefine = function() {
    var undefined = 'not undefined';
    console.log(undefined);// not undefined
    console.log(typeof undefined === 'undefined');// false
}
testLocalRedefine();

// Check if a variable is undefined without using the undefined keyword
console.log('\nChecking that a variable is undefined when undefined was redefined:');
var testNoKeywordUndefined = function() {
    var a;
    
    console.log(a === undefined);// true
    var undefined = 'not undefined';
    console.log(a === undefined);// false
    console.log(typeof a === 'undefined');// true
}
testNoKeywordUndefined();

// Check if a variable is undefined without using the undefined keyword
console.log('\nExplicitly setting to undefined when the keyword was redefined:');
var testSetToUndefined = function() {
    var a = 'test';
    var undefined = 'not undefined';

    a = undefined;
    console.log(a);// not undefined
    a = void 0;
    console.log(a);// undefined
}
testSetToUndefined();