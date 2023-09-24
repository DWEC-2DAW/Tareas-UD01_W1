/* 
5.EJERCICIO 5: LA MODA

Prepara un programa que construya una matriz de veinte números aleatorios entre 0 y 10. Una vez
construida dicha matriz, el programa debe calcular cual es la moda.
Para obtener un número aleatorio entre 0 y 10 puedes utilizar el siguiente código:
Math.floor(Math.random() * 10);
Puedes consultar cómo se calcula la moda en este
enlace:https://www.disfrutalasmatematicas.com/datos/moda.html
Un ejemplo de ejecución del programa sería:
[ 1, 2, 4, 5, 4 ,4 ,4 ,4 ,4 ,4 ,0 ,7, 8, 4 ,9, 7, 3, 3, 1, 0]
Moda: 4
 */


let numbers = [];

for (let i = 0; i < 20; i++) {
  numbers.push(Math.floor(Math.random() * 10));
}

//console.log(numbers); // console para llevar control

let repeatNumber = {}; //en Php hubiera creado un array asociativo 



for (let number of numbers) {

// Cambio estas lineas por aviso de error () mala práctica)  en Linter
 /* ----------- if (repeatNumber.hasOwnProperty(number)) {   // si existe? valor en repeticiones
    repeatNumber[number]++;
  } else {

    repeatNumber[number] = 1;
  }
}
 */
if (Object.prototype.hasOwnProperty.call(repeatNumber, number)) { // busco un sustituto en JS  al comando Isset de Php 
  repeatNumber[number]++;
} else {
  repeatNumber[number] = 1;
}
}

//console.log(repeatNumber); // console para llevar control

let maxValue = Math.max(...Object.values(repeatNumber)); //función "Math.max" busco el valor mas alto del Objeto

console.log(maxValue);



