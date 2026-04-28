const options = {
  method: 'GET',
  headers: {Authorization: 'Bearer zpka_6e8a84ebfb4b42ba84cbc9355b392f11_ca1f7280'
  }
};
async function getWeatherDetails(locationKey) {
    const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, options);
    const weatherConditions = await response.json();
    return weatherConditions[0]; 
}
async function getLocationDetails(cityName) {
    const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?q=${cityName}`, options);
    const locationData = await response.json();
    return locationData[0];
}
