const numbers = [1, 2, 3, 4];

// Evaluaremos que todos los elementos cumplan la condicion emulando some con for
let rtaWithFor = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rtaWithFor = true;
    break;
  }
}
console.log(rtaWithFor);

// Ahora en vez de for usamos some
const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2", rta2);

// Another example
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

const rta3 = orders.some((item) => item.delivered);
console.log("rta3", rta3);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const underFifteen = team.every((jugador) => jugador.age <= 15);
console.log(underFifteen);

// Evaluamos si es true o false para la siguiente condicion
if (underFifteen) {
  console.log("Todos en el equipo cumplen con la edad");
} else {
  console.log(
    "Hay personas que no cumplen la edad permitida para pertenecer al equipo",
  );
}
