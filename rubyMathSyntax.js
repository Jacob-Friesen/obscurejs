#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

Number.prototype.to_i = function() {
    return Math.floor(this);
};

console.log((5.276).to_i());// 5

// To avoid overriding prototype

_n = function(operateOn){
    self = {}

    self.to_i = function() {
        return Math.floor(operateOn);
    };

    return self;
};

console.log(_n(5.276).to_i());// 5