#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('testSocketIO:server');
var http = require('http');
//var open = require('opn');


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '18080');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);


/**
 * Socket.io things
 */
var io = require('socket.io')(server);
io.on('connection', function(socket){
  
  
  //calculate encrypt salt.
  var tmpNum = parseInt(Date.now()/(3600000*24)); //a tmp num changed every day.
  var crypto = require('crypto');
  var hash = crypto.createHash('sha256');
  hash.update(tmpNum+'ankdsksa');
  
  var encSalt = hash.digest('hex');//salt
  
  
  io.emit('salt',encSalt);
  
  

  socket.on('chatname', function(msg){ //the event name is chatname
    console.log('message: ' + msg); //log the msg client send
    io.emit('chatname', msg); // send one msg to all clients
  });
});


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
