#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
; // Due to the next statement, I need a ; to finish the above statement 

// What they look like

(function(){
    console.log('hello');
})();// hello

// When this is useful

var findItem = function(toFind, toSearch) {
    var path = '',
        message = null;
    (function inObject(toCheck, path){
        // For simplicity, assuming primitives will be searched for only
        if (toCheck === toFind)
           message = 'Found ' + toFind + ' at: ' + path;
        else {
            for (name in toCheck)
                inObject(toCheck[name], path + name + '->');
        }
    })(toSearch, '');

    if (message)
        console.log(message.slice(0, -2));
    else
        console.log(toFind, 'not found');
};

var categories = {
    item1: {
        a: 3,
        b: 1,
        c: 2
    },
    item2: {
        d: 5,
        e: 6,
        f: 7
    },
    item3: {
        g: 9,
        h: 8,
        i: 10
    }
};

findItem(3, categories);// Found 3 at: item1->a
findItem(2, categories);// Found 2 at: item1->c
findItem(6, categories);// Found 6 at: item2->e
findItem(10, categories);// Found 10 at: item3->i
findItem(11, categories);// 11 not found

// Compared to defining a seperate function

var findItem = function(toFind, toSearch) {
    var path = '',
        message = null;

    var message = inObject(toFind, toSearch, path);

    if (message)
        console.log(message.slice(0, -2));
    else
        console.log(toFind, 'not found');
};

var inObject = function(toFind, toCheck, path){
    if (toCheck === toFind)
       return 'Found ' + toFind + ' at: ' + path;

    for (name in toCheck){
        var message = inObject(toFind, toCheck[name], path + name + '->');
        if (message)
            return message;
    }
};


findItem(3, categories);
findItem(2, categories);// (same results)
findItem(6, categories);
findItem(10, categories);
findItem(11, categories);