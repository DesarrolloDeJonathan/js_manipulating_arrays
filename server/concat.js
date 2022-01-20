const elements = [1, 1, 2, 2];
const moreElements = [3, 3, 4, 4];

// const newArray = elements; al clonar de esta manera tenemos la copia de la referencia en memoria, lo que produce efectos secundarios

// con spread operator copiamos los elemetos sin la referencia en memoria
// Usaremos la clanacion para el caso del for que esta emulando el concat
const arrayConcatWithFor = [...elements];
for (let index = 0; index < moreElements.length; index++) {
  const element = moreElements[index];
  newArray.push(element);
}
console.log("Emulating concat with for", arrayConcatWithFor);

// Usamdo directamente concat no hace falta usar ... ya que lo hace por defecto
const arrayConcat = elements.concat(moreElements);
console.log("Applying concat", arrayConcat);

// Otra forma valida de combinar arrays
const arraySpreadConcat = [...elements, ...moreElements];
console.log("Concatenating with Spread Operator", arraySpreadConcat);

// Al enviar el spread operator seguido de un string dividira cada uno de sus elementos
const spreadString = [...elements, ..."random"];
console.log("Using Spread Operator With Strings", spreadString);

// De esta forma tendremos una copia de los elementos del array
elements.push(...moreElements);
console.log("Push With Spread Operator", elements);

// De esta forma tenemos el array completo ['e','l','e','m','e','n','t','o','s']
// Esto agrega el array completo dentro del otro array
elements.push(moreElements);
console.log("Push Without Spread Operator", elements);
