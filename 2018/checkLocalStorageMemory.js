'use strict';

if (typeof localStorage === 'undefined') {
  console.log('There is no localStorage object.');
  console.log('This script should be run in browser of some kind.');
  process.exit(0);
}

// Modified from: https://stackoverflow.com/a/15720835
function displayLocalStorageMemory() {
  let total = 0;
  for (let location in localStorage) { 
    // Count the value as well as the key length. x2 because JavaScript characters
    // are UTF-16 meaning they occupy 8 bytes.
    let lineLength = ((localStorage[location].length + location.length) * 2);
    // Do not count properties that do not give strings like setItem()
    if (isNaN(lineLength)) {
      lineLength = 0;
    }
    total += lineLength;

    // Keys can have huge lengths, so limit them for display purposes
    console.log(`${location.substr(0,50)} = ${(lineLength / 1024).toFixed(2)} KB`);
  };

  console.log("Total = " + (total / 1024).toFixed(2) + " KB");
}
displayLocalStorageMemory();
