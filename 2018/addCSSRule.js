'use strict';

// The HTML, CSS and JS is all packaged in a JSFiddle which can be seen at:
// https://jsfiddle.net/jacobfriesen/j2Lktazq/

function createStyleSheet() {
  const styleEle = document.createElement("style");

  // WebKit hack :(
  styleEle.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.head.appendChild(styleEle);

  return styleEle.sheet;
}

function applyBoxColors(newSheet) {
  const gradient = generateGradient('#000000', '#ffffff', 5);
  gradient.forEach((part, index) => {
    newSheet.insertRule(`
      .box:nth-child(${index + 1}) { 
        background-color: ${part};
        color: ${gradient[gradient.length - 1 - index]}
      }
    `, index);
  });
}

// Slightly modified version from:
// https://stackoverflow.com/a/12934900
function generateGradient(startColor, endColor, steps) {
  const start = {
         'Hex'   : startColor,
         'R'     : parseInt(startColor.slice(1,3), 16),
         'G'     : parseInt(startColor.slice(3,5), 16),
         'B'     : parseInt(startColor.slice(5,7), 16)
  }
  const end = {
         'Hex'   : endColor,
         'R'     : parseInt(endColor.slice(1,3), 16),
         'G'     : parseInt(endColor.slice(3,5), 16),
         'B'     : parseInt(endColor.slice(5,7), 16)
  }
  const diffR = end['R'] - start['R'];
  const diffG = end['G'] - start['G'];
  const diffB = end['B'] - start['B'];

  const stepsHex  = [];
  const stepsR    = [];
  const stepsG    = [];
  const stepsB    = [];

  for (let i = 0; i <= steps; i++) {
    stepsR[i] = start['R'] + ((diffR / steps) * i);
    stepsG[i] = start['G'] + ((diffG / steps) * i);
    stepsB[i] = start['B'] + ((diffB / steps) * i);
    stepsHex[i] = '#' + Math.round(stepsR[i]).toString(16) + ''
                      + Math.round(stepsG[i]).toString(16) + ''
                      + Math.round(stepsB[i]).toString(16);
  }
  return stepsHex;
}

if (typeof window === 'undefined') {
  console.log('This can only be run in browsers.');
  console.log('JS Fiddle version: https://jsfiddle.net/jacobfriesen/j2Lktazq/');
} else {
  // An existing style sheet could just be added too, but it is much easier
  // to track JS changes if made in an independant sheet.
  const newSheet = createStyleSheet();

  applyBoxColors(newSheet);

  console.info(newSheet);
}
