#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var options = {
    page: 0,
    number: 10,
    other: 'other'
};

// An API call without omit

var apiCall = function(options) {
    console.log('calling with', options);
};

delete options.other;
apiCall(options);

// Also, note that the delete modifies in place
console.log('options are now', options) 

// Omit
console.log('With Omit')

var omit = function(obj, key) {
    var newObj = {};

    for (var name in obj){
        if (name === key) continue;
        newObj[name] = obj[name];
    }

    return newObj;
};

options = {
    page: 0,
    number: 10,
    other: 'other'
};

apiCall(omit(options, 'other'));
console.log('options are now', options);
