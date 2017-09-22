// To be used in conjunction with circularReferenceA.js

const circularReferenceA = require('./circularReferenceA');

console.log('circularReferenceA require:', circularReferenceA);
// circularReferenceA require: {}

module.exports = {
  printProperty1: () => {
    console.log(circularReferenceA.property1);
  },
  printProperty2: (property1) => {
    console.log(property1);
  }
};
