/* 2.EJERCICIO 2: BUENOS DÍAS

Construye un programa de Inteligencia Artificial que salude correctamente según la hour del día.
De 7 a 12 dirá “Buenos días”, de 12 a 20 “Buenas tardes”, de 20 a 2 “Buenas noches” y de 2 a 7 de
la mañana “¿Qué haces despierto a estas hours?”

Por ejemplo, en el siguiente caso:
const hour = 15
El programa diría “Buenas tardes” */

const hour = 24;

function grettingHour(hour) {
    return hour >= 7 && hour < 12 ? "Buenos días" :
        hour >= 12 && hour < 20 ? "Buenas tardes" :
            (hour >= 20 && hour <= 24) || (hour >= 0 && hour <= 2) ? "Buenas noches" :
                hour >= 2 && hour < 7 ? "¿Qué haces despierto a estas horas?" : "Introduce una hora válida"
}

console.log(grettingHour(hour));

/* /Users/davidm/Desktop/DWEC/linter-template/src/ejprueba.js
  13:1  error  Function 'grettingHour' has a complexity of 11. Maximum allowed is 5  complexity

✖ 1 problem (1 error, 0 warnings) */