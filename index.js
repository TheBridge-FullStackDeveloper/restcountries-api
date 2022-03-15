const cardTemplate = function (flag, name) {
  return  `<div class="card">
              <img id="flag-image" src="${flag}" alt="flag" />
              <h1 class="center">${name}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(function (countries) {
    const newCountry = countries.map(element =>{
      let flag = element.flags.png
      let name = element.name.common
      countriesNode.innerHTML += cardTemplate(flag, name)
    })
    // Here is where you'll need to add into the DOM all the countries received from API 

    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
  });
