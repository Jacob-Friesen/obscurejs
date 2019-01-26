'use strict';

console.log('Basic default parameter example:');

function greet(name = '') {
  return 'Hello ' + name;
}
console.log(greet('Phil'));
// Hello Phil
console.log(greet());
// Hello

console.log('\nObject default parameter example:');

function createMessage(config = {
  type: 'default',
  name: 'Person',
  date: new Date(),
}) {
  let message = '';

  if (config.type === 'default') {
    message = `Hello, ${config.name}. You have received a package on ${config.date}.`;
  } else if (config.type === 'warning') {
    message = `${config.name}, a package has been in storage since ${config.date}, `;
    message += 'and will be sent back to sender in 1 day.'
  }

  return message;
}

console.log(createMessage());
// Hello, Person. You have received a package on <NOW>.

console.log(createMessage({
  type: 'warning',
  name: 'Phil',
  date: new Date('2019-01-27T08:00:00'),
}));
// Phil, a package has been in storage since Sun Jan 27 2019 08:00:00 GMT-0500 (EST),
// and will be returned in 1 day.
