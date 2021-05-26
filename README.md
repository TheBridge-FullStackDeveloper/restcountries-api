# World countries 🌎

In this challenge we are going to use the [restcountries API](https://restcountries.eu/)

In this repository you'll find a `index.html`, `style.css` and a `index.js`.

In the `index.html` there is a `<div id="countries"></div>` where you have to add all the 150 countries retrieved from the API.

Some part are already styled, that's why `style.css` is not empty, feel free to add properties if you want.

In `index.js` there is a function called `cardTemplate(data)` who receive one parameter and return a string, you can use it to print the countries into the DOM.

## Tasks 📝

1 - Implement the `fetch()` function, you'll need to pass the URL string as parameter, to retrieve all the countries. You can find the URL [here](https://restcountries.eu/#api-endpoints-all)

2 - Create a loop to iterate the Array which you'll receive as response from the API 

3 - Add each Country into the DOM using the `cardTemplate()`

## Bonus 🎁

4 - Create a filter to let the user select just countries in the same continent
