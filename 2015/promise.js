#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Nested callbacks in async operations

var actionA = function(callback) {
    setTimeout(function() {
        callback('actionA');
    }, 500);
};

var actionB = function(callback) {
    setTimeout(function() {
        callback('actionB');
    }, 500);
};

var actionC = function(callback) {
    setTimeout(function() {
        callback('actionC');
    }, 500);
};

actionA(function(action) {
    console.log('part1:' + action);

    actionB(function(action) {
        console.log('part2:' + action);

        actionC(function(action) {
            console.log('part3:' + action);

            promisesPart();
        });
    });
});
// In 500ms intervals:
// 'part1:actionA'
// 'part2:actionB'
// 'part3:actionC'

// Use the promises/futures pattern (skipping the reject function of this pattern):

var promisesPart = function() {
    console.log('Now running the promises section:');

    var Promise = function(main) {
        return function() {
            var self = {};

            self.callbacks = [];

            self.then = function(callback) {
                self.callbacks.push(callback);

                return self;
            };

            self.done = function() {
                main(function() {
                    if (self.callbacks.length > 0) {
                        var result = self.callbacks[0].apply(this, arguments);
                        var next = result || self;

                        next.callbacks = self.callbacks.slice(1);
                        next.done();
                    }
                });
            };

            return self;
        };
    };

    var actionA = new Promise(function(resolve) {
        setTimeout(function() {
            resolve('actionA');
        }, 500);
    });

    var actionB = new Promise(function(resolve) {
        setTimeout(function() {
            resolve('actionB');
        }, 500);
    });

    var actionC = new Promise(function(resolve) {
        setTimeout(function() {
            resolve('actionC');
        }, 500);
    });

    actionA().then(function(action) {
        console.log('part1:' + action);

        return actionB();
    }).then(function(action) {
        console.log('part2:' + action);

        return actionC();
    }).then(function(action) {
        console.log('part3:' + action);
    }).done();
    // In 500ms intervals:
    // 'part1:actionA'
    // 'part2:actionB'
    // 'part3:actionC'

    // Run this to check parallel runs:

    // actionB().then(function(action) {
    //     console.log('part1B:' + action);

    //     return actionA();
    // }).then(function(action) {
    //     console.log('part2B:' + action);

    //     return actionC();
    // }).then(function(action) {
    //     console.log('part3B:' + action);
    // }).done();
};
