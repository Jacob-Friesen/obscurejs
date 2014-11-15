#!/bin/sh
':'//; exec "$(command -v nodejs || command -v node)" "$0" "$@"
;// Statements must end before an expression.

(function() {
    // prove that using strict is not enough
    'use strict';

    // The result of reversing an operator
    var isDefined = function(variable) {
        return variable !== undefined;
    };

    var isChecked = {};
    console.log('defined?', isDefined(isChecked));// true
    console.log('defined?', isDefined(isChecked.property));// false

    // vs

    var isDefined = function(variable) {
        return variable ==! undefined;
    };

    isChecked = {};
    console.log('defined?', isDefined(isChecked));// false
    console.log('defined?', isDefined(isChecked.property));// false
})();
