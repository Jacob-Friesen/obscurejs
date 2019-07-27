'use strict';

const classTypes = ['A', 'B', 'C'];
for (let type of classTypes) {
  global[`class${type}`] = class {
    [`describe${type}`]() { 
      return `A class of type ${type}`;
    };
  }
}

const objA = new classA();
console.log(objA.describeA());
// A class of type A

const objB = new classB();
console.log(objB.describeB());
// A class of type B

const objC = new classC();
console.log(objC.describeC());
// A class of type C
