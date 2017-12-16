// To run this:
// node 2017/importServer.js 6001
// Visit localhost:6000/importIndex.html

import './importModuleA.js';
// 'Running Import Module A'
import myDefaultFunction from './importModuleB.js';
import {
  moduleCMessage,
  squareArea,
  defaultX,
  defaultY 
} from './importModuleC.js';

myDefaultFunction();
// 'Running Import Module B'

moduleCMessage();
console.log(squareArea(2, 2));
// 4 
console.log(squareArea(defaultX, defaultY))
// 42
