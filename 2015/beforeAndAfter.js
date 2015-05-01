#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var before = function(times, callback) {
    var called = 0;
    return function() {
        if (called < times) {
            callback.apply(this, arguments);
        }

        called += 1;
    };
};

var simulateClicksOn = function(callback, times) {
    setTimeout(function() {
        callback();

        if (times > 0) {
            simulateClicksOn(callback, times - 1);
        }
    }, 100);
};

simulateClicksOn(before(4, function() {
    console.log('running click event');
}), 10);
// "running click event" 4 times

// Creating a before and after

var clickNum = function(isAfter) {
    return function(times, callback) {
        var called = isAfter ? 0 : 1;// after is ONLY after times calls
        return function() {
            if ((called > times) === isAfter) {
                callback.apply(this, arguments);
            }

            called += 1;
        };
    };
};

var before = clickNum(false),
    after = clickNum(true);

simulateClicksOn(before(4, function() {
    console.log('running click event2');
}), 10);
// "running click event2" 4 times

simulateClicksOn(after(4, function() {
    console.log('running click event3');
}), 10);
// "running click event3" 6 times after it has been called 4 times
