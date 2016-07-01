#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Without assignTo:');

var apiRequest = function(name, callback) {
  // Simulate a server call.
  setTimeout(function() {
    return callback('car', name === 'mx-5' ? 'roadster' : 'other');
  }, 500);
};

var updateObject = function(callback) {
  var car = {
    name: 'mx-5',
    type: null,
    subType: null
  };

  apiRequest(car.name, function(name, type) {
    car.type = name;
    car.subType = type;

    return callback(car);
  });
};

updateObject(function(car) {
  console.log(car);
  // { name: 'mx-5', type: 'car', subType: 'roadster' }

  withAssignTo();
});

////// assignTo

var assignTo = function(/* obj, properties..., callback */) {
  var args = Array.prototype.slice.call(arguments),
      obj = args[0],
      properties = args.slice(1, -1),
      callback = args.slice(-1)[0];

  return function() {
    var innerArgs = Array.prototype.slice.call(arguments);
    innerArgs.forEach(function(arg, index) {
      obj[properties[index]] = arg;
    });

    return callback(obj);
  };
};

//////

var withAssignTo = function() {
  console.log('\nWith assignTo:');

  updateObject = function(callback) {
    var car = {
      name: 'mx-5',
      type: null,
      subType: null
    };

    apiRequest(car.name, assignTo(car, 'type', 'subType', callback));
  };

  updateObject(function(car) {
    console.log(car);
    // { name: 'mx-5', type: 'car', subType: 'roadster' }
  });
};
