function insertInMiddle(array1, value, array2) {
  return array1.concat(value).concat(array2);
}

console.log('Insert in Middle - concat:');

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];
console.log(insertInMiddle(arr1, 4, arr2));
// [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr1);
// [ 1, 2, 3 ]
console.log(arr2);
// [ 5, 6, 7 ]

console.log('\nInsert in Middle - spread:');

function insertInMiddle2(array1, value, array2) {
  return [...array1, value, ...array2];
}

console.log(insertInMiddle2(arr1, 4, arr2));
// [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr1);
// [ 1, 2, 3 ]
console.log(arr2);
// [ 5, 6, 7 ]

console.log('\nExtra verification tests:');

// Extra verification tests
console.log(insertInMiddle([], 1, []));
console.log(insertInMiddle2([], 1, []));
// 1
console.log(insertInMiddle([1], 2, []));
console.log(insertInMiddle2([1], 2, []));
// [ 1, 2 ]
console.log(insertInMiddle([1], 2, [3]));
console.log(insertInMiddle2([1], 2, [3]));
// [ 1, 2, 3 ]
