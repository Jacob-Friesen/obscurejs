#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var Transform = require('stream').Transform,
    fs = require('fs');

var upperCase = new Transform();
upperCase._transform = function (chunk, __, done) {
    // This refers to the created stream
    this.push(chunk.toString().toUpperCase());
    done();
};

var exclamation = new Transform();
exclamation._transform = function (chunk, __, done) {
    // Keep in mind stdin appends "\n" when a line is entered
    this.push(chunk.toString().substring(0, chunk.length - 1)  + '!\n');
    done();
};

process.stdin
       .pipe(upperCase)
       .pipe(exclamation)
       .pipe(process.stdout);
