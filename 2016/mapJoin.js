#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Element CSS Class Example:');

function extendColumnClasses(classes) {
    return classes.split(' ').map(function(cssClass) {
        return cssClass.indexOf('col-') > -1 ? cssClass + 'x' : cssClass;
    }).join(' ');
}

var htmlEl = {
    className: 'visible col-sm-4 pull-right'
};

htmlEl.className = extendColumnClasses(htmlEl.className);
console.log(htmlEl.className);
// visible col-sm-4x pull-right

console.log('\nFile Line Modify Example:');

function formatLines(file) {
    return file.split('\n').map(function(line) {
        return line[0].toUpperCase() + line.substring(1) + '.';
    }).join('\n')
}

// Using a template literal to simulate the line endings in a normal file easily
var file = 
`line 1
Line 2
line 3`;

console.log(formatLines(file));
// Line 1.
// Line 2.
// Line 3.

