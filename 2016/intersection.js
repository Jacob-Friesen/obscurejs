#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Without Intersection
console.log('Without Intersection:');

var AUTHORIZED_SECTIONS = [
  'sessions',
  'users',
  'admin'
];

var sendAuthorization = function(url) {
  var fragments = url.split('/');
  for (var i = 0; i < AUTHORIZED_SECTIONS.length; i += 1) {
    for(var j = 0; j < fragments.length; j += 1) {
      if (fragments[j] === AUTHORIZED_SECTIONS[i]) {
        return true;
      }
    }
  }

  return false;
};

console.log(sendAuthorization('users'));// true
console.log(sendAuthorization('test/sessions/id1'));// true
console.log(sendAuthorization('users/id1'));// true
console.log(sendAuthorization('other/id1/users'));// true
console.log(sendAuthorization('test/public/countries'));// false

// The intersection

var intersection = function(arr1, arr2) {
  var matched = [];

  arr1.forEach(function(element1) {
    arr2.forEach(function(element2) {
      if(element1 === element2) {
        matched.push(element1);
      }
    });
  });

  return matched;
};

// With Intersection
console.log('\nWith Intersection:');

var sendAuthorization = function(url) {
  return intersection(AUTHORIZED_SECTIONS, url.split('/')).length > 0;
};

console.log(sendAuthorization('users'));// true
console.log(sendAuthorization('test/sessions/id1'));// true
console.log(sendAuthorization('users/id1'));// true
console.log(sendAuthorization('other/id1/users'));// true
console.log(sendAuthorization('test/public/countries'));// false
