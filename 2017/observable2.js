#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

if (typeof document === 'undefined') {
  throw(new Error('This code can only be run in a browser.'));
}

// Based on the previous observable generation in observable1.js
const Observable = (function() {
  function createObservable(eventObject, eventType) {
    let subscribes = [],
      filters = [];


    handler = function(e) {
      for (let index = 0; index < filters.length; index += 1) {
        if (filters[index](e) === false) {
          return false;
        }
      }

      subscribes.forEach(function(subscribe) {
        subscribe(e);
      });
    };
    eventObject.addEventListener(eventType, handler);

    const self = {
      subscribe: function(callback) {
        subscribes.push(callback);
        return Observable;
      },

      unsubscribe: function() {
        eventObject.removeEventListener(eventType, handler);
      },

      filter: function(callback) {
        filters.push(callback);
        return self;
      },

      eventObject: eventObject,
      eventType: eventType,
    };
    return self;
  }

  const self = { 
    fromEvent: createObservable,
    zip: function() {
      const allArgs = [].slice.call(arguments);
      const observables = allArgs.slice(0, -1);
      const callback = allArgs.slice(-1)[0];
      const subscribeCounts = [];
      const subscribeResults = [];
      let subscribeIndex = 1;
      let subscribes = [];

      const selfInner = {};

      function checkCallback() {
        for (let index = 1; index < subscribeCounts.length; index += 1) {
          if (subscribeCounts[index] !== subscribeIndex) {
            return false;
          }
        }

        const result = callback.apply(this, subscribeResults);
        subscribes.forEach(function(subscribe) {
          subscribe(result);
        });

        subscribeIndex += 1;
      };

      observables.forEach(function(observable, index) {
        subscribeCounts[index] = 0;

        self.fromEvent(observable.eventObject, observable.eventType).subscribe(function(e) {
          subscribeCounts[index] = subscribeIndex;
          subscribeResults[index] = e;
          checkCallback();
        });
      });

      selfInner.subscribe = function(callback) {
        subscribes.push(callback);
        return self;
      };

      selfInner.unsubscribe = function() {
        subscribes = [];
      };

      // For simplicity the return will not be a observable, that would take another large set of additions
      return selfInner;
    }
  };

  return self;
})();

// Without observables

const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');

const clicked = [false, false];
const results = [];
let printedMessage = false;

function bothClicked() {
  if (clicked [0] === true && clicked [1] === true && printedMessage === false) {
    console.log('Both of the elements have been clicked (pure)', results);
    printedMessage = true;
  }
}

function handleClickLeft(e) {
  // -2 to handle borders
  if (e.offsetX > (leftBox.offsetWidth - 2)/2) {
      console.log('Left box clicked:', e);
      
      clicked[0] = true; 
      results[0] = e;
      bothClicked();
  }
};
leftBox.addEventListener('click', handleClickLeft);

function handleClickRight(e) {
  if (e.offsetX > (leftBox.offsetWidth - 2)/2) {
      console.log('Right box clicked:', e);
      
      clicked[1] = true;
      results[1] = e;
      bothClicked();
  }
};
rightBox.addEventListener('click', handleClickRight);

// With observables

const clicksLeft = Observable.fromEvent(leftBox, 'click');
clicksLeft.filter(function (e) {
  return e.offsetX > (leftBox.offsetWidth - 2)/2;
}).subscribe(function(e) {
  console.log('Left box clicked (observable):', e);
});

const clicksRight = Observable.fromEvent(rightBox, 'click');
clicksRight.filter(function (e) {
  return e.offsetX > (rightBox.offsetWidth - 2)/2;
}).subscribe(function(e) {
  console.log('Right box clicked (observable):', e);
});

const clicks = Observable.zip(clicksLeft, clicksRight, function(eLeft, eRight) {
  return [eLeft, eRight];
});
clicks.subscribe(function(results) {
  console.log('Both of the elements have been clicked (observable)', results);
  clicks.unsubscribe();
});

