const cardTemplate = function (/* You can pass the data here*/) {
  return `<div class="card">
              <img id="flag-image" src="${/* Add the image link here*/}" alt="flag" />
              <h1 class="center">${/*Add country name here*/}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch(/* Need the provide API URL to get all countries */)
  .then(function (res) {
    res.json();
  })
  .then(function (countries) {
    /* Here is where you'll need to 
       add into the DOM all the countries 
       received from API */

    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create div card already styled
    // 💡 you can use countriesNode to add elements
  });
