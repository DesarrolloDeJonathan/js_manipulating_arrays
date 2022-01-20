const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

// Cuando emulamos el comportamiento de flat con for tendremos que agregar un for a la logica por cada array interior, o con recursion
const flatWithFor = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    flatWithFor.push(element);
  }
}
console.log("Emulating flat with for", flatWithFor);

// Con flat podremos pasarle la cantidiad de niveles que aplanara
const withFlat = matriz.flat(3);
console.log("Applying flat", withFlat);
