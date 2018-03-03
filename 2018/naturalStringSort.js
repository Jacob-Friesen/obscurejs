function naturalSortPeople(arr) {
  // Slice ensures the original array is not modified.
  return arr.slice().sort((elementA, elementB) => {
    return elementA.localeCompare(elementB, {}, {
      numeric: true,
      sensitivity: 'base'
    });
  });
}

const people = [
  'bob',
  'Zack',
  'billy',
  'Bobby'
];

console.info(naturalSortPeople(people));
// [ 'billy', 'bob', 'Bobby', 'Zack' ]

function basicSortPeople(arr) {
  // Slice ensures the original array is not modified.
  return arr.slice().sort((elementA, elementB) => {
    if (elementA < elementB){
      return -1;
    }
    if ( elementA > elementB){
      return 1;
    }
    return 0;
  });
}

const peopleWithNumbers = [
  'bob',
  'Zack',
  'billy',
  'Bobby',
  '1zara',
  '0Abby',
];

console.info(basicSortPeople(peopleWithNumbers));
// [ '0Abby', '1zara', 'Bobby', 'Zack', 'billy', 'bob' ]
