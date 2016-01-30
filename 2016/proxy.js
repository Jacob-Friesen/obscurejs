#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
// Make sure to run with --harmony-proxies in node.js

// Create the history tracker

var trackHistory = function(obj) {
    obj.history = [];

    // It is important not to reference the target below to avoid infinite checking/setting loops.
    return Proxy.create({
        get: function (target, property) {
            obj.history.push('GET ' + property);
            return obj[property];
        },

        set: function (target, property, value) {
          obj.history.push('SET ' + property + ' = ' + value);
          obj[property] = value;
          return true;// If true is not returned a type error is thrown
        }
    });
};

// Run it on some getters and settings

var test = trackHistory({
  property1: 'value1'
});

console.log('test.property1:', test.property1);// test.property1: value1
test.property2 = 'value2';
console.log('test.property2:', test.property2);// test.property2: value2

console.log(test.history.join('\n'));
// GET property1
// SET property2 = value2
// GET property2
// GET history