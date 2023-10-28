const cardTemplate = function (URL, name, region) {
  return `<div class="card">
              <img id="flag-image" src="${URL}" alt="flag" />
              <h1 class="center">${name}</h1>
              <h4 class="center">${region}</h4>
            </div>`;
};

fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (countries) {
    const countriesNode = document.getElementById("countries");
    const filterButton = document.getElementById("filterButton");
    const regionSelect = document.getElementById("region-select");

    filterButton.addEventListener("click", function () {
      const selectedRegion = regionSelect.value; //It represents the current value of the input element.

      let filteredCountries;

      if (selectedRegion !== "all") {
        filteredCountries = countries.filter(
          (country) => country.region === selectedRegion
        );
      } else {
        filteredCountries = countries;
      }

      // Clear the countriesNode before adding filtered countries.
      countriesNode.innerHTML = "";

      // Add filtered countries to the DOM.
      filteredCountries.forEach((country) => {
        countriesNode.innerHTML += cardTemplate(
          country.flags.png,
          country.name.common,
          country.region
        );
      });
    });
  });
