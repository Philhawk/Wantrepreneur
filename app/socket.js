'use strict';

import io from 'socket.io-client';

export default socket = io.connect('http://wantre-preneur.herokuapp.com/');
