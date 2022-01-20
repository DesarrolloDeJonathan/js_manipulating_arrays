const numbers = [1, 5, 3, 7];

// Emulando comportamiento del some con un for
let someWithFor = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    someWithFor = true;
    // Esta instruccion rompera el for cuando ya haya encontrado el resultado de la condicion
    break;
  }
}
console.log(`Emulating some with for:
            ${someWithFor}`);

// metodo some lo reduce a un exprecion
// Si el item que es evaluado en ese momento su residuo es 0 al dividirlo entre 2
// Altero la condicion para mostrar un true
const some = numbers.some((item) => item % 2 !== 0);
console.log("Using some =", some);

// some con objetos
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

// Comprobara si almenos una orden ha sido entregada, true o false
const someObject = orders.some((item) => item.delivered);
console.log("Using some with array of objects", someObject);

// Usaremos una libreria con fechas Date()
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

// Verificaremos si puedo tomar una cita en este espacio de tiempo con some y la libreria date-fns
// Sera lo que le pasemos como parametro al la funcion isOverlapWithSome
const newAppointment = {
  startDate: new Date(2021, 1, 1, 10),
  endDate: new Date(2021, 1, 1, 20, 30),
};

// La usaremos para saber si dos fechas colisionan entre sí n
const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const dateNoOverlapWithSome = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate },
    );
  });
};

// Si da true es por que se sobrepone con alguna de las sitas de la coleccion de objetos
console.log(
  "Verificando si hay espacio disponible para la cita",
  dateNoOverlapWithSome(newAppointment),
);
