
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    apiWeather
    .fetchTomorrowForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.list[1].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    apiWeather
    .fetchAfterTomorrowForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('aftertomorrow-forecast-main').innerHTML = main;
      document.getElementById('aftertomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('aftertomorrowicon-weather-container').innerHTML = icon;
      document.getElementById('aftertomorrow-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    apiWeather
    .fetchAfterAfterTomorrowForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('afterafter-forecast-main').innerHTML = main;
      document.getElementById('afterafter-forecast-more-info').innerHTML = description;
      document.getElementById('afterafter-icon-weather-container').innerHTML = icon;
      document.getElementById('afterafter-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function search() {

  city = document.getElementById('city-input').value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    apiWeather
    .fetchTomorrowForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    apiWeather
    .fetchAfterTomorrowForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('aftertomorrow-forecast-main').innerHTML = main;
      document.getElementById('aftertomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('aftertomorrowicon-weather-container').innerHTML = icon;
      document.getElementById('aftertomorrow-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    apiWeather
    .fetchAfterAfterTomorrowForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('afterafter-forecast-main').innerHTML = main;
      document.getElementById('afterafter-forecast-more-info').innerHTML = description;
      document.getElementById('afterafter-icon-weather-container').innerHTML = icon;
      document.getElementById('afterafter-forecast-temp').innerHTML = `${temp}°C`;
    })


    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


