'use strict';
// Only works in Node.js 12 (without transpilation)
// Run with: node -r esm 2019/backendImports.mjs (make sure to run 'npm install')

console.log('Full Module Import:');
import moduleA from './testModule';

moduleA.helloWorld();
// Hello world
console.log(moduleA.property1);
// value1

console.log('\nPartial Module Import:');
import { helloWorld } from './testModule';
helloWorld();
// Hello world

console.log('\nModule Glob Import:');
import * as moduleA2 from './testModule';
moduleA2.helloWorld();
// Hello world
console.info(moduleA2.property1);
// value1