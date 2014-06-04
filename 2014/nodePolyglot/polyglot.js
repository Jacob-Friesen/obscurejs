#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@";

console.log('This can be executed in both OS X and Linux with ./polyglot.js.');