#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

console.log('test', typeof Symbol !== 'undefined')
if (typeof Symbol !== 'undefined') {
    console.log('Using the base Symbol object:');

    var test1 = Symbol('test1'),
        test2 = Symbol('test1');

    console.log(test1);// Symbol(test1)
    console.log(Symbol('foo') === Symbol('foo'));// false

    var object = {};
    object[test1] = 'value1';
    object[test2] = 'value2';
    console.log(object[test1], object[test2])// "value1" "value2"

    // Using the global symbol registry
    var symbolForTest = function() {
        return Symbol.for('test2');
    };

    var test2 = symbolForTest();
    console.log(Symbol.for('test2'));// "Symbol(test2)""
    console.log(Symbol.keyFor(test2));// "test2"
} else {
    console.log('This environment has no base Symbol object');
}

// A custom symbol object
console.log('\nUsing a simulated Symbol object:');

var Symbol2 = (function() {
    var symbolIncrement = 0,
        propertyPrefix = 'symbol2_custom_override_property_',
        globalSymbolRegistry = {};
    
    var _Symbol = function(description) {
        var _Symbol = function(increment) {
            var self = {};

            self.description = function() {
                return 'Symbol(' + description + ')';
            }

            self.toString = function() {
                return propertyPrefix + increment;
            };

            return self;
        };
        return _Symbol(symbolIncrement += 1);
    };

    _Symbol.for = function(key) {
        if (globalSymbolRegistry[key]) {
            return globalSymbolRegistry[key];
        }

        globalSymbolRegistry[key] = _Symbol(key);
        return globalSymbolRegistry[key];
    };

    _Symbol.keyFor = function(symbol) {
        for (key in globalSymbolRegistry) {
            if (globalSymbolRegistry[key].toString() === symbol.toString()) {
                return key;
            }
        }
        // return undefined when not found
    };

    return _Symbol;
})();

var test1 = Symbol2('test1'),
    test2 = Symbol2('test3');

console.log(test1.description());// Symbol(test1)
console.log(Symbol2('foo') === Symbol2('foo'));// false

var object = {};
object[test1] = 'value1';
object[test2] = 'value2';
console.log(object[test1], object[test2])// "value1" "value2"

// Using the global symbol registry
var symbolForTest = function() {
    return Symbol2.for('test2');
};

var test2 = symbolForTest();
console.log(Symbol2.for('test2').description());// "Symbol(test2)""
console.log(Symbol2.keyFor(test2));// "test2"