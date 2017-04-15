#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"
'use strict';

console.log('First 2 lines of output example:');

// From the command: df -h
const commandResult = '' +
'Filesystem      Size   Used  Avail Capacity iused      ifree %iused  Mounted on\n' +
'/dev/disk1     233Gi  202Gi   30Gi    87% 2143375 4292823904    0%   / \n' +
'devfs          186Ki  186Ki    0Bi   100%     644          0  100%   /dev \n' +
'map -hosts       0Bi    0Bi    0Bi   100%       0          0  100%   /net \n' +
'map auto_home    0Bi    0Bi    0Bi   100%       0          0  100%   /home \n' +
'/dev/disk0s3   620Mi  553Mi   66Mi    90%      71 4294967208    0%   /Volumes/Recovery HD';

const parts = commandResult.split('\n', 2);

// Print the first 2 lines
console.info('Main system memory usage:\n', parts.join('\n'));
//  Filesystem      Size   Used  Avail Capacity iused      ifree %iused  Mounted on
// /dev/disk1     233Gi  202Gi   30Gi    87% 2143375 4292823904    0%   /

console.log('\nFile output reading example');

const simulatedFileInput = '' +
'name,hp,weight,brand,drive\n' +
'miata,155,2400,mazda,RW\n' + 
'elise,217,2000,lotus,RW\n' + 
'4C,237,2465,alpha romeo,RW';

var parseLine = function(line, index) {
  if (index > 0) {
    const parts = line.split(',', 3);
    return {
      name: parts[0],
      hp: parts[1],
      weight: parts[2]
    };
  }

  return {};
}

// Simulated line-by-line file stream
const formattedData = simulatedFileInput.split('\n').map(parseLine);
console.log(formattedData.slice(1));
