#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Setting temp variables

var a = 1, b = 2, temp;

a = (temp = b, b = a, temp);

console.log(a, b);//2 1

// As opposed to

var a = 1, b = 2, temp;

temp = b;
b = a;
a = temp;

console.log(a, b);//2 1