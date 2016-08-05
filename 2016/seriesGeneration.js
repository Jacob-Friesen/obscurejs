#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var times = function(n, callback) {
  return Array.apply(null, Array(n)).map(callback);
};

var uniqueId = (function() {
  var number = 0;
  uniqueId = function(prefix) {
    return prefix + (number += 1);
  }
  return uniqueId;
})();

console.log(times(6, uniqueId.bind(this, 'ball_')));
//[ 'ball_1', 'ball_2', 'ball_3', 'ball_4', 'ball_5', 'ball_6' ]