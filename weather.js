// map-iframe

//document.getElementById('getWeatherButton')

document.getElementById('getWeatherButton').addEventListener('click', function(){

    fetch('http://api.openweathermap.org/data/2.5/weather?q=montreal&APPID=d65d85d92a3b330454ffa21c6e04181a')
        .then(
            function(response){
                response.json().then(function(data){

                    var longitude = data.coord.lon;
                    var latitude = data.coord.lat;
                    var mapUrl = "http://maps.google.com/maps?q=" + latitude + "," + longitude + "&z=15&output=embed";
                    document.getElementById('map-iframe').src = mapUrl;

                    console.log(data);

                    document.getElementById('weather-main').style.display = "block";

                    document.getElementById('city-display').innerHTML = data.name;
                    document.getElementById('temperature-display').innerHTML = kelvinToCelcius((data.main.temp)).toFixed(0) + " C";
                    document.getElementById('humidity-display').innerHTML = (data.main).humidity;
                    document.getElementById('description-display').innerHTML =
                    ((data.weather)[0]).main + ":  " + ((data.weather)[0]).description;

                });
            }
        );
})



document.getElementById('getWeatherByCityButton').addEventListener('click', function(event){

var cityName = document.getElementById('city-input').value;
var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=d65d85d92a3b330454ffa21c6e04181a";

    fetch(apiUrl)
        .then(
            function(response){
                response.json().then(function(data){
                    var longitude = data.coord.lon;
                    var latitude = data.coord.lat;
                    var mapUrl = "http://maps.google.com/maps?q=" + latitude + "," + longitude + "&z=15&output=embed";
                    document.getElementById('map-iframe').src = mapUrl;
                    
                    console.log(data);
                    console.log((data.main).temp);

                    document.getElementById('weather-main').style.display = "block";

                    document.getElementById('city-display').innerHTML = data.name;
                    document.getElementById('temperature-display').innerHTML = kelvinToCelcius((data.main.temp)).toFixed(0) + " C";
                    document.getElementById('humidity-display').innerHTML = (data.main).humidity;
                    document.getElementById('description-display').innerHTML =
                    ((data.weather)[0]).main + ":  " + ((data.weather)[0]).description;

                });
            }
        );


        event.preventDefault();
})

function kelvinToCelcius(temperature){
    return temperature - 273.15;
}
