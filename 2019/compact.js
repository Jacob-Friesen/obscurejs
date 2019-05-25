'use strict';

console.info('Basic compact example:');

function compact(arr) {
  if (Array.isArray(arr)) {
    return arr.filter((element) => Boolean(element));
  }
  return [];
}

console.log(compact([1,2,3,'',null,undefined,4]));
// [ 1, 2, 3, 4 ]

console.log('\nCompact for promises example:');

// Simulated backend calls
function updateUser(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Updating user', user);
      resolve();
    }, 200);
  });
}
function updateAccount(account) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Updating account', account);
      resolve();
    }, 500);
  });
}

async function getBasicData(user, account) {
  await Promise.all(compact([
    user ? updateUser(user) : null,
    account ? updateAccount(account) : null,
  ]));
}

async function runTests() {
  console.log('getBasicData()');
  await getBasicData();
  // (nothing executed)
  
  console.log(`\ngetBasicData({ name: 'User 2' })`);
  await getBasicData({ name: 'User 2' });
  // Updating user { name: 'User 2' }
  
  console.log(`\ngetBasicData({ name: 'User 2' }, { name: 'Account 2' })`);
  await getBasicData({ name: 'User 2' }, { name: 'Account 2' });
  // Updating user { name: 'User 2' }
  // Updating account { name: 'Account 2' }
}
runTests();
