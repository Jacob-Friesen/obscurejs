#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var inject = function(callback) {
    // Just make each a 1 property object for demonstration
    var services = {
        $timeout: {name: 'timeout'},
        $window: {name: 'window'}
    };

    // Find the service names to inject
    var functionString = callback + '';// Same as .toString()
    functionString = functionString.replace(/ /g, '');

    var lastPart = functionString.split('function(').slice(-1)[0];
    var args = lastPart.split('){')[0].split(',');
    
    // Send the right services in
    var toSend = [];
    args.forEach(function(serviceName) {
        toSend.push(services[serviceName]);
    });

    callback.apply(this, toSend);
};

inject(function($timeout, $window) {
    console.log($timeout.name);// 'timeout'
    console.log($window.name);// 'window'
});
