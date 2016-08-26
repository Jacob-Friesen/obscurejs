#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var dates = [
  new Date("2011/06/25"),
  new Date("2011/06/28"),
  new Date("2011/06/27"),
  new Date("2011/06/26")
];

var maxDate = new Date(Math.max.apply(null, dates));
console.log(maxDate);
// Tue Jun 28 2011 00:00:00 GMT-0400 (EDT)

// Explanation content
console.log(new Date("2011/06/25") - new Date("2011/06/24"));
// 86400000
console.log(1000 * 60 * 60 * 24);
// 86400000