'use strict';

console.log('Get First key:');

function getFirstKey(obj) {
  let key;
  for (key in obj) {
    // Add if (obj.hasOwnProperty(key)) {} if inherited properties should not
    // be counted.
    break;
  }
  return key;
}

const obj = {
  property1: 'value1',
  property2: 'value2',
};

console.log(getFirstKey(obj));
