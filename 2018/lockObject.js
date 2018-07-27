'use strict';

console.log('Sealed Object:');

const obj = {
  property1: 'value1',
  property2: 'value2',
  property3: 'value3'
};

const sealedObj = Object.seal(obj);

// Errors are only ignored for demonstration purposes.
try {
  delete sealedObj.property1;
} catch (e) {
  console.log(e);
}
// TypeError: Cannot delete property 'property1' of #<Object> ...

try {
  sealedObj.property4 = 'value4';
} catch (e) {
  console.log(e);
}
// TypeError: Cannot add property property4, object is not extensible ...

sealedObj.property3 = 'value3 EDITED';
console.log(sealedObj);
// { property1: 'value2',
//   property2: 'value2',
//   property3: 'value3 EDITED' }

console.log('\nFrozen Object:');

const frozenObj = Object.freeze(obj);

try {
  frozenObj.property1 = 'value2';
} catch (e) {
  console.log(e);
}
// TypeError: Cannot assign to read only property 'property1' of object '#<Object>' ...
