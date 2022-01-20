const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// Haciendo esta fusion tendremos el resultado de flatMap
const mapAndFlap = users.map((user) => user.attributes).flat();
console.log("Method Chaining between map and flat", mapAndFlap);

// Los tenemos en un solo metodo
// Primero flatMap() realiza un map y luego el flat.
const flatMapOnly = users.flatMap((user) => user.attributes);
console.log("Applying flatMap", flatMapOnly);

// Ahora con un objeto de fechas
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

// Veremos que flatMap tiene la resctricion de no poder establecer el nivel de profundidad al que accedera en un array de arrays
// const flatMapObject = Object.values(calendars).flatMap((item) => {
//   console.log("item", item);
//   return item.startDate;
// });
// output [ undefined, undefined ]
// console.log(flatMapObject);

// Object.values(calendars) obtenemos un array de arrays
// Luego corremos un flatMap para tener solo una propiedad
// Y debido a su restriccion dentro estableceremos un map para que al retornar sea aplanado
const flatMapObject = Object.values(calendars).flatMap((item) => {
  console.log("item", item);
  return item.map((date) => date.startDate);
  // console.log("item", item);
});
console.log(flatMapObject);
