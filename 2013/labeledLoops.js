#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var find = [1,3,3,7],
    graph = [
        [6,2,2,7,7,3,3,4,0,4,6,8,7,2,5,9,2,6,4,0,5,1,4,0,4,8,8,6,3,9],
        [9,4,3,5,1,5,2,2,6,6,2,1,3,3,7,1,7,4,4,3,0,8,7,5,2,7,7,1,7,3],
        [8,2,1,6,6,7,9,8,1,2,5,0,0,5,2,2,5,6,8,2,7,0,8,0,3,4,5,9,7,1]
    ];

var findIndex = 0;
outer: for (var i = 0; i < graph.length; i += 1){
    for (var j = 0; j < graph[i].length; j += 1){
        if (find[findIndex] === graph[i][j])
            findIndex += 1;
        else
            findIndex = 0;

        if (findIndex === find.length){
            // Using commas for instead of plusses, this way it preserves finds brackets
            console.log('first occurrence of ', find, ' located in array ', i, ' at ', j);    
            break outer;
        }
    }
}