const elements = ["Fire", "Air", "Water"];

let rtaFinal = "";
const separator = "--";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join("--");
console.log("for", rtaFinal);
console.log("join", rta);

// Ejemplo con un titulo, apartir de este generaremos una URL
// Uso practico de estos dos metodos
const title = "Curso de manipulación de arrays";
// A split le decimos que cada espacio cree un string
// El join pide unir los strings con un gion
// y al final para evitar errores al compartir la url pasar a minusculas
const urlFinal = title.split(" ").join("-").toLowerCase();
console.log(title.split(" "));
console.log(urlFinal);
