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
}


var processState = function(index) {
    console.log('processing', index);
};

var throttled = throttle(processState, 1000);

;(function loopedCall(i) {
    if (i > 50) return;

    setTimeout(function() {
        throttled(i);
        loopedCall(i + 1);
    }, 100);
})(0);
