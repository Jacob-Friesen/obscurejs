#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var throttle = function(callback, delay) {
    return function parent() {
        var args = arguments;

        if (!parent.calling){
            parent.calling = true;
            callback.apply(this, args);

            setTimeout(function() {
                parent.calling = false;
            }, delay);
        }
    };
};

// Using throttle for a scroll event handler. The scroll event is represented in a loop that triggers every 20 ms.

var simulateScrollDown = function(callback) {
    (function loopedCall(i) {
        if (i > 100) return;

        setTimeout(function() {
            callback(i);
            loopedCall(i + 1);
        }, 20);
    })(0);
};

var proccessScroll = function(percent) {
    console.log('Scrolled:', percent);
};

var throttled = throttle(proccessScroll, 200);

// simulateScrollDown(proccessScroll);
simulateScrollDown(throttled);
// Scrolled: 0 then >200ms later: 
// Scrolled: 10 and so on

// Running multiple throttle functions. Throttle can be easy to screw up, so this is a test to identify big errors:

// var throttled2 = throttle(function(percent) {
//     console.log('Scrolled2:', percent);
// }, 200);
// var throttled3 = throttle(function(percent) {
//     console.log('Scrolled3:', percent);
// }, 200);
// simulateScrollDown(throttled2);
// simulateScrollDown(throttled3);