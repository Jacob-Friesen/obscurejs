#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Simple destructuring example:');

function sumAndLength(obj) {
  let sum = 0;
  for (let keyName in obj) {
    sum += obj[keyName];
  }

  return [sum, Object.keys(obj).length];
};

const obj = {
  property1: 150,
  property2: 200,
  property3: 175,
};

let [sum, length] = sumAndLength(obj);
console.log(sum, length);
// 525, 3

console.log('\nFull object destructuring example:');

function simulateRequest(callback) {
  setTimeout(function() {
    callback({
      statusCode: 200,
      body: {
        content: 'Request succeeded'
      }
    });
  }, 500);
};

simulateRequest(function(response) {
  const {
    statusCode: code,
    body: {
      content: bodyContent
    }
  } = response;

  console.info(code, bodyContent);
  // 200 'Request succeeded'
});
