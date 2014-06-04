#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

console.log(Array(16).join("You would think..." - 1).slice(0, -1) + " Batman!");
