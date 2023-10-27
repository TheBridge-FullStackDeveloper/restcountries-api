const cardTemplate = function (URL, name) {
  return `<div class="card">
              <img id="flag-image" src="${URL}" alt="flag" />
              <h1 class="center">${name}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON.
    // To extract the JSON body content from the response,
    // we use the json() method and pass it into the next .then()
    return response.json(); // Convierte la respuesta en formato JSON
  })
  .then(function (countries) {
    // Here is where you'll need to add into the DOM all the countries received from API
    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
    countries.forEach((country) => {
      countriesNode.innerHTML += cardTemplate(
        country.flags.png,
        country.name.common
      );
    });
  });
