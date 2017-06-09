#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

const string1 = 'A very very long paragraph. That continues on for\n \
                a few sentences. Including this sentence.'

const string2 = `A very very long paragraph. That continues on for
                 a few sentences. Including this sentence.`

console.log(string1);
console.log(string2);
// (Same results as above)

console.info('\nString Replace examples:');

const a = 2,
      b = 3;

console.log('2 + 4 = ' + (a + b) + ' total');
// 2 + 4 = 6 total
console.log(`2 + 4 = ${a + b} total`);
// 2 + 4 = 6 total
console.log('2 + 4 = ' + (2 + 4) + ' total');
// 2 + 4 = 6 total
console.log(`2 + 4 = ${2 + 4} total`);
// 2 + 4 = 6 total
