export async function getCountry(countryName) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  )

  if (!response.ok) {
    throw new Error("País não encontrado")
  }

  const data = await response.json()
  return data[0]
}
