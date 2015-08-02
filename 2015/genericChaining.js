#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The data

var vehicles = [
  {name: 'mx-5', type: 'car', hp: 152},
  {name: 'ninja', type: 'motorcyle', hp: 300},
  {name: 'enzo', type: 'car', hp: 660}
];

// lodash chaining

var _ = function(collection) {
    return {
        pluck: function(field) {
            return _(collection.map(function(element) {
                return element[field];
            }));
        },
        map: function(callback) {
            return _(collection.map(callback));
        },
        value: function() {
            return collection;
        }
    };
};

// The example

var result = _(vehicles).pluck('hp').map(function(hp) {
  return hp + 'hp';
}).value();

console.log(result);// [ '152hp', '300hp', '660hp' ]
