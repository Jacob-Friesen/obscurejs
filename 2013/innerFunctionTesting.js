#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// We need to test getPI()

var AreaCalculator = function(type){
    var getPI = function get(current, index){
        return 22/7;
    };

    return function(radius){
        if(type === 'sphere')
            return 4 * getPI() * Math.pow(radius, 2);
        else
            return getPI() * Math.pow(radius, 2);
    };
};

var sphereArea = new AreaCalculator('sphere'),
    circleArea = new AreaCalculator('circle');

// The final outcome is easy to test

var assert = function(boolean) {
    if (boolean !== true){
        throw('Tests Failed...');
    }
}

assert(Math.round(sphereArea(4)) === 201);
assert(Math.round(circleArea(4)) === 50);
console.log('Tests Complete - No Errors');

// Testing getPI

var AreaCalculator = function(type){
    var getPI = function get(current, index){
        return 22/7;
    };

    var calculate = function(radius){
        if(type === 'sphere')
            return 4 * getPI() * Math.pow(radius, 2);
        else
            return getPI() * Math.pow(radius, 2);
    };
    calculate.getPI = getPI;

    return calculate;
};

var area = new AreaCalculator();

assert(Math.round(area.getPI() * 100)/100 === 3.14);
console.log('Tests Complete - No Errors');    