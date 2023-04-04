require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const morgan = require('morgan')
const router = require('./src/router/indexRoutes')

// Middleware
app.use(morgan('combined'))
app.use(express.json())

// Ruta
router(app)

// On Server
app.listen(port, () => console.log('👌 Server on in port', port, `➡️  http://localhost:${port}/`))