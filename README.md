#Paises del Mundo 🌎

En este desafío vamos a utilizar la [API de restcountries](https://restcountries.com/)

En este repositorio encontrará `index.html`, `style.css` y `index.js`.

En `index.html` hay un `<div id="countries"></div>` donde debes agregar los 150 países recuperados de la API.

Algunas partes ya tienen estilo, es por eso que `style.css` no está vacío; siéntase libre de agregar propiedades si lo desea.

En `index.js` hay una función llamada `cardTemplate(data)` que recibe un parámetro y devuelve una cadena, puedes usarla para imprimir los países en el DOM.

## Tareas 📝

1 - Implemente la función `fetch()`, deberá pasar la cadena URL como parámetro para recuperar todos los países. Puede encontrarlo en esta [URL](https://restcountries.com/#endpoints-all)

2 - Crea un bucle para iterar el Array que recibirás como respuesta de la API

3 - Agregue cada país al DOM usando `cardTemplate()`

El resultado final debería ser algo como esto:

<img width="1440" alt="Captura de pantalla 2021-05-26 a las 11 27 13" src="https://user-images.githubusercontent.com/33903092/119640675-23433900-be19-11eb-9eb7-095046759d34. png">

## Bonificación 🎁

4 - Crear un filtro que permita al usuario seleccionar solo países del mismo continente, para esta iteración no hay elementos ni parte de código ya hecho, todo depende de ti 😜
