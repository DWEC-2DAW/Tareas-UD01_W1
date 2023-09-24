
/* EJERCICIO 6: ALUMNOS DE PRIMERO Y SEGUNDO

Tienes una estructura que contiene los alumnos matriculados en cada uno de los módulos de un
ciclo de formación profesional. La estructura tiene el siguiente formato:

   Construye un programa que imprima los alumnos que están matriculados a la vez en asignaturas
   de primer y segundo curso.
   Con los datos visibles en el ejemplo anterior debería imprimir: 'Perico' y 'Don Pepito'
   Ten en cuenta que la estructura puede contener más asignaturas de primero y segundo, y no
   tienen por qué estar en orden */

const modulos = [
    {
        nombre: 'Sistemas informáticos',
        curso: 1,
        alumnos: [
            'Don Pepito', 'Perico', 'Don José'
        ]
    },
    {
        nombre: 'Desarrollo Web en entorno cliente',
        curso: 2,
        asignatura: '',
        alumnos: [
            'Juan', 'Perico', 'Andrés', 'Don Pepito'
        ]
    },

]

let alumnos = {}; // tengo que crear un objeto para asociar Nveces porque en Js no hay arrays asociativos como en PHP

for (let modulo of modulos) {
    for (let alumno of modulo.alumnos) {
        if (alumno in alumnos) {
            alumnos[alumno]++;
        } else {
            alumnos[alumno] = 1;
        }
    }
}
// console.log(alumnos); // control

let numeroAlumnos = [];

for (let alumnado in alumnos) {
    if (alumnos[alumnado] > 1) {
        numeroAlumnos.push(alumnado);
    }
}
//console.log(numeroAlumnos); // control

let listaAlumnos = numeroAlumnos.join(' y ');  //lo convierto a string para sacarlo del array y poner la ' y '

console.log(listaAlumnos);





