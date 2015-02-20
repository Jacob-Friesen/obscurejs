#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The object to search through

var car = {
    name: 'mx-5',
    parts: {
        wheels: 4,
        engine: {
            hp: 167,
            displacement: 2,// L
        },
        weight: 3122
    },
    type: car
};

// The standard approach

var shortSpec = [];
shortSpec.push(car.name);
shortSpec.push(car.parts.weight);
shortSpec.push(car.parts.engine.hp);

console.log(shortSpec);// [mx-5, 3122, 167]

// Using a Monad; Increases maintainability...

var Find = function(wait) {
    return {
        // (nextLevel == bind)
        nextLevel: function(callback) {
            return Find(callback.call(this, wait));
        }
    };
};

var shortSpec = [];
Find(car).nextLevel(function(section) {
    shortSpec.push(section.name);
    return section.parts;
}).nextLevel(function(section) {
    shortSpec.push(section.weight);
    return section.engine;
}).nextLevel(function(section) {
    shortSpec.push(section.hp);
});

console.log(shortSpec);// [mx-5, 3122, 167]

// ...for example, if 'parts' changes to 'components':

var modifiedCar = {
    name: 'mx-5',
    components: {
        wheels: 4,
        engine: {
            hp: 167,
            displacement: 2,// L
        },
        weight: 3122
    },
    type: car
};

shortSpec = [];
Find(modifiedCar).nextLevel(function(section) {
    shortSpec.push(section.name);
    return section.components;
}).nextLevel(function(section) {
    shortSpec.push(section.weight);
    return section.engine;
}).nextLevel(function(section) {
    shortSpec.push(section.hp);
});

console.log(shortSpec);// [mx-5, 3122, 167]

