const express = require('express')
const router = express.Router()

const { getWeather, getForecast, getHistory } = require('../controller/weatherController')

router.get('/weather', getWeather)

router.get('/forecast', getForecast)

router.get('/history', getHistory)

module.exports = router