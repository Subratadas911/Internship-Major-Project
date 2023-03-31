const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6dc2c71aa1msh47d03e9d49fd63ap1dfb65jsn4658e1b84606',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
    var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
var dt = new Date();
document.getElementById("time").innerHTML = dt.toLocaleTimeString();
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)  
})

getWeather("Delhi")