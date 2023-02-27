const express = require('express')
const cors = require('cors')
const connectDB = require('../db/connectDB')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT

    this.db()
    this.middlewares()
    this.routes()
  }

  db () {
    connectDB()
  }

  middlewares () {
    this.app.use(cors({
      origin: '*'
    }))

    // acceder al dist de la carpeta app
    this.app.use(express.static('../app/dist'))

    this.app.use(express.json())
  }

  routes () {
    this.app.use('/api/cocktail', require('../routes/cocktail.routes'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

module.exports = Server
