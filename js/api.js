const API_KEY = "b833367a27b6f48a8e52fae343384bbb"

export async function getCountryWithWeather(countryName) {
  const countryResponse = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  )

  if (!countryResponse.ok) {
    throw new Error("País não encontrado")
  }

  const countryData = await countryResponse.json()
  const country = countryData[0]

  const capital = country.capital[0]
  
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${API_KEY}`
  )

  if (!weatherResponse.ok) {
    throw new Error("Erro ao buscar clima")
  }

  const weatherData = await weatherResponse.json()

  return {
    name: country.name.common,
    capital: capital,
    population: country.population,
    temperature: weatherData.main.temp,
    description: weatherData.weather[0].description,
    humidity: weatherData.main.humidity
  }
}
