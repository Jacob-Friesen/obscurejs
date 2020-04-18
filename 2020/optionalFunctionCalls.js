'use strict';

// Can only run in Chrome and Firefox as of April 2020 (due to the optional chaining syntax)
console.info('Optional function calls - manual type checks');

class Mailbox {
  subscriber = null;

  register(subscriber) {
    this.subscriber = subscriber;
  }

  publish(message) {
    if (typeof this.subscriber === 'function') {
      this.subscriber(message);
    }
  }
}

const mailbox = new Mailbox();

// Keep on publishing messages
let number = 1;
const intervalId = setInterval(() => {
  number += 1;
  mailbox.publish(`Test Message: ${number}`);
  if (number > 5) {
    clearInterval(intervalId);
    part2();
  }
}, 500)

mailbox.register((message) => {
  console.log('message:', message);
});
// message: Test Message: 2
// message: Test Message: 3
// message: Test Message: 4
// and so on...

function part2() {
  console.info('Optional function calls - option chaining checks');

  class Mailbox2 {
    subscriber = null;

    register(subscriber) {
      this.subscriber = subscriber;
    }

    publish(message) {
      this.subscriber?.(message);
    }
  }

  const mailbox2 = new Mailbox2();

  // Keep on publishing messages
  let number = 1;
  setInterval(() => {
    number += 1;
    mailbox2.publish(`Test Message: ${number}`);
  }, 500)

  mailbox2.register((message) => {
    console.log('message:', message);
  });
  // message: Test Message: 2
  // message: Test Message: 3
  // message: Test Message: 4
  // and so on...
}