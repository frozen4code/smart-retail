const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const pe = require('parse-error')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(cors())

app.get('/', (req, res)=>{
    res.statusCode = 200
    res.json({
        success: true,
        message: "Server for smart-retail"
    })
})

module.exports = app

process.on('unhandledRejection', err=>{
    console.error('Uncaught Error', pe(err))
})
