const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()

const cors = require('cors')
const router = require('./api/routes')

const loginRouter = require('./api/login')

const app = express()

app.use(express.json())

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@myfirstcluster0.q1bejuz.mongodb.net/${process.env.DB_NAME}`,
)

whiteListPorts = ['http://127.0.0.1:3005', 'http://localhost:3005']

corsOptions = {
  origin: (origin, callback) => {
    if (whiteListPorts.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: 'GET,PUT,POST',
  allowedHeaders: 'Content-Type,Authorization',
}

app.use(cors(corsOptions))

app.use('/', router)

app.use('/login', loginRouter)

app.listen(7077, () => {
  console.log(`Express server running on port ${7077}`)
})
