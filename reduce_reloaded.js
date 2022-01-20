const items = [1, 1, 3, 2, 3];

const reduceWhitArray = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(reduceWhitArray);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

// Usamos un map para transformar y luego un reduce
// Mejoramos un poco el performace de esta consulta de reduce mapear ciertos elementos
// A esta forma de concatenar se le llama method chaining
// en este caso la salida de uno es la entrada de informacion del otro
const reduceWhitArrayofObjects = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log(reduceWhitArrayofObjects);

// Method chaining
// Funciones de orden mayor
let employes = [
  { name: "Jhonson", salary: 95000, hireDate: "July 2, 1858" },
  { name: "Hansel", salary: 75000, hireDate: "Agust 25, 2009" },
  { name: "Devora", salary: 83000, hireDate: "November 12, 1985" },
];

// Combinadas de forma elegante
const totalHightier = employes
  .map((employes) => employes.salary)
  .filter((salary) => salary > 75000)
  .reduce((total, current) => total + current);

console.log(totalHightier);
