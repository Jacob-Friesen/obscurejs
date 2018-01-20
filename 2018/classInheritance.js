'use strict';

console.log('Without class syntax example:');

function ErrorInHTML(message) {
  const error = Error.call(this, message);

  error.stack = error.stack.replace(/\n/g, '<br/>');
  error.name = 'ErrorInHTML';

  return error;
}
ErrorInHTML.prototype = Object.create(Error.prototype);
ErrorInHTML.prototype.constructor = ErrorInHTML;

try {
  throw(new ErrorInHTML('Test Error'));
} catch (e) {
  console.log('Error Name', e.name);
  // Error Name ErrorInHTML
  console.log(e);
  // { Error: Test Error<br/> ... and a full stack trace
}

console.log('\nWith class syntax example:');

class ErrorInHTML2 extends Error {
  constructor(message) {
    super(message);

    this.stack = this.stack.replace(/\n/g, '<br/>');
    this.name = 'ErrorInHTML2';
  }
}

try {
  throw(new ErrorInHTML2('Test Error'));
} catch (e) {
  console.log('Error Name', e.name);
  // Error Name ErrorInHTML2
  console.log(e);
  // { Error: Test Error<br/> ... and a full stack trace
}
