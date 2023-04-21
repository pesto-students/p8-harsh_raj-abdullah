const axios = require('axios');
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const getWeather = async (req, res) => {
  const {city} = req.query;
  const urls = city?.split(',').map(name => `${BASE_URL}/current.json?key=${API_KEY}&q=${name}`)
  if(!urls){
    res.status(400).json({massage: 'Please enter a valid city'})
  } else{
    axios.all(urls.map(l => axios.get(l)))
    .then(axios.spread((...results) => {
      const result = results.map( res => res.data)
      res.json(result);
    }))
    .catch(error =>{
      res.status(error.response.status).json(error.response.data)
    });
  }
}


const getForecast = async (req, res) => {
  const { city, days } = req.query;
  const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`
  axios.get(url)
    .then(response =>{
      res.json(response.data);
    })
    .catch(error =>{
      res.status(error.response.status).json(error.response.data)
    });
}

const getHistory = async (req, res) => {
  const { city, dt } = req.query;
  const url = `${BASE_URL}/history.json?key=${API_KEY}&q=${city}&dt=${dt}`
  axios.get(url)
    .then(response =>{
      res.json(response.data);
    })
    .catch(error =>{
      res.status(error.response.status).json(error.response.data)
    });
}



module.exports = { getWeather, getForecast, getHistory }