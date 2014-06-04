#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The default

var site = 'Tumblr',
    type = 'JavaScript blog',
    name = 'Obscure JavaScript'

console.log(site + '\'s best ' + type + ' is ' + 
                   name + '. Because ' + name + ' has the best interpolation advice.');

// A better way

var $$ = function() {
    var args =  Array.prototype.slice.call(arguments);
    for (var i = 1; i < args.length; i += 1)
        args[0] = args[0].split('$' + i).join(args[i]);

    return args[0];
};

console.log($$('$1\'s best $2 is $3. Because $3 has the best interpolation advice.',
                   site, type, name));