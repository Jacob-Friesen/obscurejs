#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

function Formatter(message) {
  const self = this;

  self.value = message;
  self.lastAction = function() {};

  const wrap = function(callback) {
    return function() {
      const argsAsArray = [].slice.call(arguments);
      callback.apply(self, argsAsArray);
      self.lastAction = callback.bind(callback, argsAsArray);

      return self;
    }
  }

  self.prefix = wrap(function(prefix) {
    self.value = prefix + self.value;
  });

  self.suffix = wrap(function(suffix) {
    self.value += suffix;
  });

  this.times = wrap(function(times) {
    // -1 since the action has already been done once
    for (let i = 0; i < times - 1; i += 1) {
      self.lastAction();
    }
  });
};

const value = new Formatter('My exciting sentence')
  .suffix('!')
  .times(5)
  .prefix('[')
  .suffix(']')
  .value
console.log(value);
// [My exciting sentence!!!!!]
