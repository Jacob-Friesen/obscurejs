#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';
// Node 8+ ONLY

console.log('Basic Example:');

const objectA = { name: 'A' };
const objectB = { ...objectA };

console.log(objectB);
// { name: 'A' }

const objectC = { ...objectA, property1: 'value1' };

console.log(objectC);
// { name: 'A', property1: 'value1' }

console.log('\nObject.assign Example:');

// A very simple permission list
const defaultPermissions = {
  name: 'A Person',
  isAdmin: false,
  canCreate: false,
  canDelete: false,
};

const nonAdminUser = Object.assign({}, defaultPermissions, {
  canCreate: true,
  canDelete: true
});
console.log(nonAdminUser);
// { name: 'A Person',
//   isAdmin: false,
//   canCreate: true,
//   canDelete: true }

console.log('\nRest Properties Example2:');

// A very simple permission list
const nonAdminUser2 = { 
  ...defaultPermissions,
  canCreate: true,
  canDelete: true
};
console.info(nonAdminUser2);
// { name: 'A Person',
//   isAdmin: false,
//   canCreate: true,
//   canDelete: true }

// A very simple permission list
const nonAdminPermissions = {
  canCreate: true,
  canDelete: true
};
const nonAdminUser3 = { ...defaultPermissions, ...nonAdminPermissions };
console.info(nonAdminUser3);
// { name: 'A Person',
//   isAdmin: false,
//   canCreate: true,
//   canDelete: true }
