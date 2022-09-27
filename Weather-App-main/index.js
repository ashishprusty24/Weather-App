function searchWeather (){
    let searchedCity = document.getElementById('cityName').value;
    getWeatherData(searchedCity);
    document.getElementById('cityName').value='';

}

async function getWeatherData(searchedCity){
    try{
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=8de5e9c39aafbc7b74ea212a574046ba`);
        let weatherData = await result.json();
        // console.log(weatherData);
        displayWeatherMap(weatherData);
    }
    catch(error){
        console.log(error);
    }
}

function displayWeatherMap(weatherData){
    document.getElementById('container').innerHTML='';

    //weather card
    var showCard = document.createElement('div');
    showCard.setAttribute('id','showCard');

    var name = document.createElement('h2');
    name.innerText = weatherData.name;
    name.setAttribute('id', 'name')

    var weather = document.createElement('p');
    weather.innerText = 'Weather : ' + weatherData.weather[0].description;
    weather.setAttribute('id','weather');

    var temp = document.createElement('p');
    temp.innerText = 'Temperature : ' + weatherData.main.temp + ' °C';
    temp.setAttribute('id','temp');

    var pressure = document.createElement('p');
    pressure.innerText = 'Pressure : ' + weatherData.main.pressure + ' mb';
    pressure.setAttribute('id','pressure');

    var humidity = document.createElement('p');
    humidity.innerText = 'Humidity : ' + weatherData.main.humidity + ' %';
    humidity.setAttribute('id','humidity');

    var windSpeed = document.createElement('p');
    windSpeed.innerText = 'Wind Speed : ' + weatherData.wind.speed + ' m/s';
    windSpeed.setAttribute('id','windSpeed');

    showCard.append(name, weather, temp, pressure, humidity, windSpeed);

    //map
    var showMap = document.createElement('div');
    showMap.setAttribute('id','showMap'); 
    // https://maps.google.com/maps?q=sonipat&t=&z=13&ie=UTF8&iwloc=&output=embed
    let city = weatherData.name;
    let map = document.createElement('iframe');
    map.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    showMap.append(map);


    document.getElementById('container').append(showCard, showMap);

}




