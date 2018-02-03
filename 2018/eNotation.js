console.log('Exponential Notation:');

const msInDay2 = 86400000;
// vs
const msInDay = 864e5;

console.log(msInDay, msInDay2);
// 86400000 86400000

function within24Hours(dateA, dateB) {
  return Math.abs(dateA - dateB) <= msInDay;
}

// Format is YYYY-MM-DD HH:MM:SS
const date1 = new Date('1990-01-19T03:24:00'),
  date2 = new Date('1992-06-10T03:24:00'),
  date3 = new Date('1990-01-19T09:00:00');

console.log(within24Hours(date1, date2));
// false
console.log(within24Hours(date1, date3));
// true

console.log(1e-6);
// 0.000001

console.log('\nJS display of 7 to the power of 40:');
console.log(Math.pow(7, 40));
// 6.366805760909028e+33

console.log('\nScientific Notation in JS:');

// 6.022 * 10^23
console.log(6.022e23);
// 6.022e+23

// 6.022 * 10^23
console.log(6.022 * Math.pow(10, 23));
// 6.0219999999999996e+23
