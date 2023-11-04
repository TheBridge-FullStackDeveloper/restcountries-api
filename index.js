const cardTemplate = function (el) {
  return `<div class="card">
              <img id="flag-image" src=${el.flags.png} alt="flag" />
              <h1 class="center">${el.name.common}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
    return response.json();
  })
  .then(function (countries) {
    countries.forEach((el) => {
      countriesNode.innerHTML += cardTemplate(el);
    });
  });
