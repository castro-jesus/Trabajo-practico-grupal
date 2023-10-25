const url = 'https://api.open-meteo.com/v1/forecast?latitude=-34.59&longitude=-58.38&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m';
	
fetch(url)
.then(res => res.json())
.then(response => {
	console.log(response)
})