#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('This example is demonstrated in this JSFiddle: https://jsfiddle.net/jacobfriesen/cxgv37x4/1/');

// function clean(text) {
//   const step1 = String(text).replace(/\u2028/g, '');
//   return String(text).replace(/\u2029/g, '');
// }

// const text1 = document.querySelector('#paragraph-separator').innerHTML
// console.log(JSON.parse(clean(text1)));

// const text2 = document.querySelector('#paragraph-separator').innerHTML
// console.log(JSON.parse(clean(text2)));
