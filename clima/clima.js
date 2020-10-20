const axios = require('axios');

const getClima = async (lat, long) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=14445339d1ad38c43b940197deb124f5`);
  
if(response.status !== 200){
  throw new Error ('No se encontró clima')
}  
  return response.data.main.temp;
}

module.exports = { getClima }