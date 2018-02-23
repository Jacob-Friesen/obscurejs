console.log('For rounding:');

const num = 9.567;

console.log(num.toFixed(2));
// 9.57
console.log(num.toFixed(1));
// 9.6
console.log(num.toFixed(0));
// 10
console.log(num.toFixed());
// 10

console.log('\nFor number consistency:');

function toMoney(number) {
  return number.toFixed(2);
}

const prices = [1, 2.4, 5.67, 3.33, 6.1];

// e.g. to display in a UI
for (price of prices) {
  console.log(toMoney(price));
}
// 1.00
// 2.40
// 5.67
// 3.33
// 6.10
