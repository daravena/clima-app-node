

const axios = require('axios');
const getLugarLatLong = async (direccion) => {
  const instance = axios.create({
    baseURL: `https://rapidapi.p.rapidapi.com/weather?q=${direccion}`,
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': '89ef773b5dmsh73fd7c3aa48bedap15120ejsnef60e592d3d0',
      'useQueryString': 'true'
    }
  });

  const respuesta = await instance.get();
  if (respuesta.statusText !== 'OK') {
    throw new Error(`No hay resultados para ${direccion}`)
  }

  return {
    direccion: respuesta.data.name,
    lat : respuesta.data.coord.lat,
    lon : respuesta.data.coord.lon
  }
}



module.exports = { getLugarLatLong }