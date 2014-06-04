#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Default initialization

var huzzahs = []
for (var i = 0; i < 3; i += 1)
    huzzahs.push('huzzah!');
console.log(huzzahs);

// Arrays can be created with arbitrary lengths though

console.log(Array(3));

// But forEach with not work with this

Array(11).forEach(function(pos){
    console.log('this message will not print...:(');
});

// A size initializer to make this simple

Array.prototype.size = function(repeat){
    while(this.push(this[0]) < repeat){};
    return this;
}

console.log(['huzzah!'].size(3));

// Can be simplified into a crazy one liner

Array.prototype.size = function(repeat){
    return this.push(this[0]) < repeat && (this.size(repeat), this);
}

console.log(['huzzah!'].size(3));
