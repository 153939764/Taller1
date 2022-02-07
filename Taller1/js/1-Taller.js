
class Persona {
  nombre;
  apellido;
  peso;
  estatura;
  edad;
  Comuna;

  constructor( nombre, apellido, peso, estatura, edad, Comuna) {
    this.nombre = nombre;
    this.apellido = apellido;    
    this.peso = peso;
    this.estatura = estatura;
    this.edad = edad;
    this.Comuna = Comuna;
  }

  Jugar(){
    console.log('Jugando');
  }
  estudiar() {
    console.log('Estudiando');
  }
  //Información de las propiedades.
  mostrarInformacion() {
    return `${this.nombre} ${this.Apellido}tiene un peso de : ${ this.peso }, su estatura es de: ${this.estatura} y su edad: ${this.edad}`;
  }
}

// Clase Alumno
class alumno extends Persona {
  rut;
  direccion;

  constructor(nombre, apellido, peso, estatura, edad, rut, direccion, Comuna) {
    //constructor de la clase padre
    super(nombre, apellido, peso, estatura, edad, Comuna);

    this.rut = rut;
      this.direccion = direccion;
  }

  // override (método padre)
  mostrarAlumno() {
    return `El Alumno ${this.nombre}, ${this.apellido}, con Rut: ${this.rut} y direccion ${this.direccion}, pertenese a un colegio de : ${ this.Comuna }`;
  }
}

  const alumno1 = new alumno("Juan","Vergara", 69, 1.65, 39, 153939764, 'Uno Sur #3579', 'Lo Espejo');
      console.log(alumno1);
        console.log(alumno1.mostrarAlumno());