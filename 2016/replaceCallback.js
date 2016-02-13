#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var sentence = 'this_sentence_is_long_so_it_needs_a_comma';

// String operations without a replace callback
console.log('String replace without a replace callback:');

var modified = sentence.replace(/_/g, ' ');
modified = modified.replace(/ so/g, ', so');

console.log(modified);
// this sentence is long, so it needs a comma

// String operations with a replace callback
console.log('\nString replace with a replace callback:');

console.log(sentence.replace(/_/g, function(toReplace, position, string) {
    if (string.substring(position, position + 3) === '_so') {
      return ', ';
    }

    return ' ';
}));
