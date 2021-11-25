const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=97795951bee113656e79d378feb20e2e&query=' + latitude + ',' + longitude
    request({url, json: true}, (error, {body}) =>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + 
            ' degress out. It feels like ' + body.current.feelslike + ' degress out. The precipitation level is ' + body.current.precip + ' mm. The humidity is ' + body.current.humidity + '%')
        }
    })
}

module.exports = forecast