const express = require('express')
const router = express.Router()

const CONFIG = require('../config/config')

router.get('/', (req, res, next)=>{
    res.json({
        success: true,
        message: "Node Server for smart-retail",
        data: {
            "version_number": "v0.0.1"
        }
    })
})

router.get('/ping', (req, res)=>{
    res.json({
        success: true,
        message: "Pong"
    })
})

module.exports = router