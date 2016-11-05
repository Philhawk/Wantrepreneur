'use strict';

const http = require('http');
var app = require('http').createServer().listen(8080,'127.0.0.1');
const io = require('socket.io').listen(app);
io.sockets.on('connection', (socket) => {
  console.log(`Socket ${socket} connected to server.`);
});

module.exports = io;
