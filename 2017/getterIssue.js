#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Getter Issue');

const obj = {
  property1: [{ id: 'object-1' }],
};

Object.defineProperties(obj, {
  property2: { get: getProperty2 },
});

function getProperty2() {
  return undefined;
};

obj.property1 = [];
obj.property2 = [];
// If in Node.js:
// TypeError: Cannot set property property2 of #<Object> which has only a getter

obj.property1.push(1);
obj.property2.push(1);
// In in Chrome:
// Uncaught TypeError: Cannot read property 'push' of undefined
