#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The default way

var a = function(callback){
    console.log('start');

    callback('result1');
}

var b = function(msg, callback){
    console.log(msg);

    callback('result2');
}

a(function(result1){
    b(result1, function(result2){
        console.log(result2); 
    });
});// start, result1, result2

// A cleaner way

var order = function _order(start, toRun) {
    // Collect the functions to be run
    toRun = (toRun && toRun.length > 0) ? toRun : [start];
    if (toRun.length > 0){
        toRun.push(start);
    }

    return {
        // Wrap each of them in an object that collects the functions and
        // can execute them correctly (_orders return)
        then: function(callback) {
            return _order(callback, toRun);
        },

        // 
        finish: function _finish(){
            // First order results in one duplicate
            toRun.shift();

            (function run(toRun) {
                // Array.prototype.slice.call transforms arguments into an array
                var args = Array.prototype.slice.call(arguments, 1);
                var toSend = (args.length > 0) ? args : [];

                // Give the function about to call a callback that calls the
                // function after that with the results
                toSend.push(function(){
                    toRun.shift();

                    // apply sends the array as arguments to the function
                    run.apply(null, [toRun].concat(
                       Array.prototype.slice.call(arguments) ));
                    });

                // Keep on calling the functions with the constructed args until
                // at the final function
                if (toRun.length > 1){
                    toRun[0].apply(null, toSend);
                } else {
                    toRun[0].apply(null, args);
                }
            })(toRun);
        }
    }
}

order(a).then(b).then(function(msg){
    console.log(msg);
}).finish();