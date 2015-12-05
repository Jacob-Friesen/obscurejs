#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

var cluster = require('cluster'),
    TOTAL = 10000000000;

// spawn the child processes
if (cluster.isMaster) {
    var cpus = require('os').cpus().length,
        part = TOTAL/cpus;
    for (var i = 0; i < cpus; i++) {
        let worker = cluster.fork();
        worker.send({from: (i * part) + 1, to: (i + 1) * part});

        worker.on('exit', function() {
            console.log('done counting for', worker.id);
        });
    }
// Do a count
} else if (cluster.isWorker) {
    // Process is a global object built into Node.js
    process.on('message', function(parent) {
        console.log('counting from', parent.from, 'to', parent.to);
        for (var i = parent.from; i <= parent.to; i += 1);

        process.exit();
    });
}
