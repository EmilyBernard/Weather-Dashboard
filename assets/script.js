var searchButton = document.querySelector("#button");
var userInput = document.querySelector(".user-input");
var APIKey = "ad431daf2b902fd2d8a3b4c76d3a4c0f"

function handleFormSubmit(event) {
    event.preventDefault()
    var city = userInput.value;
    if (userInput) {
      getAllWeather(city)
    }
}
// Get current a five day forecast
function getAllWeather(city) {
  var APIKey = "ad431daf2b902fd2d8a3b4c76d3a4c0f"

    var citySearchUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(citySearchUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);
      displayCurrentWeather(data);

    // var getFiveDayForecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&units=imperial&appid=" + APIKey;
    // fetch(getFiveDayForecastURL)
    // .then(function (response) {
    //   return response.json()
    // })
    // .then(function (data) {
    //   console.log(data);
    //   displayFiveDayWeather(data);
    // })

    // var recentCities = getRecentCities();
    // recentCities.push(city);
    // localStorage.setItem("recentCities", JSON.stringify(recentCities));
    // displayRecentCities();
});};



// Display Functions
function displayCurrentWeather(data) {
  var {cityName} = data.name;
  var {currentDate} = new Date().toLocaleDateString();
  var {weatherIcon, description} = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var {temp} = Math.round(data.main.temp) + "°F";
  var {windSpeed} = Math.round(data.wind.speed) + " MPH";
  var {humidity} = data.main.humidity + "%";

  console.log(cityName, currentDate, weatherIcon, description, temp, windSpeed, humidity)

  document.querySelector(".city").innerText = "Weather in " + cityName;
  document.querySelector(".date").innerText = currentDate;
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
  document.querySelector(".desc").innerText = description;
  document.querySelector(".temp").innerText = temp + "˚F";
  document.querySelector(".windspeed").innerText = "Wind Speed: " + windSpeed + "Mph";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";

};

// function displayFiveDayWeather(fiveDayData) {
//   for (var i=0; i < 40; i+=8) {
//   var {dayOfWeek} = fiveDayDataDateTime.toLocaleDateString("en-US", {weekday: "long"});
//   var {weatherIcon, description} = "http://openweathermap.org/img/w/" + fiveDayData.weather[0].icon + ".png";
//   var {temp} = Math.round(fiveDayData.main.temp) + "°F";
//   var {windSpeed} = Math.round(fiveDayData.wind.speed) + " MPH";
//   var {humidity} = fiveDayData.main.humidity + "%";

//   console.log(dayOfWeek, weatherIcon, description, temp, windSpeed, humidity)

//   document.querySelector(".card-header1").innerText = dayOfWeek;
//   document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
//   document.querySelector(".desc1").innerText = description;
//   document.querySelector(".temp1").innerText = temp + "˚F";
//   document.querySelector(".wind1").innerText = "Wind Speed: " + windSpeed + "Mph";
//   document.querySelector(".humidity1").innerText = "Humidity: " + humidity + "%";

// }}
searchButton.addEventListener("click", handleFormSubmit);


// document.querySelector(".search button").addEventListener('click', function(){
//   weather.search();
// });