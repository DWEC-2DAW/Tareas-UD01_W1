
/* 3.EJERCICIO 3: DÍA DE LA SEMANA

El 1 de enero de 2021 fue viernes.
Prepara un programa que, dado un día y un mes (de 2021) calcule qué día de la semana es.
Por ejemplo, si el programa tiene de entrada:
const dia = 10
const mes = 1
debería imprimir “Domingo”.
No puedes utilizar ninguna función predefinida de manejo de fechas de JavaScript (puedes hacerlo
calculando cuántas semanas y días han pasado desde el 1 de enero, por ejemplo) */


const day = 10;
const month = 1;

function playWeek(day, month) {

    const daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysWeek = ['Viernes', 'Sábado', 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves'];

    let sumDays = 0;

    for (let i = 0; i < month - 1; i++) {  // le resto -1 para no contar el mes entero de la const = month
        sumDays += daysMonth[i];
    }

    sumDays += day;

    //console.log(sumDays); // console para control, pruebo si estoy contabilizando bien los dias

    return daysWeek[(sumDays - 1) % 7]; // le resto 1 me saca un dia mas de la semana
}

console.log(playWeek(day, month)); 
