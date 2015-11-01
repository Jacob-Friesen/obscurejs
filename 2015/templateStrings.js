#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// ES6 Implementation
console.log('Using the ES6 implementation:');

(function() {
    var a = 5,
        b = 10;

    console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
    // "Fifteen is 15 and
    // not 20."
})();

// Custom Implementation
console.log('\nUsing a custom implementation:');

var template = function(string, variables) {
    // Make a body the evaluates all expressions.
    var parse = function(toParse) {
        var parts = toParse.split('${');
        if (parts.length > 1) {
            var quoteBefore = parts[0] + '"+(' + parts.slice(1).join('${');
            parts = quoteBefore.split('}');
            return parse(parts[0] + ')+"' + parts.slice(1).join('}'));
        }

        return toParse;
    };
    // The newlines should be used in the string and not used to constuct the body.
    var body = string.split('\n').join('\\n');
    body = 'return "' + parse(body) + '"';

    // Pass in all the argument names and add the new function body.
    var keys = Object.keys(variables);
    var evaluate = Function.apply(null, keys.concat(body));
    
    // Call the generated function with the sent in values.
    return evaluate.apply(null, keys.map(function(key) {
        return variables[key];
    }));
};

// Put in in a function to test that it works with non global variables
(function() {
    var a = 5,
        b = 10;

    console.log(template('Fifteen is ${a + b} and\nnot ${2 * a + b}.', {
        a: a,
        b: b
    }));
    // "Fifteen is 15 and
    // not 20."
})();