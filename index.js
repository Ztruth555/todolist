const express = require('express')
const favicon = require('serve-favicon')
const helmet = require('helmet')
const morgan = require('morgan')

const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)

app.disable('x-powered-by')
app.use(helmet.noCache())
app.use(morgan('dev'))
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))
app.use(express.static(path.resolve(__dirname, './dist')))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

server.listen(process.env.PORT || 8080)
