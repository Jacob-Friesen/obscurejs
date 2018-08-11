'use strict';

const _ = require('lodash');

const obj = {
  a1: [
    { 
      b: { 'c': 3 }
    }
  ] 
};

console.log('Set Object (Using Lodash):');

_.set(obj, 'a1[0].b.c', 4);
console.log(obj.a1[0].b.c);

_.set(obj, 'a2[0].b.c', 5);
console.log(obj.a2[0].b.c);

console.log(JSON.stringify(obj, null, 2));
// {
//   "a1": [
//     {
//       "b": {
//         "c": 4
//       }
//     }
//   ],
//   "a2": [
//     {
//       "b": {
//         "c": 5
//       }
//     }
//   ]
// }

console.log('\nSet Object (No Libraries):');

// Slightly modified version of the Lodash version.
// See: https://github.com/lodash/lodash/blob/4.17.10/lodash.js#L6735
function stringToPath(string) {
  const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  const result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  // Just push each match instead of processing further. [VALUE] will be used to denote arrays.
  string.replace(rePropName, (match) => {
    result.push(match);
  });
  return result;
}

// To provide a simple example, unlike Lodash this assumes no properties with
// have '[' in their names.
function set(obj, path, value) {
  const pathArray = stringToPath(path);

  let currentObj = obj,
    parentObj = null,
    parentPart = null;
  pathArray.forEach((part, index) => {
    if (typeof currentObj[part] === 'undefined') {
      // Set the parent object to give an array as the current object.
      if (part[0] === '[') {
        part = part.substring(1, part.length - 1);
        parentObj[parentPart] = [{}];
        currentObj = parentObj[parentPart];
      } else {
        currentObj[part] = {};
      }
    }

    // Set the last property
    if (index === pathArray.length - 1) {
      currentObj[part] = value;
    }

    parentObj = currentObj;
    parentPart = part;
    currentObj = currentObj[part];
  });

  return obj;
}

const obj2 = {
  a1: [
    { 
      b: { 'c': 3 }
    }
  ] 
};

set(obj2, 'a1[0].b.c', 4);
console.log(obj2.a1[0].b.c);

set(obj2, 'a2[0].b.c', 5);
console.log(obj2.a2[0].b.c);

console.log(JSON.stringify(obj2, null, 2));
// {
//   "a1": [
//     {
//       "b": {
//         "c": 4
//       }
//     }
//   ],
//   "a2": [
//     {
//       "b": {
//         "c": 5
//       }
//     }
//   ]
// }

console.log('\nSet Object - Extra Tests:');

const obj3 = {
  a1: [
    { 
      b: { 'c': 3 }
    }
  ] 
};

set(obj3, 'a2.b.c', 5);
console.log(obj3.a2.b.c);

set(obj3, 'a3[0]', [1,2,3,4,5]);
console.log(obj3.a3);

set(obj3, 'a4', { an: 'object' });
console.log(obj3.a4);

console.log(JSON.stringify(obj3, null, 2));
// {
//   "a1": [
//     {
//       "b": {
//         "c": 3
//       }
//     }
//   ],
//   "a2": {
//     "b": {
//       "c": 5
//     }
//   },
//   "a3": [
//     [
//       1,
//       2,
//       3,
//       4,
//       5
//     ]
//   ],
//   "a4": {
//     "an": "object"
//   }
// }
