#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var firstName = 'Wealth',
    lastName = 'Jefferson';

// Standard concatenated string
console.log('Standard concatenated string:');

var message = 'Hello ' + firstName + ' ' + lastName + ',\n\nAt Aramco, we realize how ';
message += 'busy your time is. Which is why we are offering you a one time';
message += 'once-in-a-lifetime discount on new Jet Planes.';

console.log(message);
// Hello Wealth Jefferson,...

// Join string
console.log('\nJoin string:');

var message = ['Hello ', firstName, ' ', lastName, ',\n\nAt Aramco, we realize how ',
               'busy your time is. Which is why we are offering you a one time',
               'once-in-a-lifetime discount on new Jet Planes.'].join('');

console.log(message);
// Hello Wealth Jefferson,...

// Template literal
console.log('\nTemplate string:');

var message = `
Hello ${firstName} ${lastName},
                
At Aramco, we realize how busy your time is. Which is why we are
offering you a one time once-in-a-lifetime discount on new Jet Planes`.trim();

console.log(message);
// Hello Wealth Jefferson,...