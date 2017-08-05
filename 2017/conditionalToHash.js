#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

// Represents a GUI option with 4 selection
function toggleMode(oldMode) {
  if(oldMode === 'bar-chart') {
    return 'total-view';
  } else if(oldMode === 'total-view') {
    return 'percentage-view';
  } else if(oldMode === 'percentage-view') {
    return 'grid-view';
  } else if(oldMode === 'grid-view') {
    return 'bar-chart';
  }
}

console.log('Toggle mode with conditionals:');

console.info(toggleMode('bar-chart'));
// total-view
console.info(toggleMode('total-view'));
// percentage-view
console.info(toggleMode('percentage-view'));
// grid-view
console.info(toggleMode('grid-view'));
// bar-chart

console.log('\nToggle mode with a hash:');

function toggleMode2(oldMode) {
  const modeMap = {
    'bar-chart': 'total-view',
    'total-view': 'percentage-view',
    'percentage-view': 'grid-view',
    'grid-view': 'bar-chart',
  }
  return modeMap[oldMode];
}

console.info(toggleMode2('bar-chart'));
// total-view
console.info(toggleMode2('total-view'));
// percentage-view
console.info(toggleMode2('percentage-view'));
// grid-view
console.info(toggleMode2('grid-view'));
// bar-chart

console.log('\nToggle mode automated with a hash:');

function createToggle(allModes) {
  const modeMap = {};
  allModes.forEach(function(mode, index) {
    const next = (index + 1) % allModes.length;
    modeMap[mode] = allModes[next];
  });

  return function(oldMode) {
    return modeMap[oldMode];
  };
}

const allModes = ['bar-chart', 'total-view', 'percentage-view', 'grid-view'];
const toggleMode3 = createToggle(allModes);

console.info(toggleMode3('bar-chart'));
// total-view
console.info(toggleMode3('total-view'));
// percentage-view
console.info(toggleMode3('percentage-view'));
// grid-view
console.info(toggleMode3('grid-view'));
// bar-chart
