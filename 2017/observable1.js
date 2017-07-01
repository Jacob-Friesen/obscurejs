#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('Now handling click events directly with an event for 3s:');

// simulate click events (so this can be run without a browser)
let hadDocument = true;
if (typeof document === 'undefined') {
  hadDocument = false;

  const callbacks = {};
  var document = {};// var since this needs to move this out of the block scope.
  document.addEventListener = function(type, callback) {
    callbacks[type] = callbacks[type] || [];
    callbacks[type].push(callback);
  };

  document.removeEventListener = function(type, callback) {
    callbacks[type] = callbacks[type] || [];
    callbacks[type] = callbacks[type].filter(function(typeCallback) {
      return typeCallback !== callback;
    });
  };

  let clickCount = 0;
  document.click = function() {
    const positions = [10, 20, 30];
    const position = positions[clickCount % positions.length];
    const callWith = { clientX: position, clientY: position };
    clickCount += 1;

    callbacks.click = callbacks.click || [];
    callbacks.click.forEach(function(callback) {
      callback(callWith);
    });
  };
}

function handleClick(e) {
  console.log('From pure events:', e);
};
document.addEventListener('click', handleClick);
setTimeout(function() {
  document.removeEventListener('click', handleClick);
  demonstrateObservable();
}, 3000);

if (hadDocument === false) {
  console.log('Your current environment does not have a DOM.');
  console.log('Simulating click events about every 1 second. CTRL+C to close.');
  function simulateClick() {
    setTimeout(function() {
      document.click();
      simulateClick();
    }, 900);
  };
  simulateClick();
};

const Observable = (function() {
  let subscribes = [],
    handler = function() {},
    eventObject = {},
    eventType = null;

  const self = {
    fromEvent: function(_eventObject, _eventType) {
      handler = function(e) {
        subscribes.forEach(function(subscribe) {
          subscribe(e);
        });
      };
      eventObject = _eventObject;
      eventType = _eventType;
      eventObject.addEventListener(eventType, handler);

      return self;
    },

    subscribe: function(callback) {
      subscribes.push(callback);
      return Observable;
    },

    unsubscribe: function() {
      eventObject.removeEventListener(eventType, handler);
    }
  };

  return self;
})();

function demonstrateObservable() {
  console.log('\nNow handling click events with an Observable for 3s:');

  const clicks = Observable.fromEvent(document, 'click');
  clicks.subscribe(function(e) {
    console.log('From observable:', e);
  });
  setTimeout(clicks.unsubscribe, 3000);
};
