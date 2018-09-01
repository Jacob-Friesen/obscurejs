'use strict';

const _ = require('lodash');

function hasWords(url, words) {
  for (let word of words) {
    if (String(url).indexOf(word) < 0) {
      return false;
    }
  }

  return true;
}

console.log('No Memoization');

const url1 = 'http://obscurejavascript.tumblr.com/post/111106381319/memoize-in-javascript';

let text = new Array(50000).join('a');

console.time('hasWords');
console.log(hasWords(url1, ['tumblr', 'javascript']));
// true
console.log(hasWords(url1, ['tumblr', 'ruby']));
// false
console.log(hasWords(url1, ['tumblr', 'javascript']));
// true
console.timeEnd('hasWords');
// hasWords: 1.345ms (Time will vary)

console.log('\nLodash Memoized');

const hasWordsMemoized = _.memoize(hasWords, (url, words) => {
  return String(url) + String(words);
});

console.time('hasWords');
console.log(hasWordsMemoized(url1, ['tumblr', 'javascript']));
// true
console.log(hasWordsMemoized(url1, ['tumblr', 'ruby']));
// false
console.log(hasWordsMemoized(url1, ['tumblr', 'javascript']));
// true
console.timeEnd('hasWords');
// hasWords: 0.728ms (Time will vary)

console.log('\nCustom Memoized');

function memoize(toMemoize, getKey) {
  const cache = {};

  return (...args) => {
    const key = getKey(...args);
    if (key in cache) {
      return cache[key];
    }

    const result = toMemoize(...args);
    cache[key] = result;
    return result;
  }
}

const hasWordsMemoized2 = memoize(hasWords, (url, words) => {
  return String(url) + String(words);
});

console.time('hasWords');
console.log(hasWordsMemoized2(url1, ['tumblr', 'javascript']));
// true
console.log(hasWordsMemoized2(url1, ['tumblr', 'ruby']));
// false
console.log(hasWordsMemoized2(url1, ['tumblr', 'javascript']));
// true
console.timeEnd('hasWords');
// hasWords: 0.728ms (Time will vary)

