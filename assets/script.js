var searchButton = document.querySelector("#submit");

var APIKey = "ad431daf2b902fd2d8a3b4c76d3a4c0f"

function handleFormSubmit(event) {
    event.preventDefault()
    var city = userInput.value;
    if (userInput) {
      getAllWeather(city)
    }
  }

function getAllWeather(city) {
 
    var APIKey = "ad431daf2b902fd2d8a3b4c76d3a4c0f"
      var citySearchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKey}`
      fetch(citySearchUrl)
      .then((response) => response.json() )
      .then((data) =>  displayCurrentWeather(data));

      console.log('Fetch Response');
      console.log(data);
  }




  document.querySelector(".search button").addEventListener('click', function(){
    getAllWeather.search();

  });
