#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Firefox only
// var result = [2 * x for each (x in [0,1,2,3,4,5,6,7]) if (x * x < 5)];
// console.log(result);// [0,2,4]

// An alternative implementation

var _c = function(operation) {
    // Return a named chained object to build a query 
    return {
        in: function(collection) {
            return {
                if: function(check) {
                    var toReturn = [];

                    collection.forEach(function(element) {
                        if (check(element)){
                            toReturn.push(operation(element));
                        }
                    });

                    return toReturn;
                }
            }
        }
    }
}

var result = _c(function(x) {
    return 2 * x;
}).in([0,1,2,3,4,5,6,7]).if(function(x) {
    return x * x < 5;
});

console.log(result);// [0,2,4]
