#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// When 'this' refers to the global scope:

console.log(this);// global in browsers, but is {} in Node.js.

var a = 'test';
console.log(this.a);// 'test' in browsers, undefined in Node.js

var function1 = function() {
    console.log(this);
};

function1();// (All properties in global)

function function1Declaration() {
    console.log(this);
};
function1Declaration();// (All properties in global)

// When 'this' refers to the function itself:

var function2 = function() {
    this.property1 = 'test';

    console.log(this);
};

new function2();// { property1: 'test' }

function function2Declaration() {
    this.property2 = 'test';

    console.log(this);
};
new function2Declaration();// { property2: 'test' }

var object1 = {
    property1: 'test',
    function1: function() {
        console.log(this);
    }
};
object1.function1();// { property1: 'test', function1: [Function] }


// When 'this' refers to an externally defined context

var function3 = function() {
    console.log(this);
};

function3.call({property3: 'test3'});// { property3: 'test3' }
function3.apply({property4: 'test4'});// { property4: 'test4' }

var function3Bound = function3.bind({property5: 'test5'});
function3Bound();// { property5: 'test4' }

// When 'this' refers to the element of an event handler. Browser only. For example, if there is the element:
// <div id='test'></div>

if (typeof window !== 'undefined') {
    var ele = document.getElementById('test');
    ele.addEventListener('click', function () {
        console.log(this);// <div id=​"test">​</div>
    });

    ele.click();

    // Except when the event handler is added to the object, then it is global (provided that doClick is used without
    // any of the *this* modifiers):
    // <div id='test2' onClick='doClick()'></div>

    var doClick = function () {
        console.log(this);// window object
    };
    document.getElementById('test2').click();

    // If the doClick function is not global then it will refer to the object it is part of without *this* modifiers:
    var obj = {
        doClick: function () {
            console.log(this);// window object
        }
    }
    document.getElementById('test3').click();

} else {
    console.log('The event listener example can only be run in browsers (or browser like environments)');
}