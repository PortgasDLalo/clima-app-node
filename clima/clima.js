const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=04cf77d4fb1bc2bf2014b941c95d60bb&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}