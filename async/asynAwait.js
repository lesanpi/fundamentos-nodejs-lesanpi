async function hola(nombre) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log("Bla bla bla bla bla...");
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(`Adios, ${nombre}`);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("Luis");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Terminamos");
}

console.log("Empezamos");
main();
console.log("Va a salir despues de Empezamos");
