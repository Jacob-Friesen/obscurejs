#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var track = function(tracking) {
    return function tracker() {
        // Must transform the arguments sent in into an array which
        // .apply sends as arguments to the function
        var args = Array.prototype.slice.call(arguments);
        tracking.apply(this, args);

        // tracker.called is only falsy, when 0 or undefined here
        tracker.called = (tracker.called || 0) + 1;
    }
}

console.log = track(console.log);

console.log('message1');
console.log('message2');
console.log('message3');

console.log(console.log.called);// 3