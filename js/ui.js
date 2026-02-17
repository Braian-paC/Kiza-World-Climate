export function showCountry(country) {
  const result = document.getElementById("result")

  result.innerHTML = `
    <h2>${country.name.common}</h2>
    <p>Capital: ${country.capital[0]}</p>
    <p>População: ${country.population}</p>
  `
}

export function showError(message) {
  const result = document.getElementById("result")
  result.innerHTML = `<p style="color:red;">${message}</p>`
}
