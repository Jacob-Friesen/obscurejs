#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var date1 = '2014-07-11',
    date2 = '1990-01-19';

console.log(new Date(date1) > new Date(date2));// true
console.log(new Date(date1) < new Date(date2));// false

// For equality the dates will need to be converted to numbers before comparison

console.log(new Date(date1) - new Date(date1) === 0);// true
console.log(new Date(date1) - new Date(date2) === 0);// false