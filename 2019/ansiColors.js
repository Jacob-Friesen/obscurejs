'use strict';

console.log('\u001b[31mtest\u001b[0m');

console.log();
const blue = '\u001b[34m';
const green = '\u001b[32m';
const red = '\u001b[31m';
const reset = '\u001b[0m';

console.log(`My${blue} multi${red}-colored${green} message${reset}`);
// My multi-colored message (multiple colors)

console.log('\nLoading message below:');

function showLoading(percent) {
  if (percent === 0) {
    console.log();
  }

  if (percent <= 100) {
    const upOneLine = '\u001b[1A';
    console.log(`${upOneLine}${percent}%`);
    setTimeout(() => showLoading(percent + 1), 100);
  } else {
    console.log('Done.');
  }
}
showLoading(0);
