'use strict';

console.log('Recursive Strategy:');

// Simulate an element find which appears after 2 seconds
let element = null;
setTimeout(() => {
  element = '<div id="custom-element"><div>';
}, 2000);
function findById(id) {
  return element;
}

function loadAfterElementAppears(tryNumber, callback) {
  tryNumber = tryNumber || 0;
  // Give up after 10 seconds, the element will probably not ever appear. 
  if (tryNumber >= 100) {
    console.error('Could not find element. Max tries exceeded (100)');
    return callback(null);
  }

  const foundElement = findById('custom-element');
  if (foundElement !== null) {
    callback(foundElement);
  } else {
    setTimeout(() => {
      loadAfterElementAppears(tryNumber + 1, callback);
    }, 100);
  }
}
loadAfterElementAppears(0, async (foundElement) => {
  console.info('Element was loaded (recursive):', foundElement);

  // Restart the element add simulation
  element = null;
  setTimeout(() => {
    element = '<div id="custom-element"><div>';
  }, 2000);

  console.log('\nAsync Function Strategy:');

  foundElement = await loadAfterElementAppears2();
  console.info('Element was loaded (async):', foundElement);
});

async function loadAfterElementAppears2() {
  for (let tryNumber = 0; tryNumber <= 100; tryNumber += 1) {
    const foundElement = findById('custom-element');
    if (foundElement !== null) {
      return foundElement;
    } else {
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
    }
  }

  console.error('Could not find element. Max tries exceeded (100)');
  return null;
}
