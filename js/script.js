
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
    .fetch3DaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main0 = data.list[0].weather[0].main;
      const description0 = data.list[0].weather[0].description;
      const temp0 = Math.round(((data.list[0].temp.day)-273)*10)/10;
      const icon0 = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // On récupère l'information principal
      const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = Math.round(((data.list[1].temp.day)-273)*10)/10;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // On récupère l'information principal
      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = Math.round(((data.list[2].temp.day)-273)*10)/10;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);


      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main0;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description0;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon0;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp0}°C`;
      // Modifier le DOM
      document.getElementById('aftertomorrow-forecast-main').innerHTML = main1;
      document.getElementById('aftertomorrow-forecast-more-info').innerHTML = description1;
      document.getElementById('aftertomorrow-icon-weather-container').innerHTML = icon1;
      document.getElementById('aftertomorrow-forecast-temp').innerHTML = `${temp1}°C`;

      // Modifier le DOM
      document.getElementById('afterafter-forecast-main').innerHTML = main2;
      document.getElementById('afterafter-forecast-more-info').innerHTML = description2;
      document.getElementById('afterafter-icon-weather-container').innerHTML = icon2;
      document.getElementById('afterafter-forecast-temp').innerHTML = `${temp2}°C`;
      
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
    .fetch3DaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main0 = data.list[0].weather[0].main;
      const description0 = data.list[0].weather[0].description;
      const temp0 = Math.round(((data.list[0].temp.day)-273)*10)/10;
      const icon0 = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // On récupère l'information principal
      const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = Math.round(((data.list[1].temp.day)-273)*10)/10;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // On récupère l'information principal
      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = Math.round(((data.list[2].temp.day)-273)*10)/10;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);


      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main0;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description0;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon0;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp0}°C`;
      // Modifier le DOM
      document.getElementById('aftertomorrow-forecast-main').innerHTML = main1;
      document.getElementById('aftertomorrow-forecast-more-info').innerHTML = description1;
      document.getElementById('aftertomorrow-icon-weather-container').innerHTML = icon1;
      document.getElementById('aftertomorrow-forecast-temp').innerHTML = `${temp1}°C`;

      // Modifier le DOM
      document.getElementById('afterafter-forecast-main').innerHTML = main2;
      document.getElementById('afterafter-forecast-more-info').innerHTML = description2;
      document.getElementById('afterafter-icon-weather-container').innerHTML = icon2;
      document.getElementById('afterafter-forecast-temp').innerHTML = `${temp2}°C`;
      
    })


    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


