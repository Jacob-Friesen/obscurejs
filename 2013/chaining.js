#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

console.log(
  (function build(word){
    build.message = (!build.message) ? word : build.message + ' ' + word;
    return build;
  })('I')('love')('unnecessary')('parentheses.').message// It's a joke...
);
