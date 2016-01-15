#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Without using an observable

// Representing back end server state
var createAPI = function() {
  var data = ['Ca', 'Ba', 'Ma'],
      index = -1;

  return function(callback) {
    setTimeout(function() {
      callback(data[index += 1]);
    }, 300);
  };
};
var getData = createAPI();

var fromBackend = [];
var retrievalAllData = function(onComplete) {
  getData(function(result) {
    if (result !== undefined) {
      fromBackend.push(result);
      retrievalAllData(onComplete);
    } else {
      onComplete();
    }
  });
};

retrievalAllData(function() {
  fromBackend.map(function(element) {
    return element += 't';
  }).forEach(function(element) {
    console.log(element);
  });
  //Cat\n
  //Bat\n
  //Mat\n
});

// The observable wrapper

var Observable = function(originalCallback) {
  var self = {};

  self.retrievalAllData = function(callback) {
    originalCallback(function(result) {
      if (result !== undefined) {
        var transformed = self.mapPosition(result);
        callback(transformed);

        self.retrievalAllData(callback);
      }
    });
  };

  self.mapPosition = function() {};
  self.map = function(callback) {
    self.mapPosition = function(value) {
      return callback(value);
    };

    return self;
  };

  self.subscribe = function(callback) {
    self.retrievalAllData(callback);
  };

  return self;
};

// Using the observable.
var getData2 = createAPI();

Observable(getData2).map(function(element) {
  return element += 't';
}).subscribe(function(element) {
  console.log(element);
});
//Cat\n
//Bat\n
//Mat\n
