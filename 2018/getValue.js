'use strict';

const _ = require('lodash');

function getPageMenu() {
  return [
    {
      title: 'Dashboard',
      location: {
        fullUrl: 'https://my-website.com/dashboard/user1',
        shortUrl: 'https://goo.gl/929okH'
      }
    },
    {
      title: 'Logout',
      // No location since it redirects to a login page
    }
  ]
}

console.log('Complex object checking with "&&":');

// Will cause error
// function printAllPageLinks() {
//   const pageMenuData = getPageMenu();
//   for (let page of pageMenuData) {
//     console.log(page.location.fullUrl);
//   }
// }
function printAllPageLinks() {
  const pageMenuData = getPageMenu();
  for (let page of pageMenuData) {
    console.log(page.title, page.location && page.location.fullUrl);
  }
}

printAllPageLinks();
// Dashboard https://my-website.com/dashboard/user1
// Logout undefined

console.log('\nComplex object checking with _.get:');

function printAllPageLinks2() {
  const pageMenuData = getPageMenu();
  for (let page of pageMenuData) {
    console.log(page.title, _.get(page, 'location.fullUrl'));
  }
}

printAllPageLinks2();
// Dashboard https://my-website.com/dashboard/user1
// Logout undefined

// JS Proposal: https://github.com/tc39/proposal-optional-chaining
// function printAllPageLinks3() {
//   const pageMenuData = getPageMenu();
//   for (let page of pageMenuData) {
//     console.log(page.title, page.?location.?fullUrl);
//   }
// }
// printAllPageLinks3();
