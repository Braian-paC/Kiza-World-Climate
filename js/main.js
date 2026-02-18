import { getCountryWithWeather } from "./api.js"
import { showCountry, showError } from "./ui.js"

const searchBtn = document.getElementById("searchBtn")
const input = document.getElementById("countryInput")

searchBtn.addEventListener("click", async () => {
  try {
    const countryName = input.value

    const data = await getCountryWithWeather(countryName)

    showCountry(data)
  } catch (error) {
    showError(error.message)
  }
})


