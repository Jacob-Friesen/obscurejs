#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.info('This is expected to run with a set of error messages due to frozen modifications');

function makeImmutable(value) {
  // The extra instance of handles cases like new Number()
  if (typeof value === 'object'
      && !(value instanceof Number)
      && !(value instanceof String)) {
    for (let key in value) {
      value[key] = makeImmutable(value[key])
    }

    return Object.freeze(value);
  } else {
    return value;
  }
};

function printError(callback) {
  // Not a good practice unless you are debugging or showing an example
  try {
    callback();
  } catch(e) {
    console.info(e);
  }
}

const obj = {
  property1: 'value1',
  array1: [
    new String('element1'),
    'element2',
    {
      property2: {
        property3: [1, 2] 
      }
    }
  ]
};

const objImmutable = makeImmutable(obj);
// Each of the below will through an error in most environments (Some
// environments will just not modify the value)
printError(() => objImmutable.property1 = 'EDITED');
printError(() => objImmutable.property1[0] = 'EDITED');
printError(() => objImmutable.array1[0] = 'EDITED');
printError(() => objImmutable.array1[2].property2 = 'EDITED');
printError(() => objImmutable.array1[2].property2.property3 = 'EDITED');
printError(() => objImmutable.array1[2].property2.property3[1] = 'EDITED');
printError(() => objImmutable.array1[2].property2.property3[30] = 'EDITED');

// Stringify gaurantees the full depth of the object will be printed
console.log(JSON.stringify(objImmutable, null, 2));
// {
//   "property1": "value1",
//   "array1": [
//     "element1",
//     "element2",
//     {
//       "property2": {
//         "property3": [
//           1,
//           2
//         ]
//       }
//     }
//   ]
// }

// Ensure that make immutable works with non-objects and edge cases
makeImmutable();
makeImmutable(null);
makeImmutable('test');
makeImmutable(new String('test'));
makeImmutable(123);
makeImmutable(new Number(123));
makeImmutable(new Date());
makeImmutable({});
