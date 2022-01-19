const letters = ["a", "b", "c"];

// Transformación con bucle for
const newArrayFor = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArrayFor.push(element + " foreada");
}

// Transformación con map
const newArrayMap = letters.map((item) => item + " mapeada");

console.log("Array original", letters);
console.log("Array whit loop for", newArrayFor);
console.log("Array whit map()", newArrayMap);
