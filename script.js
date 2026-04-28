const form = document.querySelector("form");
const details = document.querySelector(".weather_template");

function updateUI(data) {
  const cityDetails = data.cityDetails;
  const weatherData = data.weatherData;
  details.innerHTML = `
        <h2 class = "current_weather">Current Weather</h2>
        <hr class="horizontal_line_1">
        <h1 class="english_name">📍${cityDetails.EnglishName}</h1>
        <div class="weather_text">${weatherData.WeatherText}</div>
        <div class="temperature_in_degree">${weatherData.Temperature.Metric.Value}</div>
        <div class="degree">&deg;</div>
        <div class="degree_c">c</div>
        <div class="rain">Precipitation: ${weatherData.PrecipitationType}</div>
    `;
}
async function getWeather(city) {
  const cityDetails = await getLocationDetails(city);
  const weatherData = await getWeatherDetails(cityDetails.Key);
  console.log(cityDetails, weatherData);
  return { cityDetails, weatherData};
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = form.city.value.trim();
  form.reset();

  getWeather(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log(err));
});