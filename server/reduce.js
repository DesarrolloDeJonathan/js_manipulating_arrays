// const totals = [1, 2, 3, 4];
const totals = [...Array(999999).keys()];
console.time("Time of for emulating reduce");

// Con el for emularemos el comportamiento de reduce y sumaremos todos los elementos del array
let sumFor = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  // sumFor = sumFor + element;
  sumFor = +element; //Con esta línea va aún más rápido
  // console.log(sumFor);
}
console.log(sumFor);
console.timeEnd("Time of for emulating reduce");

//
console.time("Time of reduce");
// El primer parametro es una arrow function y el segundo el estado inicial
// El acumulador en este caso es sum luego el elemto que estamos iterando y ejecutamos la funcion
const arrayReduce = totals.reduce((sum, element) => sum + element, 0);
console.log("Use Reduce", arrayReduce);
console.timeEnd("Time of reduce");
