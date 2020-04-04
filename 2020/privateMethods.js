'use strict';

console.info('Private Methods - Old Style');

function Car(name, hp) {
  function getSecret() {
    return 'test 1';
  }

  this.name = name;
  this.hp = hp;

  // Note this will not appear in inherited copies of this object.
  this.print = function() {
    console.log(`${this.name} (${this.hp}) - secret: ${getSecret()}`);
  }
}

const miata = new Car('miata', 155);
console.log(miata.name);
// miata
console.log(miata.hp);
// 155
console.log(miata.getSecret);
// undefined
miata.print();
// miata (155) - secret: test1

console.info('\nPrivate Methods - New Style');

class Car2 {
  #getSecret = function() {
    return 'test 1';
  }

  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  print() {
    // console.log(`${this.name} (${this.hp}) - secret: ${getPrivateVariableFormatted()}`);
    console.log(`${this.name} (${this.hp}) - secret: ${this.#getSecret()}`);
  }
}

const miata2 = new Car2('miata', 155);
console.log(miata2.name);
// miata
console.log(miata2.hp);
// 155
console.log(miata2.getSecret);
// undefined
miata2.print();
// miata (155) - secret: test1