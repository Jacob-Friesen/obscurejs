// This file is used to demonstrate a 'use strict' conversion issue.
// So that is not automatically used.

function runWithoutStrict() {
  function addMessage(message) {
    var self = this || {};
    self.messages = self.messages || [];
    self.messages.push(message);
  }

  addMessage('message1');
  console.log('Non-Strict Messages:', messages);
  // Non-Strict Messages: ["A message"]
}
runWithoutStrict();
// Clear messages so the next test is accurate
messages = undefined;

function runInStrict() {
  'use strict';

  function addMessage(message) {
    var self = this || {};
    self.messages = self.messages || [];
    self.messages.push(message);
  }

  addMessage('message2');
  console.log('Strict Messages:', messages);
  // undefined
}
runInStrict();

