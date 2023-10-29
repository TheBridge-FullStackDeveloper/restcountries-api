const cardTemplate = function (country) {
  return `<div class="card">
              <img id="flag-image" src=${country.flags.png} alt="flag" />
              <h1 class="center">${country.name.common}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

function fetchData(str) {
  fetch(
    /* Need the provide API URL to get all countries */ "https://restcountries.com/v3.1/all"
  )
    .then(function (response) {
      // fetch() returns a promise containing the response (a Response object).
      // This is just an HTTP response, not the actual JSON.
      // To extract the JSON body content from the response,
      // we use the json() method and pass it into the next .then()

      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json(); // Convierte la respuesta en formato JSON
    })

    .then(function (countries) {
      // Here is where you'll need to add into the DOM all the countries received from API
      // 1 - We will need to iterate the countries variable with a loop
      // 2 - You can use the cardTemplate() function to create a div with a class card already styled
      // 💡 you can use countriesNode variable to add elements
      countriesNode.innerHTML = "";

      countries.forEach((country) => {
        if (!str || country.region === str) {
          const card = cardTemplate(country);
          countriesNode.innerHTML += card;
        }
      });
    });
}
fetchData();
//4 - Crear un filtro que permita al usuario seleccionar solo países del mismo continente,
// para esta iteración no hay elementos ni parte de código ya hecho, todo depende de ti 😜

function showAll() {
  return fetchData("")
}
function showAsia() {
  return fetchData("Asia")
}
function showEurope() {
  return fetchData("Europe")
}
function showOceania() {
  return fetchData("Oceania")
}
function showAfrica() {
  return fetchData("Africa")
}
function showAmerica() {
  return fetchData("Americas")
}