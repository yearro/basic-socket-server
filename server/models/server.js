// Servidor express
const express  = require('express')
const http     = require('http')
const socketio = require('socket.io')
const path     = require('path')
const Sockets = require('./sockets')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT;

    // http server
    this.server = http.createServer(this.app)
    // Configuraciones de sockets
    this.io = socketio(this.server, { /* Configuraciones */})
  }
  configSockets() {
    new Sockets(this.io)
  }

  execute() {
    // inicializar middlewares
    this.middlewares()

    // Iniciar sockets
    this.configSockets()

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log('Server corriendo', this.port)
    })
  }

  middlewares () {
    this.app.use(express.static(path.resolve(__dirname, '../../public')))
  }
}
module.exports = Server