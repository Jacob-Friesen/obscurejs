'use strict';

console.info('function specific property setting');

function sayMessage(title, name, suffix) {
  sayMessage.replay = () => sayMessage(...arguments);

  console.info(`Hello, ${title} ${name} ${suffix}!`);
}

sayMessage('King', 'Bob', 'The Magnificent');
// Hello, King Bob The Magnificent!

sayMessage.replay();
// Hello, King Bob The Magnificent!

sayMessage('Super', 'Chet', 'The Rich');
// Hello, Super Chet The Rich!

sayMessage.replay();
// Hello, Super Chet The Rich!