'use strict';

console.log('Getting ID from "http://my-website.com/after-login?id=7061I000006qORYQA9":');

const url = new URL('http://my-website.com/after-login?id=7061I000006qORYQA9');
console.log(url.searchParams.get('id'));
// 7061I000006qORYQA9

console.log('\nGetting ID from "/after-login?id=7061I000006qORYQA9":');

const fakeDomain = 'http://fake-website.com/';
const url2 = new URL('/after-login?id=7061I000006qORYQA9', fakeDomain);
console.log(url2.searchParams.get('id'));
// 7061I000006qORYQA9

console.log('\nRemoving ID from "http://my-website.com/after-login?id=7061I000006qORYQA9":');

const url3 = new URL('http://my-website.com/after-login?id=7061I000006qORYQA9&id2=test-1');
url3.searchParams.delete('id');
console.log(url3.href);
// http://my-website.com/after-login?id2=test-1

// For browsers only
// const url4 = new URL(window.location.href);
// url4.searchParams.delete('id');
// window.history.replaceState({}, document.title, url4.href);
