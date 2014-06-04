#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
console.log();// For some reason I need to run one of these first

// Need to use a forEach loop as opposed to a standard for loop so there index variable
// is a new index value hoisted into the get and set. Otherwise it will always be 3.
// not overridden
var toCreate = [];
for (var i = 0; i < 3; i += 1)
    toCreate.push(i);

// CAVEAT #1: Need to explicitly define how many properties need to be handled. Any
// properties outside of this range will not be overridden by the below.
toCreate.forEach(function(i){
    // (IE 8+ and modern browsers only)
    Object.defineProperty(Array.prototype, i, (function(){
        // Since get needs a specific position in the defined array, I need a non array
        // object to be accessible to prevent infinite recursion.
        var fakeArray = {},
            addTo = "s";

        return {
            set: function(val){
                fakeArray[i] = val + addTo;
            },

            get: function(){
                // Node.js instantiates the console object differently than browsers so
                // this console.log will not work in Node.js.
                console.log(fakeArray[i]);

                return fakeArray[i];
            }
        }
    })());
    // The third arg does not use a callback, it uses an object. So make a self executing
    // function that returns an object.
});

// CAVEAT #2: starting array must be empty.
var arr = [];

// Not a realistic example, but demonstrates the functionality well.
(function pluralize(){
    ["hat","cat","thorn"].forEach(function(word, index){
        arr[index] = word;
        arr[index];// Depending upon the index prints: hats/cats/thorns
    });
})();