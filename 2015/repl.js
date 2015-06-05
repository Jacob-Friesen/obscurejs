#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var Transform = require('stream').Transform;

// Simply by creating a reference instead of using it directly, eval will write to the global space:
var globalEval = eval;

var evalIt = new Transform();
evalIt._transform = function(chunk, __, done) {
    // This refers to the created stream. Since eval now writes to the global namespace any REPL variable declarations
    // will persist.
    this.push(globalEval(chunk.toString()) + '\n> ');
    done();
};

// This will be the initial '> '
process.stdout.write('> ');

process.stdin
       .pipe(evalIt)
       .pipe(process.stdout);

// For an example try entering (at each > only):
// > var add = function(x, y) { return x + y; };
// undefined
// > add(4, 5);
// 9
