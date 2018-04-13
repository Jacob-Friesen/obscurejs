console.log('Number conversion');

const number = '1234';
console.log(+number);
console.log(~~number);
console.log(number^0);
console.log(number|0);
console.log(number>>0);
console.log(number>>>0);
console.log(number<<0);
console.log(-number * -1);
console.log(Number(number));
// 1234 (In all cases)

console.log('\nBoolean conversion');

const setting1 = 'false';// Anything non-empty will be true
console.log(!!setting1);
console.log(Boolean(setting1));
// true (In both cases)

const setting2 = '';// Or empty string
console.log(!!setting2);
console.log(Boolean(setting2));
// false (In both cases)

console.log('\nString conversion');

console.log(number + '');
console.log(String(number));
// '1234' (In both cases)

const now = new Date();
console.log(now + '');
console.log(String(now));
// Your current time (In both cases)
