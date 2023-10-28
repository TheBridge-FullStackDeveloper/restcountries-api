// URL para obtener todos los países
const API_URL = 'https://restcountries.com/v3.1/all';

const cardTemplate = function (data) {
  return `<div class="card">
              <img id="flag-image" src="${data.flags.svg}" alt="flag of ${data.name.common}" />
              <h1 class="center">${data.name.common}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch(API_URL)
  .then(response => response.json())
  .then(countries => {
    console.log(countries[0]); // Esto imprimirá el primer país de la lista

    countries.forEach(country => {
      const countryCard = cardTemplate(country);
      countriesNode.innerHTML += countryCard;
    });
})

 
  .catch(error => {
    console.error("Error fetching countries:", error);
  });

  