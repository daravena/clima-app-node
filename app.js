const { getLugarLatLong } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')


const argv = require('yargs').options({

  direccion: {
    alias: 'd',
    desc: 'direccion del clima',
    demand: true
  }

}).argv;
// getLugarLatLong(argv.direccion).then(console.log).catch(console.log);
// getClima(1, 1).then(console.log);

console.log(argv.direccion);


const getInfo = async (dir) => {

  try {
    const coords = await getLugarLatLong(dir);
    const clima = await getClima(coords.lat, coords.lon);

    return `El clima de ${coords.direccion} es ${clima}`
    console.log('->', clima);
  }
  catch (err) {
    console.log('No se pudo determinar el clima de: ',  dir )
  }

}
getInfo(argv.direccion).then(console.log);

