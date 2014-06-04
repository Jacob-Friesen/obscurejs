#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var objectA = {
    method1: function() {
        console.log('running method 1');
    },

    method2: function() {
        console.log('running method 2');
    },

    method3: function() {
        console.log('running method 3');
    }
};

// The default way

var objectA = {
    methodPrepend: function() {
        console.log('prepend');
    },

    method1: function() {
        objectA.methodPrepend();
        console.log('running method 1');
    },

    method2: function() {
        objectA.methodPrepend();
        console.log('running method 2');
    },

    method3: function() {
        objectA.methodPrepend();
        console.log('running method 3');
    }
};

objectA.method1(); // prepend\n running method 1
objectA.method2(); // prepend\n running method 2
objectA.method3(); // prepend\n running method 3

// A better way

var decorate = function(obj, toRunFirst) {
    for (var property in obj){
        // wrap all functions
        if (typeof(obj[property]) === "function"){

             // Need to ensure that the closure scope is unique for each property
            (function(property) {
                var oldFunc = obj[property];
                obj[property] = function() {
                    toRunFirst();
                    return oldFunc.apply(null, Array.prototype.slice.call(arguments));
                }
            })(property);
        }
    }
};

var objectA = {
    methodPrepend: function() {
        console.log('prepend');
    },

    method1: function() {
        console.log('running method 1');
    },

    method2: function() {
        console.log('running method 2');
    },

    method3: function() {
        console.log('running method 3');
    }
};

decorate(objectA, objectA.methodPrepend);

objectA.method1(); // prepend\n running method 1
objectA.method2(); // prepend\n running method 2
objectA.method3(); // prepend\n running method 3