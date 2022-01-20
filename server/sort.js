const months = ["March", "Jan", "Feb", "Dec"];

// Esta ordenando no por mes sino de acuerdo a la tabla ASCII
// en este formato cada caracter tiene un peso en binario
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
// De esta forma le daremos un peso a los numeros logrando ordenarlos de mayor a menor
numbers.sort((a, b) => b - a);
console.log(numbers);

// Example with strings
const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
// Esta sera otra opcion para usar una comparacion y ordenar deacuerdo al codigo ascii local
words.sort((a, b) => a.localeCompare(b));
console.log(words);

// Ordenar objetos
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

// Al trabajar con objetos en la arrow funtion establecemos el atributo que queremos ordenar
orders.sort((a, b) => b.total - a.total);
console.log(orders);
