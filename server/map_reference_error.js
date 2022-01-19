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
];

// console.group("Sacando una propiedad");
// // De esta forma estarimos cumpliendo la normativa
// console.log("Array original", orders);
// const arrayMapSacaPropiedad = orders.map((item) => item.total);
// // Tenemos la transformacion de los datos que escogi para trabajar
// console.log("Array Map", arrayMapSacaPropiedad);
// console.log("Array original", orders); // La referencia original no ha sido alterada
// console.groupEnd();

// console.group("Agregando una propiedad");
// console.log("Array original sin mutar", orders);
// // No pasa con tipos primitivos solo tipos de objetos
// // Esto nos trae la referencia en memoria del objeto
// // Por lo tanto al aplicar un cambio a esa copia de referencia en memoria el original tambien mutara
// const arrayMapAgregaAtributo = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("Agregamos propiedad", arrayMapAgregaAtributo);
// console.log("Array Original mutado", orders);
// console.groupEnd();

console.group(
  "Agregando atributo sin afectar la referencia en memoria del objeto original",
);
const arrayMapAgregaAtributoSinMutar = orders.map((item) => {
  return {
    // Por medio del Spread Operator logramos clonar los atributos sin la referencia en memoria
    ...item,
    tax: 0.19,
  };
});
console.log(
  "Copia con Spread Operator sin la referencia en memoria",
  arrayMapAgregaAtributoSinMutar,
);
console.log("Array original no ha mutado", orders);
console.groupEnd();

// Modificar una propiedad en otra referencia en memoria sin modificar el origina
const resp4 = orders.map((item) => {
  return {
    ...item,
    total: item.total + 5,
  };
});
console.log("Resp4:", resp4);
console.log("Original:", orders);
