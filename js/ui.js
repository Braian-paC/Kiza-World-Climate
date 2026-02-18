export function showError(message) {
  const result = document.getElementById("result")
  result.innerHTML = `<p class="error">${message}</p>`
}

export function showCountry(data) {
  const result = document.getElementById("result")

  result.innerHTML = `
    <h2>${data.name}</h2>
    <p>Capital: ${data.capital}</p>
    <p>População: ${data.population}</p>
    <hr>
    <h3>Clima Atual</h3>
    <p>Temperatura: ${data.temperature}°C</p>
    <p>Descrição: ${data.description}</p>
    <p>Umidade: ${data.humidity}%</p>
  `
}

