#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

function a() {
    console.log('calling a');
}

var b = function() {
    console.log('calling b');
}

a();// calling a
b();// calling b

// How they differ

function c() {
    console.log('calling c');
}

c();// calling modified c

function c() {
    console.log('calling modified c');
}

// VS

var c = function() {
    console.log('calling c');
}

c();// calling c

c = function() {
    console.log('calling modified c');
}

// Just make sure that some weird cases do not affect the results

var d = function() {
    console.log('calling d');
}

d();// calling d

function d() {
    console.log('calling modified d');
}

// case 2

function e() {
    console.log('calling e');
}

e();// calling d

var e = function() {
    console.log('calling modified e');
}
