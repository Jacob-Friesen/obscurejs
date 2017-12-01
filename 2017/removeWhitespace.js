#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Original text:');
console.log(`<div class='score-section' id='score'>
  <p id='graphics-score'>8</p>
  -
  <p id='sound-score'>7</p>
  -
  <p id='immersion-score'>9</p>
  -
  <p id='total-score'>9</p>
</div>`);

console.log('\nAs a string:');
console.log('With: document.querySelector("#score").innerText');
const text = '8\n\n-\n7\n\n-\n9\n\n-\n9\n\n';
console.log(text);
// Unformatted:
// 8
//
// -
// 7
//
// -
// 9
//
// -
// 9
//

console.log(text.replace(/\s+/g, ' '));
// 8 - 7 - 9 - 9
