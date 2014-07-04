#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

// Original non-private implementation

var remoteFile = function(protocol) {
    var self = this;
    self.protocol = protocol;// Make it changeable

    if (protocol !== 'http' && protocol !== 'ftp'){
        throw(protocol + " is not supported");
    }

    self.upload = function(file) {
        console.log('uploading', file, 'using', self.protocol);
    };

    self.download = function(remoteLocation, localLocation) {
        console.log(
            'Downloading from', remoteLocation,
            'to', localLocation,
            'using', self.protocol
        );
    };

    return self;
};

var remote = remoteFile('http');
remote.upload('test.csv');// Uploading test.csv using http
remote.download('/downloads/test.csv', 'new.csv'); // Downloading from...
//var remote = remoteFile('sftp');// throws an error

// Restricting access

var remoteFile = function(_protocol) {
    var self = this;
    var protocol = _protocol;

    self.upload = function(file) {
        console.log('uploading', file, 'using', protocol);
    };

    self.download = function(remoteLocation, localLocation) {
        console.log(
            'Downloading from', remoteLocation,
            'to', localLocation,
            'using', protocol
        );
    };

    self.getProtocol = function() {
        return protocol;
    }

    self.setProtocol = function(_protocol) {
        if (_protocol !== 'http' && _protocol !== 'ftp'){
            throw(_protocol + " is not supported");
        }
        protocol = _protocol;
    }

    return self;
};

var remote = remoteFile('http');
remote.upload('test.csv');// Uploading test.csv using http
remote.setProtocol('ftp');
remote.upload('test.csv');// Uploading test.csv using ftp
//remote.setProtocol('sftp');// throws an error