import { getCountryWithWeather } from "./api.js"
import { showCountry, showError } from "./ui.js"

const searchBtn = document.getElementById("searchBtn")
const input = document.getElementById("countryInput")

function performSearch() {
  const countryName = input.value.trim()
  if (!countryName) {
    showError("Por favor informe o nome de um país")
    return
  }

  getCountryWithWeather(countryName)
    .then(showCountry)
    .catch(err => showError(err.message))
}

searchBtn.addEventListener("click", performSearch)
input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    performSearch()
  }
})


