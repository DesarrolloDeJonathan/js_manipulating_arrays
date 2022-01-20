const words = ["spray", "limit", "elite", "exuberant"];

// Representacion de filter con un bucle for
const forWithFilter = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
}
console.log("For emulando filter", forWithFilter);
console.log("original", words);

// Reduccion de codigo con filter
const filterFunction = words.filter((item) => item.length >= 6);
console.log("Funcion filter", filterFunction);
console.log("original", words);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
  },
];

// Mayor igual a cien y delivered en true
const filterDelivered = orders.filter(
  (item) => item.delivered && item.total >= 100,
);
console.log("rta3", filterDelivered);

// Yn buscado que es algo mas complejo
const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

// Devolvera los elementos que cumplan la condicion en este caso el parametro que recibe la funcion search
console.log(search("Nico"));
console.log(search("a"));
console.log(search("hsdjkfhdsj"));
