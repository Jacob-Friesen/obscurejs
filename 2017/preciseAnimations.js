#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.info('Precise JS animations');
console.info('View the running code at: https://jsfiddle.net/jacobfriesen/s5as04yq/7/');

// The below is just for backup purposes
// 
// JS:
// 'use strict';
//
// const unOptimizedItems = document.querySelectorAll('#unoptimized bar');
// const optimizedItems = document.querySelectorAll('#optimized bar');
//
// function unoptimizedAnimation(index) {
//   index = index % (unOptimizedItems.length + 1);
//   unOptimizedItems.forEach(function(item) {
//     item.className = '';
//   });
//   if (index > 0) {
//     unOptimizedItems[index - 1].className = 'hightlighted';
//   }
//   
//   // const start = new Date().getTime();
//   setTimeout(function() {
//     // console.info('end', new Date().getTime() - start);
//     unoptimizedAnimation(index + 1)
//   }, 30);
// }
// unoptimizedAnimation(0);
//
// // Simulate some processing
// setInterval(function() {
//   const start = new Date().getTime();
//   // This should cause about 30ms of delay.
//   // Adjust to see the results based your computers performance
//   for (let i = 0; i < 50000000; i += 1);
// }, 70);
//
// const interval = 30;// ms
// let drift = 0;
// let start = new Date().getTime();
// function optimizedAnimation(index) {
//   index = index % (optimizedItems.length + 1);
//   optimizedItems.forEach(function(item) {
//     item.className = '';
//   });
//   if (index > 0) {
//     optimizedItems[index - 1].className = 'hightlighted';
//   }
//
//   drift = new Date().getTime() - start;
//   setTimeout(function() {
//     start = new Date().getTime();
//     optimizedAnimation(index + 1)
//   }, Math.max(0, interval - drift));
// }
// optimizedAnimation(0);
// 
// HTML:
// <b>Unoptimized Animation:</b>
// <div id="unoptimized">
//   <bar></bar><bar></bar><bar></bar><bar></bar><bar></bar>
//   <bar></bar><bar></bar><bar></bar><bar></bar><bar></bar>
//   <bar></bar><bar></bar><bar></bar><bar></bar><bar></bar>
//   <bar></bar><bar></bar><bar></bar><bar></bar><bar></bar>
//   <bar></bar><bar></bar><bar></bar><bar></bar><bar></bar>
// </div>
// <br/>
//
// <b>Optimized Animation:</b>
// <div id="optimized">
//   <bar></bar><bar></bar><bar></bar><bar></bar><bar></bar>
//   <bar></bar><bar></bar><bar></bar><bar></bar><bar></bar>
//   <bar></bar><bar></bar><bar></bar><bar></bar><bar></bar>
//   <bar></bar><bar></bar><bar></bar><bar></bar><bar></bar>
//   <bar></bar><bar></bar><bar></bar><bar></bar><bar></bar>
// </div>
// 
// CSS:
// body {
//   font-family: helvetica, arial;
// }
//
// bar {
//   display: inline-block;
//   background-color: black;
//   width: 5px;
//   height: 10px;
//  /* Remove all whitespace gaps */
//  float: left;
// }
//
// .hightlighted {
//   background-color: green;
// }
//
// #unoptimized {
//   margin-bottom: 20px;
// }
