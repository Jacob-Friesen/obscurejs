console.log('Basic async function:');

function getCars() {
  // Simulate an Async API call
  const cars = ['miata', 'elise', '4c'];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cars);
    }, 500);
  });
}

function getCarsPromise() {
  getCars().then((result) => {
    console.log('Promise:', result);
    // [ 'miata', 'elise', '4c' ]
  });
}

async function getCarsAsync() {
  console.log('async:', await getCars());
  // async: [ 'miata', 'elise', '4c' ]
}

getCarsPromise();
getCarsAsync();

function getCars() {
  // Simulate an Async API call
  const cars = ['miata', 'elise', '4c'];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cars);
    }, 500);
  });
}

function uppercaseCars(cars) {
  // Simulate an Async API call
  return new Promise((resolve, reject) => {
    cars = cars.map((car) => String(car).toUpperCase());

    setTimeout(() => {
      resolve(cars);
    }, 1000);
  });
}

async function processCars() {
  const cars = await getCars();
  console.log('Processed:', await uppercaseCars(cars));
  // [ 'MIATA', 'ELISE', '4C' ]
}
processCars();

(async () => {
  const cars = await getCars();
  console.log('Processed:', await uppercaseCars(cars));
  // [ 'MIATA', 'ELISE', '4C' ]
})()
