const cardTemplate = function (country) {
  return `
    <div class="card">
      <img id="flag-image" src="${country.flags.png}" alt="flag" />
      <h1 class="center">${country.name.common}</h1>
      <p>Continente: ${country.region}</p>
    </div>`;
};


const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    // Parse the response to JSON
    return response.json();
  })
  .then(function (countries) {
    // Sort the countries alphabetically by common name
    countries.sort((a, b) => {
      const nameA = a.name.common.toUpperCase();
      const nameB = b.name.common.toUpperCase();
      if (nameA === "ÅLAND ISLANDS") return -1;
      if (nameB === "ÅLAND ISLANDS") return 1;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    // Iterate through the sorted countries and create a card for each
    countries.forEach(function (country) {
      const countryCard = cardTemplate(country);
      countriesNode.innerHTML += countryCard;
    });
  })
  .catch(function (error) {
    console.error("Error al obtener datos de la API", error);
  });
