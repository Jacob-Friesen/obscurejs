#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

Function.prototype.toString = function() {
    // The function that is being toString()d
    this();

	// Need to return a primitive
	return '';
}

var hurrah = function() {
    console.log('hurrah');
}

hurrah + hurrah + hurrah;// hurrah\n hurrah\n hurrah\n

// Still some evalution problems though...

var hurrah = function(punctuation) {
    console.log('hurrah' + (punctuation || ''));
}

hurrah + hurrah('!') + hurrah;// hurrah!\n hurrah\n hurrah\n