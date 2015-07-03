#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// The object to search from
var doc = {};
doc.name = 'Test1',
doc.children = [
    {
        name: 'child1',
        parent: doc
    },
    {
        name: 'child2',
        parent: doc
    }
];

// A function is passed one of their children and needs to get the parent name

var someFunction = function(ele) {
    console.log(ele.parent.name);
};

someFunction(doc.children[0]);// 'Test1'
someFunction(doc.children[1]);// 'Test1'
