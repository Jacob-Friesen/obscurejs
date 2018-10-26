'use strict';

console.log('Wait with timeouts:');

console.log('Starting wait...');
setTimeout(() => {
  console.log('Waited 1 second.');

  part2();
}, 1000);

function sleep(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
}

async function part2() {
  console.log('\nWait with sleep():');

  console.log('Starting wait...');
  await sleep(1);
  console.log('Waited 1 second.');

  part3();
}

let loadingAmount = 0;
async function part3() {
  console.log('\nPolling Interval:');

  const intervalId = setInterval(() => {
    loadingAmount += Math.round(Math.random() * 10);
    loadingAmount = Math.min(loadingAmount, 100);
    console.log(loadingAmount + '%');

    if (loadingAmount >= 100) {
      clearInterval(intervalId);
    }
  }, 100);

  waitForLoad();
}

async function waitForLoad() {
  console.log('Waiting for loading...');
  while(loadingAmount < 100) {
    await sleep(0.1);
  }

  console.log('Done Loading.');
}