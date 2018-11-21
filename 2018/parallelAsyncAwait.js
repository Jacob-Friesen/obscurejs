'use strict';

console.info('Parallel Async/Await');

function getHpFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([155, 237, 217]);
    }, 200);
  });
}

function getCarNamesFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Miata', '4c', 'Elise']);
    }, 500);
  });
}

async function combineServerData() {
  // Promise all returns the result from each Promise as Array positions
  const [hps, names] = await Promise.all([
    getHpFromServer(),
    getCarNamesFromServer(),
  ]);

  // For demonstration purposes, the hps and names are assumed to be of the same length.
  const nameToHpMap = {};
  for (let index = 0; index < hps.length; index += 1) {
    nameToHpMap[names[index]] = hps[index];
  }

  console.info(nameToHpMap);
  // { Miata: 155, '4c': 237, Elise: 217 }
}
combineServerData();
