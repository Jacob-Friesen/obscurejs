console.log('Basic destructuring:');

const [car1, car2] = ['miata', 'elise'];
console.log(car1, car2);
// miata elise

console.log('Synchronous Argument destructuring:');

function powNumbers(num1, num2, pow, callback) {
  callback([Math.pow(num1, pow), Math.pow(num2, pow)]);
}

powNumbers(2, 3, 2, (results) => {
  console.log(results[0], results[1]);
  // 4 9
});

powNumbers(2, 3, 2, ([num1, num2]) => {
  console.log(num1, num2);
  // 4 9
});

console.log('Asynchronous Argument destructuring:');

function powNumbersApi(num1, num2, pow) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API
    setTimeout(() => {
      resolve([Math.pow(num1, pow), Math.pow(num2, pow)]);
    }, 500);
  });
}

powNumbersApi(2, 3, 2).then(([num1, num2]) => {
  console.log(num1, num2);
  // 4, 9
});
