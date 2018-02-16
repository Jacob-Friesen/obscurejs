console.info('Basic iterable example:');

let a = [1,2,3],
  b = '123';

for (let ele of a) {
  console.log(ele);
}
// 1\n2\n3

for (let ele of b) {
  console.log(ele);
}
// 1\n2\n3

console.info('\nUsing a generator:');

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    },
    g: 5,
  },
};

function* deepObjectKeys(tree) {
  for (let key in tree) {
    yield key;

    // When a sub tree is encountered delegate to another generator
    if (tree[key] === Object(tree[key])) {
      yield * deepObjectKeys(tree[key]);
    }
  }
}

for (let key of deepObjectKeys(obj)) {
  console.log(key);
}
// a
// b
// ...
// g

console.info('\nMaking it a find:');

for (let key of deepObjectKeys(obj)) {
  if (key === 'c') {
    console.log(key);
    break;
  }
}

console.info('\nConvert iterable to an array:');

console.log(Array.from(deepObjectKeys(obj)));
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

