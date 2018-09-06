const request = require('request');

const getWeather = (lat,lng,callback) =>{
    request({
        url:`https://api.darksky.net/forecast/27980ec1a915ff54fe0a24d3d4d2f028/${lat},${lng}`,
        json:true
    },(error,response,body)=>{
        if(!error && response.statusCode===200){
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        }
        else{
            callback('Unable to fetch weather.'); 
        }
    });
}


module.exports.getWeather = getWeather;
