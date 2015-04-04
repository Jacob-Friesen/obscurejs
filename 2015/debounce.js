#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var debounce = function(callback, delay) {
    var timeout = null;

    return function() {
        var args = arguments,
            context = this;

        clearTimeout(timeout);
        timeout = setTimeout(function() {
            callback.apply(context, args);
        }, delay);
    };
};

// Using debounce for a onChange handler simulated by the below.

var simulateTyping = function(callback) {
    var text = 'cats and dogs';
        letterStart = 97;// a is ASCII code 97

    var loopedCall = function(i, to, onFinish) {
        if (i > to) {
            onFinish && onFinish();
        } else {
            setTimeout(function() {
                callback(text.substring(0, i));
                loopedCall(i + 1, to, onFinish);
            }, 80);
        }
    };

    loopedCall(0, 4, function() {
        setTimeout(function() {
            loopedCall(5, text.length);
        }, 1000);// simulate a 1s pause of thinking
    });
};

var sendToServer = function(text) {
    console.log('Sending:', text);
};

var debounced = debounce(sendToServer, 200);

// simulateTyping(sendToServer);
simulateTyping(debounced);
// after 400ms:
// Sending: cats, then after 1720ms:
// Sending: cats and dogs


// Running multiple debounced functions. Debounce can be easy to screw up, so this is a test to identify big errors:

// var debounced2 = debounce(function(percent) {
//     console.log('Sending2:', percent);
// }, 200);
// var debounced3 = debounce(function(percent) {
//     console.log('Sending3:', percent);
// }, 200);
// simulateTyping(debounced2);
// simulateTyping(debounced3);
