'use strict';

console.info('Apply syntax example:');

function boxVolume(width, height, length) {
  return width * height * length;
}

const params = [5, 4, 3];
console.log(boxVolume.apply(undefined, params));
// 60

console.info('\nSpread syntax example:');

console.log(boxVolume(...params));
// 60

console.info('\nAll length 3 volumes:');

for (let width = 1; width < 4; width += 1) {
  for (let height = 1; height < 4; height += 1) {
    for (let length = 1; length < 4; length += 1) {
      const dimensions = [width, height, length];
      console.log(dimensions, boxVolume(...dimensions));
    }
  }
}
// [ 1, 1, 1 ] 1
// [ 1, 1, 2 ] 2
// ... Alot more results
// [ 3, 3, 3 ] 27
