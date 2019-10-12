'use strict';

console.log('Watching property changes:');

function debugProperty(obj, propertyName) {
  let internalValue = obj[propertyName];

  Object.defineProperty(obj, propertyName, {
    set: (newValue) => {
      console.log('Setting from:', internalValue, 'to', newValue);
      internalValue = newValue;
    },
    get: () => {
      console.log('Getting value:', internalValue);
      return internalValue;
    },
  });
}

const myObj = {
  property1: 'value1',
  property2: 'value2',
  property3: 'value3',
};

debugProperty(myObj, 'property2');

const a = myObj.property2;
// Getting value: value2

setInterval(() => {
  const random = Math.random();
  myObj.property1 = random;
  myObj.property2 = random * 10;
  myObj.property3 = random * 100;
}, 300);
// Continually prints (numbers will vary):
// Setting from: 6.5752180514919445 to 7.637120569728964
