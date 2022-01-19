const letters = ["a", "b", "c"];

//
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log(`for, ${element}`);
}

// Usando los métodos de arrays podremos reducir lo anterior a una línea de código
// Ya que no tengo que ingresar por cada elemento, en el for es el índex el que se va autoincrementando y se va guardando en una variable
// Con forEach ya me entrega ese elemento por definición, una arrow funtion que se va ejecutar por cada uno de los elementos
letters.forEach((item) => console.log(`forEach, ${item}`));

// Array para evaluar el performace de varios bucles Loops
const array = [...Array(50000).keys()];

// Usado para cuando tengas que hacer al menos más de un millón de iteraciones ya
// que será más rápido, pero visualmente no es la mejor opción
// Podremos salir antes de tiempo de la matriz por medio de un if una vez cumplida la condición dejara de examinar el bucle
console.time("Loop for");
let outputFor = "";
for (let index = 0; index < array.length; index++) {
  // Si usamos el operador de sumar antes del igual tarda mas igual al colocar la variable
  outputFor = outputFor + array[index];
  // outputFor = +array[index]; De esta forma tarda menos
}
console.timeEnd("Loop for");

// Los siguientes dos son ideales para código funcional y menos líneas de código
// Aunque escalan mal en conjuntos de datos grandes
// Fáciles de leer
// Mantiene el alcance de la variable en el bloque
console.time("Loop for...of");
// bucle for-of, introducido en la sexta edición de EcmaScript (ES6)
let outputFor_of = "";
for (const iterador of array) {
  outputFor_of = outputFor_of + iterador;
  // outputFor_of = +iterador; Asi tardo aun menos
}
console.timeEnd("Loop for...of");

// El forEach método existe dentro de todas las matrices. En nuestro caso, “array” una matriz
// que hereda todos los diversos métodos de Array.prototype. Para el forEach método, pasamos una función que se ejecutará en cada iteración.
console.time("Loop forEach");
let outputForEach = "";
array.forEach((value) => {
  outputForEach = outputForEach + value;
  // outputForEach = +value; De esta forma tarda aun menos
});
console.timeEnd("Loop forEach");
