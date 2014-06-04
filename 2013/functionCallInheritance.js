#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Typical JS inheritance

var Square = function(){
    // Make sure the context of this is not lost
    var self = this;

    self.edgeLength = self.edgeLength || 5;

    self.circumference = function(){
        return self.edgeLength * 4;
    }

    return self;
}

var LargeSquare = function(){
    this.edgeLength = 10;

    return this;
}

// mixins with this

var mixin = function(constructor, mixee){
    return constructor.call(mixee);
}

var mediumSquare = new Square(),
    largeSquare = mixin(Square, new LargeSquare());

console.log(mediumSquare.circumference());// 20
console.log(largeSquare.circumference());// 40