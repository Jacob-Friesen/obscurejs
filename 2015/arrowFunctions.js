#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// With the arrow function
console.log('With the arrow function:');

var API = function() {
    this.called = 0;

    this.fakeCall = function() {
        setTimeout(() => console.log(this.called += 1), 1000);
    };
};

var api = new API();
api.fakeCall();
// after 1s: 1

// With a custom implementation
setTimeout(function() {
    console.log('\nWith the custom function:');

    api.fakeCall = function() {
        setTimeout((function() {
            console.log(this.called += 1);
        }).bind(this), 1000);
    };

    api.fakeCall();
    // after 1s: 2
}, 1100);
