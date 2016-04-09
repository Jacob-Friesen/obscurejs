#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var data = [
  {
    id: 'id1',
    property1: 'value1'
  },{
    id: 'id2',
    property1: 'value2'
  },{
    id: 'id3',
    property1: 'value3'
  }
]

var pluck = function(arr, id) {
  return arr.map(function(arr) {
    return arr[id];
  });
};

var zipObj = function(ids, data) {
  var zipped = {};

  ids.forEach(function(id, index) {
    zipped[id] = data[index];
  });

  return zipped;
};

var values = function(obj) {
  return Object.keys(obj).map(function(key) {
    return obj[key];
  });
};

var result = zipObj(pluck(data, 'id'), data);
console.log('transformed\n', result); 
// { 
//   id1: { id: 'id1', property1: 'value1' },
//   id2: { id: 'id2', property1: 'value2' },
//   id3: { id: 'id3', property1: 'value3' }
// }
console.log('returned\n', values(result));
// [ 
//   { id: 'id1', property1: 'value1' },
//   { id: 'id2', property1: 'value2' },
//   { id: 'id3', property1: 'value3' }
// ]