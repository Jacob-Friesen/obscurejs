'use strict';
const _ = require('lodash');

console.info('First set of examples:');

console.log(_.capitalize('test'));
// Test
console.log(_.capitalize('This string, ShouLD be ALL in title CASe'));
// This string should be all in title case

console.info('\nProper sentence capitalization:');

const sentence = 'This string, ShouLD be ALL in title CASe';
const result = sentence.split(' ')
                 .map((word) => _.capitalize(word))
                 .join(' ');
console.log(result);
// This String, Should Be All In Title Case
