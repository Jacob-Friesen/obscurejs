'use strict';

console.log('Start of console examples:');

console.log('\nConsole Logging:');

console.debug('Test debug log');
console.info('Test info log');
console.log('Test default log');
console.error('Test error log');

console.log('\nConsole Trace:');

function function1() {
  console.trace();
}

function function2() {
  function1();
}
function2();
// Trace
//     at function1 (<YOUR CWD>/obscurejs/2018/console.js:15:11)
//     at function2 (<YOUR CWD>/obscurejs/2018/console.js:19:3)
//     at Object.<anonymous> (<YOUR CWD>/obscurejs/2018/console.js:21:1)
//     at Module._compile (module.js:652:30)
//     at Object.Module._extensions..js (module.js:663:10)
//     at Module.load (module.js:565:32)
//     at tryModuleLoad (module.js:505:12)
//     at Function.Module._load (module.js:497:3)
//     at Function.Module.runMain (module.js:693:10)
//     at startup (bootstrap_node.js:191:16)

console.log('\nConsole Asset (Uncomment the below to cause an assertion error):');

console.assert(1 + 1 === 2, '1 + 1 !== 2');
// (Nothing)
// Causes an assertion error below
// console.assert(6 * 7 === 43, '6 * 7 !== 43');
// AssertionError [ERR_ASSERTION]: 6 * 7 !== 43
//     at Console.assert (console.js:194:23)
//     at Object.<anonymous> (/Users/jacobfriesen/Documents/obscurejs/2018/console.js:37:9)
//     at Module._compile (module.js:652:30)
//     at Object.Module._extensions..js (module.js:663:10)
//     at Module.load (module.js:565:32)
//     at tryModuleLoad (module.js:505:12)
//     at Function.Module._load (module.js:497:3)
//     at Function.Module.runMain (module.js:693:10)
//     at startup (bootstrap_node.js:191:16)
//     at bootstrap_node.js:612:3

console.log('\nConsole Time:');

console.time('Long for loop');
for (let index = 0; index < 1e8; index += 1);
console.timeEnd('Long for loop');
// Long for loop: 67.146ms (This will vary across runs)

console.log('\nConsole Count:');

for (let index = 0; index < Math.round(Math.random() * 1000); index += 1) {
  console.count('Called loop');
}
// Will print "Called loop: 15" a random number of times
