#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.info('Not automated:');

function Car() {
  const self = this;
  
  self.name = '',
  self.hp = 0;

  self.init = function(name, hp) {
    self.setName(name);
    self.setHp(hp);
  };

  self.setHp = function(hp) {
    self.hp = hp;
  }

  self.getHp = function() {
    return self.hp;
  }

  self.setName = function(name) {
    self.name = name;
  }

  self.getName = function() {
    return self.name + ' (' + self.getHp() + ')';
  }
}

const lotusElise = new Car()
lotusElise.init('Lotus Elise', 217);

console.log(lotusElise.getName());
// Lotus Elise (217)
lotusElise.setHp(200);
console.log(lotusElise.getHp());
// 200

console.info('\nAutomated:');

function getterSetter(self, propertyName, overrideGetter) {
  const propertyUpper = propertyName[0].toUpperCase() + propertyName.substring(1);

  self['get' + propertyUpper] = function() {
    let value = self[propertyName];
    if (typeof overrideGetter === 'function') {
      value = overrideGetter(value);
    }

    return value;
  }

  self['set' + propertyUpper] = function(value) {
    self[propertyName] = value;
  }
}

function Car2() {
  const self = this;
  
  self.name = '',
  self.hp = 0;

  self.init = function(name, hp) {
    self.setName(name);
    self.setHp(hp);
  };

  getterSetter(self, 'hp');
  getterSetter(self, 'name', function(name) {
    return name + ' (' + self.getHp() + ')';
  });
}

const lotusElise2 = new Car2();
lotusElise2.init('Lotus Elise', 217);

console.log(lotusElise2.getName());
// Lotus Elise (217)
lotusElise2.setHp(200);
console.log(lotusElise2.getHp());
// 200
