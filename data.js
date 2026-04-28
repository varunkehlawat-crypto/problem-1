const options = {
  method: 'GET',
  headers: {Authorization: 'Bearer zpka_86522a9ed1534a2182cef67cbc6ff180_6bd3e48a'
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