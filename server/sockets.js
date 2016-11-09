'use strict';

module.exports = (server) => {
  const http = require('http');
  // var server = require('http').createServer();
  const io = require('socket.io')(server);
  console.log('THIS IS THE IOOOOOOOOO', io)
  io.sockets.on('connection', (socket) => {
    console.log('SOCKETS WORKING')
    console.log(`Socket ${socket.id} connected to server.`);

    socket.on('purchase', (products) => {
      console.log('purchase emitted from client');
    });
  });
  return io;
}
