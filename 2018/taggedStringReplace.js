'use strict';

// This looks complicated, but all it does is find each pair of text to replace in order, then replaces it.
function replaceTaggedContent(contentString, repeaterTag, replaceWith) {
  let newString = contentString;
  let index = 0; 

  while (index < contentString.length) {
    const startIndex = newString.indexOf(repeaterTag, index);
    // No point in continuing, there is nothing more to replace.
    if (startIndex < 0) {
        break;
    }

    // No point in continuing, there is no second string to match.
    const endIndex = newString.indexOf(repeaterTag, startIndex + repeaterTag.length);
    if (endIndex < 0) {
        break;
    }

    const endPoint = endIndex + repeaterTag.length;
    newString = newString.substring(0, startIndex) + replaceWith + newString.substring(endPoint);
    index = startIndex + replaceWith.length;
  }

  return newString;
}

console.log('Before: @should replace@');
const result1 = replaceTaggedContent(
    '@should replace@'
, '@', 'REPLACED');
console.log('After :', result1);
// REPLACED

console.log('\nBefore: @should @should replace@ replace@');
const result2 = replaceTaggedContent(
    '@should @should replace@ replace@'
, '@', 'REPLACED');
console.log('After :', result2);
// REPLACEDshould replaceREPLACED

console.log('\nBefore: BEFORE-@should replace@-MIDDLE-@should-replace@-AFTER');
const result3 = replaceTaggedContent(
    'BEFORE-@should replace@-MIDDLE-@should-replace@-AFTER'
, '@', 'REPLACED');
console.log('After :', result3);
// BEFORE-REPLACED-MIDDLE-REPLACED-AFTER

