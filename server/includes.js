const pets = ["cat", "dog", "bat"];

// Emularemos unclude con for
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    includeInArray = true;
    break;
  }
}

// Aplicando con <includes></includes>
const rta = pets.includes("dog");
console.log("for", includeInArray);
console.log("includes", rta);

// Esta linea nos daria error ya que includes no espera una arrow function sino el elemento que estamos buscando
// const rta = pets.includes(item => item ==="dog");
