// Browser only
'use strict';

// View the JSFiddle version here: https://jsfiddle.net/jacobfriesen/0n0qov2r/1/
// 
// HTML:
// <div class='main-box'>
//   <div class='sub-box'>
//   </div>
//   <div id="to-find" class='sub-box color2'>
//   </div>
// </div>
// 
// CSS:
// body {
//   margin-top: 8px;
//   margin-left: 8px;
// }

// .main-box {
//   background-color: lightBlue;
//   position: absolute;
//   left: 100px;
//   height: 300px;
//   width: 300px;
// }

// .sub-box {
//   background-color: lightGreen;
//   width: 100px;
//   height: 100px;
// }

// .color2 {
//   background-color: red;
// }

function getAbsolutePagePosition(ele) {
  var box = ele.getBoundingClientRect();
  
  // Math.round because it is actually possible to get fractional pixels.
  return {
    top: Math.round(box.top +  window.pageYOffset - document.body.clientTop),
    left: Math.round(box.left + window.pageXOffset - document.body.clientLeft)
  };
}

function getAbsolutePagePositionByOffset(ele) {
  var top = ele.offsetLeft,
      left = ele.offsetTop;
      
  while(ele.offsetParent) {
    ele = ele.offsetParent;
    top += ele.offsetLeft;
    left += ele.offsetTop;
  }
  
  return { top: top, left: left };
}

var ele = document.getElementById('to-find');

console.log('Basic offset find:');
console.log({ top: ele.offsetTop, left: ele.offsetLeft });
// {top: 100, left: 0}

console.log('\nOffset parent find:');
console.log(getAbsolutePagePositionByOffset(ele));
// {top: 100, left: 108}

console.log('\ngetBoundingClientRect find:');
console.log(getAbsolutePagePosition(ele));
// {top: 108, left: 100}
