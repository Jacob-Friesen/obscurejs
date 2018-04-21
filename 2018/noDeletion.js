const object1 = {
  property1: 'value1'
};
console.log(delete object1);
// false
console.log(object1);
// { property1: 'value1' }
console.log(delete object1.property1);
// true
console.log(object1);
// {}

function useStrictContext() {
  'use strict';
  console.log(`\nDelete with 'use strict' context:`);

  const object2 = {
    property1: 'value1'
  };
  
  // This would cause a syntax error
  // console.log(delete object2);
  // false
  // console.log(object2);
  
  // { property1: 'value1' }
  console.log(delete object2.property1);
  // true
  console.log(object2);
  // {}
}
useStrictContext();

function useStrictContextPart2() {
  'use strict';
  console.log('\nDelete based on global:');

  let object2 = {
    property1: 'value1'
  };

  object2 = undefined;
  console.log(object2);
  // {}
}
useStrictContextPart2();

console.log('\nDelete top level const declaration (should not work):');

const object3 = {
  property1: 'value1'
};

// Node.js
if (typeof require !== 'undefined') {
  delete global.object3;
// Browser
} else {
  delete window.object3;
}
console.log(object3);
// { property1: 'value1' }
