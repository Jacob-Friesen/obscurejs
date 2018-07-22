'use strict';

console.log('No duplicate key warning:');

const hasDuplicates = {
  property1: 'value1',
  property2: 'value2',
  property1: 'value3'
};

console.log(hasDuplicates);
// { property1: 'value3', property2: 'value2' }

console.log('\nManually avoid duplicate keys:');

function constructObj(configArray) {
  const idMap = {};
  const newObj = {};

  configArray.forEach((ele, index) => {
    if (idMap[ele.key] !== undefined) {
      // In a real system you would error out somewhere here.
      console.error(`Duplicate key found: ${ele.key} at index ${index}`);
    }

    idMap[ele.key] = ele.key;
    newObj[ele.key] = ele.value;
  });

  return newObj;
}

const configArray = [
  { key: 'property1', value: 'value1' },
  { key: 'property2', value: 'value2' },
  { key: 'property1', value: 'value3' }
];

const obj = constructObj(configArray);
// Duplicate rule ids found: property1, property1

console.log(obj);
// { property1: 'value3', property2: 'value2' }

console.log('\nManually avoid duplicate keys defined in a loose way:');

function constructObj2(configArray) {
  const usedCharacters = {};
  const newObj = {};

  configArray.forEach((ele, index) => {
    if (usedCharacters[ele.key[0]] !== undefined) {
      // In a real system you would error out somewhere here.
      console.error(`Duplicate first character: ${ele.key[0]} at index ${index}`);
    }

    usedCharacters[ele.key[0]] = ele.key;
    newObj[ele.key] = ele.value;
  });

  return newObj;
}

const configArray2 = [
  { key: 'A1', value: 'value1' },
  { key: 'B2', value: 'value2' },
  { key: 'A2', value: 'value3' },
  { key: 'C4', value: 'value4' },
];

const obj2 = constructObj2(configArray2);
// Duplicate first character: A at index 2

console.log(obj2);
// { A1: 'value1', B2: 'value2', A2: 'value3', C4: 'value4' }
