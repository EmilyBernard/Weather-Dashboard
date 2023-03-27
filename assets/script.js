const APIKey = "ad431daf2b902fd2d8a3b4c76d3a4c0f"

var getCurrentWeather = function (city) {
    var citySearch = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`
    fetch(citySearch)
    .then((response) => response.json() )
    .then((data) =>  this.displayCurrentWeather(data));

    console.log('Fetch Response \n-------------');
    console.log(data);
}

var displayCurrentCity = function (data) {

}
