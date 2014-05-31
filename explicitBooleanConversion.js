#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Example 1

var report = function(fullReport){
    // Any type of resource call
    fakeCall('/an/api/data', {
        fullReport: Boolean(fullReport)// must be either true or false
    });
}

// Represents any type of resource call, like $.ajax
var fakeCall = function(url, data){
    console.log('api called with', data.fullReport);
}

report();// api called with false
report(false);// api called with false
report(0);// api called with false

report(true);// api called with true
report(1);// api called with true
report('a value');// api called with true

// !! operator usage

var report = function(fullReport){
    // Any type of resource call
    fakeCall('/an/api/data', {
        fullReport: !!fullReport// must be either true or false
    });
}

report();// api called with false
report(false);// api called with false
report(0);// api called with false

report(true);// api called with true
report(1);// api called with true
report('a value');// api called with true