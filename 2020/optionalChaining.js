'use strict';

console.info('Manual chain checking:');

function printShortUrls(menu = []) {
  for (const option of menu) {
    if (option) {
      if (option.location && option.location.shortUrl) {
        console.log(option.title, ':', option.location.shortUrl);
      } else {
        console.log(option.title, ': (none)');
      }
    } else {
      console.log('(empty)');
    }
  }
}

const menu = [
  {
    title: 'Dashboard',
    location: {
      fullUrl: 'https://my-website.com/dashboard/user1',
      shortUrl: 'https://goo.gl/929okH'
    }
  },
  null,// Used to mark a menu separator
  {
    title: 'Logout',
    // No location since it redirects to a login page
  }
];

printShortUrls(menu);
// Dashboard : https://goo.gl/929okH
// (empty)
// Logout : (none)

console.info('\nManual chaining syntax:');

function printShortUrls2(menu = []) {
  for (const option of menu) {
    if (option) {
      const shortUrl = option?.location?.shortUrl || '(none)';
      console.log(option.title, ':', shortUrl);
    } else {
      console.log('(empty)');
    }
  }
}

printShortUrls2(menu);
// Dashboard : https://goo.gl/929okH
// (empty)
// Logout : (none)
