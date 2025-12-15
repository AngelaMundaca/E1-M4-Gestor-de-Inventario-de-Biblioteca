class Libro {
  constructor(titulo, autor, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.estado = estado;
  }

  mostrarInfo() {
    console.log(
      `El libro "${this.titulo}" de ${this.autor} se encuentra ${this.estado}.`
    );
  }
}

const inventario = [];

let agregarMas = true;

while (agregarMas) {
  const titulo = prompt("Ingresa el título del libro:");
  const autor = prompt("Ingresa el autor del libro:");
  const estado = prompt("Ingresa el estado del libro (Disponible / Prestado):");

  const nuevoLibro = new Libro(titulo, autor, estado);
  inventario.push(nuevoLibro);

  agregarMas = confirm("¿Deseas agregar otro libro?");
}

console.log("--- Inventario de la Biblioteca ---");

for (const libro of inventario) {
  libro.mostrarInfo();
}