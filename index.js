const cardTemplate = function (country) {
  return `<div class="card">
              <img id="flag-image" src=${country.flags.png} alt="${country.name.common} flag" />
              <h1 class="center">${country.name.common}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");
const continentSelector = document.getElementById("continentSelector");

const showCountriesByContinent = (continent) => {
  fetch('https://restcountries.com/v3.1/all')
    .then(function (response) {
      return response.json()
    })
    .then(function (countries) {
      const filteredCountries = continent === "All" ? countries : countries.filter((country) => country.region === continent);
      countriesNode.innerHTML = '';
      filteredCountries.forEach((country) => {
        const card = cardTemplate(country);
        countriesNode.innerHTML += card;
      });
    });
};

continentSelector.addEventListener('change', function () {
  const selectedContinent = continentSelector.value;
  showCountriesByContinent(selectedContinent);
});

showCountriesByContinent("All");
