#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var myNestedObject = {
  property1: {
    name: 'test1',
    values: [1 ,2 ,3, 4]
  },
  property2: {
    name: 'test1',
    values: [5, 6, 7, 8],
    propertyA: {
      values: [9, 10]
    }
  }
};

console.log(JSON.stringify(myNestedObject, null, 2));
// {
//   "property1": {
//     "name": "test1",
//     "values": [
//       1,
//       2,
//       3,
//       4
//     ]
//   },
//   "property2": {
//     "name": "test1",
//     "values": [
//       5,
//       6,
//       7,
//       8
//     ],
//     "propertyA": {
//       "values": [
//         9,
//         10
//       ]
//     }
//   }
// }

console.log();
console.log(JSON.stringify(myNestedObject, null, '--'));
// {
// --"property1": {
// ----"name": "test1",
// ----"values": [
// ------1,
// ------2,
// ------3,
// ------4
// ----]
// --},
// --"property2": {
// ----"name": "test1",
// ----"values": [
// ------5,
// ------6,
// ------7,
// ------8
// ----],
// ----"propertyA": {
// ------"values": [
// --------9,
// --------10
// ------]
// ----}
// --}
// }

console.log();
console.log(JSON.stringify(myNestedObject, function(key, value) {
  return key === 'property2' ? {} : value;
}, '--'));
// {
// --"property1": {
// ----"name": "test1",
// ----"values": [
// ------1,
// ------2,
// ------3,
// ------4
// ----]
// --},
// --"property2": {}
// }