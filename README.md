# Countries of the World 🌎

In this challenge we are going to use the [restcountries API](https://restcountries.com/)

In this repository you'll find a `index.html`, `style.css` and a `index.js`.

In the `index.html` there is a `<div id="countries"></div>` where you have to add all the 150 countries retrieved from the API.

Some part are already styled, that's why `style.css` is not empty, feel free to add properties if you want.

In `index.js` there is a function called `cardTemplate(data)` who receive one parameter and return a string, you can use it to print the countries into the DOM.

## Tasks 📝

1 - Implement the `fetch()` function, you'll need to pass the URL string as parameter, to retrieve all the countries. You can find in thi [URL](https://restcountries.com/#endpoints-all) 

2 - Create a loop to iterate the Array which you'll receive as response from the API 

3 - Add each Country into the DOM using the `cardTemplate()`

The final result should be something like this:

<img width="1440" alt="Screenshot 2021-05-26 at 11 27 13" src="https://user-images.githubusercontent.com/33903092/119640675-23433900-be19-11eb-9eb7-095046759d34.png">

## Bonus 🎁

4 - Crear un filtro que permita al usuario seleccionar solo países del mismo continente, para esta iteración no hay elementos ni parte de código ya hecho, todo depende de ti 😜
