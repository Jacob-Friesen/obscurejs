#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// A capitalized wrapped word, done the standard way:

var capitalize = function(word) {
    return word[0].toUpperCase() + word.slice(1);
};
console.log(capitalize('word'));// Word

var wrapWord = function(word) {
    return '<span>' + word + '</span>';
};
console.log(wrapWord('word'));// '<span>word</span>'

var displayCapitalized = function(word) {
    var capitalized = capitalize(word);
    console.log(wrapWord(capitalized));
};
displayCapitalized('word');// '<span>Word</span>'

// Using flow
console.log('Using flow');

var flow = function(/*callbacks*/) {
    var callbacks = Array.prototype.slice.call(arguments);

    return function useCallback(word, index) {
        index = index || 0;
        if (index < callbacks.length) {
            var result = callbacks[index](word);
            return useCallback(result, index + 1);
        }

        return word;;
    };
}

displayCapitalized = flow(capitalize, wrapWord, console.log);
displayCapitalized('word');// '<span>Word</span>' 

