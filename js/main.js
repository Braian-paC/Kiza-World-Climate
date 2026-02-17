import { getCountry } from "./api.js"
import { showCountry, showError } from "./ui.js"

const button = document.getElementById("searchBtn")
const input = document.getElementById("countryInput")

button.addEventListener("click", async () => {
  try {
    const countryName = input.value

    const country = await getCountry(countryName)

    showCountry(country)
  } catch (error) {
    showError(error.message)
  }
})
