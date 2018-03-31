console.log('Delete keyword based delete:');

const arr = [1,2,3,4,5];
delete arr[2]

console.log(arr);
// [ 1, 2, , 4, 5 ]
console.log(arr[2]);
// undefined

console.log('\nSplice based delete:');

const arr2 = [1,2,3,4,5];
arr2.splice(arr2, 2, 1);

console.log(arr2);
// [ 1, 3, 4, 5 ]
console.log(arr2[2]);
// 4

console.log('\nlength based delete:');

const arr3 = [1,2,3,4,5];

arr3.length = 4;
console.log(arr3);
// [ 1, 2, 3, 4 ]

arr3.length = 1;
console.log(arr3);
// [ 1 ]

const arr4 = [1,2,3,4,5];
arr4.forEach((element) => {
  console.log(element);
  if (element === 3) {
    arr4.length = 0;
  }
});
// 1
// 2
// 3

console.log('\nfilter based delete:');

const arr5 = [1,2,3,4,5];
const newArr = arr5.filter((element) => element !== 3);

console.log(arr5);
// [ 1, 2, 3, 4, 5 ]
console.log(newArr);
// [ 1, 2, 4, 5 ]
