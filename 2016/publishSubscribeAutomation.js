#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Basic publish-subscribe:');

var Publisher = function() {
  var self = {
    subscribers: []
  };

  self.subscribe = function(callback) {
    self.subscribers.push(callback);
  };

  self.publish = function(data) {
    self.subscribers.forEach(function(callback) {
      callback(data);
    });
  };

  return self;
}
var publisher = Publisher();

// Simulate a set of data being returned over time
var serverStream = function(callback) {
  Array.apply(null, { length: 5 }).forEach(function(unused, index) {
    var ms = index * 500
    setTimeout(function() {
      callback('data-piece: ' + ms + ' ms');
    }, ms);
  });
};

serverStream(publisher.publish);

// Simulate components being registered over time.
publisher.subscribe(function(data) {
  console.info('subscribe from part 1', data);
});
setTimeout(function() {
  publisher.subscribe(function(data) {
    console.info('subscribe from part 2', data);
  });
}, 1000);
// subscribe from part 1 data-piece: 0 ms
// subscribe from part 1 data-piece: 500 ms
// subscribe from part 1 data-piece: 1000 ms
// subscribe from part 1 data-piece: 1500 ms
// subscribe from part 2 data-piece: 1500 ms
// subscribe from part 1 data-piece: 2000 ms
// subscribe from part 2 data-piece: 2000 ms

setTimeout(function() {
  console.log('Multi-message publish-subscribe:');

  var messageSet1 = function(callback) {
    Array.apply(null, { length: 3 }).forEach(function(unused, index) {
      setTimeout(function() {
        callback('Hello ' + index);
      }, index * 500);
    });
  };

  var messageSet2 = function(callback) {
    Array.apply(null, { length: 3 }).forEach(function(unused, index) {
      setTimeout(function() {
        callback('World ' + index);
      }, index * 500);
    });
  };

  var MessageBox = function() {
    var self = {
      publishers: []
    };

    self.streams = function(streams) {
      self.publishers = [];
      streams.forEach(function(stream, index) {
        self.publishers.push(Publisher());
        stream(self.publishers[index].publish);
      });
    };

    self.subscribeTo = function(index, callback) {
      return self.publishers[index].subscribe(callback);
    }

    return self;
  };
  var messageBox = MessageBox();

  // Use a trivial example to preserve clarity
  messageBox.streams([messageSet1, messageSet2]);

  messageBox.subscribeTo(0, function(data) {
    console.info('subscribe from part 1B', data);
  });
  messageBox.subscribeTo(1, function(data) {
    console.info('subscribe from part 2B', data);
  });
}, 2500);
// subscribe from part 1B Hello 0
// subscribe from part 2B World 0
// subscribe from part 1B Hello 1
// subscribe from part 2B World 1
// subscribe from part 1B Hello 2
// subscribe from part 2B World 2


