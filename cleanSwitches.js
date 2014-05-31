#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var action1 = function(){
    console.log('doing action one');
};
var action2 = function(){
    console.log('doing action two');
};
var action3 = function(){
    console.log('doing action three')
}

// Basic switch

var type = 'two';
switch(type){
  case 'one':
    action1();
    break;
  case 'two':
    action2();
    break;
  case 'three':
    action3();
}// doing action 2

// If else

var type = 'two';
if (type === 'one'){
  action1();
} else if (type === 'two'){
  action2();
} else {
  action3();
}// doing action 2

// Hash based

var type = 'two';
({
  'one': action1,
  'two': action2,
  'three': action3
})[type]();// doing action 2