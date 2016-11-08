'use strict';

import io from 'socket.io-client';

const socket = io.connect('http://wantre-preneur.herokuapp.com/');

export default socket;
