console.info('Function name');

function getMessage() {
  return 'A message';
}; 

console.info(getMessage.name);
// "getMessage"
console.info(getMessage.bind({}).name);
// "bound getMessage"

console.log();

function printResult(callback) {
  console.log(callback());

  // E.g. for debugging (Alternatively callback.name can be used in a debugger)
  console.log(callback.name);
}

printResult(getMessage);
// A message
// getMessage

console.log();

class AnObject {
  getMessage() {
    return 'A message';
  }
}

console.log(AnObject.constructor.name);
// AnObject
printResult(new AnObject().getMessage);
// A message
// getMessage

console.log();

const getMessageB = function() {
  return 'A message';
}
const AnObjectB = class {
  getMessage() {
    return 'A message';
  }
}

printResult(getMessageB);
// A message
// getMessage
console.log(AnObjectB.constructor.name);
// Function
console.log(AnObjectB.name);
// AnObjectB
