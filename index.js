'use strict';

const Hapi = require('hapi');
const database = require('./db/config.js');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
  host: 'localhost', 
  port: 8000 
});

database(function(err, db){
  if (err) {
    throw err;
  } else{
    server.start((err) => {
      if (err) {
        throw err;
      } else{
        server.register({ 
          register: require('./markdown'),
          options: {
            db: db
          },
          routes: {
            prefix: '/markdown'
          }
        }, (err) => {
          if (err) {
            throw err;
          }else {
            console.log('Server running at:', server.info.uri);
          }
        })
      }
    })
  }
})
