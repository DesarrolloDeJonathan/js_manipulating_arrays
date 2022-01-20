const numbers = [1, 30, 49, 29, 10, 13];

let findWithFor = undefined;
// Emulando find con un blucle for
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 10) {
    // Devolveremos el elemento encontrado
    findWithFor = element;
    // Y cerramos la condicion
    break;
  }
}
console.log("Emulaiting with loop for", findWithFor);

// Si hay un valor que no existe dara como resultado undefined
const whitFind = numbers.find((item) => item === 1333434);
console.log("Applicating find", whitFind);

// Example with Ids
const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

// Find nos sirve muy bien cuando tenemos algo que no se repite como un id
// Buscamos el elementos con find
const wiht_find = products.find((item) => item.id === "🍔");
console.log("find", wiht_find);

// Buscamos la posición  del objeto con findIndex
// En caso que no encuentre la posicion del elemento retornara un -1
const wiht_findIdex = products.findIndex((item) => item.id === "🍔");
console.log("findIndex", wiht_findIdex);
