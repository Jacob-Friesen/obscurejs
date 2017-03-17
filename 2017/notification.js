#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

const icon =  'http://68.media.tumblr.com/avatar_312c3fcd0b36_64.png';

const delayedNotifcation = function() {
  setTimeout(function() {
    new Notification("Delayed notification", {
      icon: icon
    });
  }, 2000);
};

const pictureNotification = function() {
  const notification = new Notification("Space Shark", {
    icon: icon,
    body: 'Click this, navigate away then wait 2 seconds',
    image: 'http://i.onionstatic.com/avclub/5739/43/16x9/640.jpg'
  });
  
  notification.onclick = delayedNotifcation;
};

if (typeof Notification !== 'undefined') {
  const notification = Notification.requestPermission(function(permission) {
    // If the user accepts, let's create a notification
    if (permission === "granted") {
      const notification = new Notification("Hello!", {
        icon: icon,
        body: 'Click this to show a space picture'
      });

      notification.onclick = pictureNotification;
    }
  });
} else {
  console.log('Your environment has no support for the Notifications API.');
}
