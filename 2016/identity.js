#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var identity = function(arg1) {
  return arg1;
};

// Without using the identity function
console.log('Without using the identity function:');

var BaseAPI = function() {
  var self = {};

  self.baseUrl = '/test/:location';

  self.getUrl = null;// Set by child;

  self.send = function(callback) {
    var url = this.baseUrl;
    if (typeof this.getUrl === 'function') {
      url = this.getUrl(url);
    }

    // Simulate API call by making the code asynchronous.
    setTimeout(function() {
      callback('Called with ' + url)
    }, 200);
  };

  return self;
};

var CarApi = function() {
  var self = Object.create(BaseAPI());

  self.getUrl = function(url) {
    return url.replace(':location', 'cars');
  }

  return self;
};

var api = CarApi();
api.send(function(resultMessage) {
  console.log(resultMessage);// Called with /test/cars

  part2();
});

var part2 = function() {
  // Using the identity function
  console.log('\nUsing the identity function:');

  var BaseAPI = function() {
    var self = {};

    self.baseUrl = '/test/:location';

    self.getUrl = null;// Set by child;

    self.send = function(callback) {
      var url = this.getUrl(this.baseUrl);

      // Simulate API call by making the code asynchronous.
      setTimeout(function() {
        callback('Called with ' + url)
      }, 200);
    };

    return self;
  };

  var CarApi = function() {
    var self = Object.create(BaseAPI());

    self.getUrl = function(url) {
      return url.replace(':location', 'cars');
    }

    return self;
  };

  var api = CarApi();
  api.send(function(resultMessage) {
    console.log(resultMessage);// Called with /test/cars
  });
};
