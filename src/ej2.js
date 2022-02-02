/**
 * Ejericio 2
 * Crear el código que reciba como parámetro un array de números y devuelva el mayor.
 */

const lenght = 40;
const array = Array.from({length: lenght}, () => Math.floor(Math.random() * 100));
const getMax = (array) => Array.isArray(array) ? Math.max(...array) : "Error al obtener el maximo";
console.log("array: ", array);
console.log("El numero mayor del array es: ", getMax(array));