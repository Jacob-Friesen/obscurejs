#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The data

var vehicles = [
  {name: 'mx-5', type: 'car', hp: 152},
  {name: 'ninja', type: 'motorcyle', hp: 300},
  {name: 'enzo', type: 'car', hp: 660}
];

// The generic chainer

var chainify = function(methods) {
    return function chainer(collection) {
        var self = {};

        self.value = function() {
            return collection;
        };

        // Make each of the chained methods
        for (var methodName in methods) {
            (function(oldMethod) {
                self[methodName] = function() {
                    var argArray = Array.prototype.slice.call(arguments);

                    // Recreate a new chain with the modified data.
                    return chainer(oldMethod.apply(this, [collection].concat(argArray)));
                }
            })(methods[methodName])
        }

        return self;
    };
};

// The example

var _ = chainify({
    pluck: function(collection, field) {
        return collection.map(function(element) {
            return element[field];
        });
    },
    map: function(collection, callback) {
        return collection.map(callback);
    }
});

var result = _(vehicles).pluck('hp').map(function(hp) {
  return hp + 'hp';
}).value();

console.log(result);// [ '152hp', '300hp', '660hp' ]
