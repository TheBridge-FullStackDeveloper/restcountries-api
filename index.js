const cardTemplate = function (country) {
  return `<div class="card">
              <img id="flag-image" src=${country.flags.png} alt="flag" />
              <h1 class="center">${country.name.common}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
    return response.json()
  })
  .then(function (countries) {
    const countryList = countries.map(country => cardTemplate(country))

    const contenedor = document.getElementById('countries')
    contenedor.innerHTML = countryList
  });