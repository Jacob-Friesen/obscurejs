#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

if (typeof $ !== undefined) {
  console.log('This should only be run in a browser with jQuery.');
  return false;
}

// HTML for this
// <div id="home-logo"></div>

$('#home-logo').on('click', function(event) { 
  console.log(this);
  // <div id="home-logo">Login</div>
});

// Takes the scope of the parent
$('#home-logo').on('click', (event) => { 
  console.log(this);
  // Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
});

function handleClick(event) {
  console.log(this);
  // {}
}
// Accidentally bound somewhere
handleClickBound = handleClick.bind({});

$('#home-logo').on('click', handleClickBound);

$.fn.on2 = function(eventName, callback) {
  const element = this;
  element.on(eventName, function(event) { 
    callback(event, element[0]);
  });
};

$('#home-logo').on2('click', (event, element) => console.log(element));

console.log('\nDo a click on the element to test each outcome.');

