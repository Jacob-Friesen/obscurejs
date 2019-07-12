'use strict';
const _ = require('lodash');

console.log('mapValues:');

function mapValues(obj, callback) {
  // Make sure the original object is not modified
  const newObj = {};

  for (let key in obj) {
    newObj[key] = callback(obj[key]);
  }

  return newObj;
}

const grid1Columns = {
  name: 0,
  location: 1,
  url: 2,
};

// Later another grid is added that is based on the current one

let grid2Columns = {...grid1Columns};

grid2Columns.id = -1;
grid2Columns = mapValues(grid2Columns, (index) => index + 1);

console.log(grid1Columns);
// { name: 0, location: 1, url: 2 }
console.log(grid2Columns);
// { name: 1, location: 2, url: 3, id: 0 }

console.log('\nmapKeys:');

function mapKeys(obj, callback) {
  // Make sure the original object is not modified
  const newObj = {};

  for (let key in obj) {
    const newKey = callback(key);
    newObj[newKey] = obj[key];
  }

  return newObj;
}

grid2Columns = mapKeys(grid2Columns, (name) => name + 'Column');
console.log(grid2Columns);
// { nameColumn: 1, locationColumn: 2, urlColumn: 3, idColumn: 0 }

console.log('\nmapObject:');

function mapObject(obj, callback) {
  // Make sure the original object is not modified
  const newObj = {};

  for (let keyInObj in obj) {
    const {key, value} = callback(obj[keyInObj], keyInObj);
    newObj[key] = value;
  }

  return newObj;
}

const grid2ColumnsB = mapObject({ id: -1, ...grid1Columns}, (index, name) => {
  return { 
    key: name + 'Column',
    value: index + 1
  };
});

console.log(grid2ColumnsB);
// { idColumn: 0, nameColumn: 1, locationColumn: 2, urlColumn: 3 }
