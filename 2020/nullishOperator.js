'use strict';
// Only works with latest Chrome/Firefox currently as of February 2020
// This ASSUMES the value passed into message is a string of some sort for demonstration purposes

console.log('Inconsistent message function (logical or defaults):');

function message(contents) {
  console.log('Message:', String(contents || '(No Message)'));
}

message();
// Message: (No Message)
message('Some contents');
// Message: Some contents
message('');
// Message: (No Message)
message(new String());
// Message:
message(new String('Some contents'));
// Message: Some contents

console.log('\nCorrect Message function (explicit logic):');

function message2(contents) {
  console.log('Message:', String((contents || contents === '') ? contents : '(No Message)'));
}

message2();
// Message: (No Message)
message2('Some contents');
// Message: Some contents
message2('');
// Message:
message2(new String());
// Message:
message2(new String('Some contents'));
// Message: Some contents

console.log('\nCorrect Message function (nullish operator):');

function message3(contents) {
  console.log('Message:', String(contents ?? '(No Message)'));
}

message3();
// Message: (No Message)
message3('Some contents');
// Message: Some contents
message3('');
// Message:
message3(new String());
// Message:
message3(new String('Some contents'));
// Message: Some contents
