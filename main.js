
class Alumno { //clase alumnos
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materiasInscritas = [];
        this.calificaciones = {};
    }

    inscribirMateria(materia) {
        if (!this.materiasInscritas.includes(materia)) {
            this.materiasInscritas.push(materia);
        } else {
            console.log(`El alumno ya está inscrito en ${materia.nombre}.`);
        }
    }
    

    asignarCalificacion(materia, calificacion) {
        this.calificaciones[materia.nombre] = calificacion;
    }

    obtenerPromedio() {
        let sum = 0;
        let count = 0;
        for (let materia in this.calificaciones) {
            sum += this.calificaciones[materia];
            count++;
        }
        return count === 0 ? 0 : sum / count;
    }
}
//-------------------------------------------------------------------------------------------
let listaAlumnos = []; // Esta lista almacenará todos los alumnos dados de alta

function darDeAltaAlumno(nombre, apellido, edad) {
    const nuevoAlumno = new Alumno(nombre, apellido, edad);
    listaAlumnos.push(nuevoAlumno);
    console.log(nuevoAlumno);
    return nuevoAlumno; // Devolvemos el nuevo alumno creado
}
//------------------------------------------------------------------------------------------------
const form = document.getElementById('formularioAlta'); // Debe ser una cadena de texto, no una variable
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = form.querySelector("[name='nombre']").value;
    const secondName = form.querySelector("[name='apellidos']").value;
    const age = form.querySelector("[name='edad']").value;

    darDeAltaAlumno(firstName, secondName, age);

});
//------------------------------------------------------------------------------------------------
const materiaEspañol = {
    nombre: "Español",
    nivel: "Básico" 
};
const materiaIngles = {
    nombre: "Inglés",
    nivel: "Básico" 
};
const materiaFrances = {
    nombre: "Francés",
    nivel: "Básico"
};

//-----------------------------------------------------------------------------------------------
darDeAltaAlumno("Juan", "Perez", 20);
darDeAltaAlumno("Alex", "Sanchez", 16);
darDeAltaAlumno("Drake", "Cruz", 17);
//-----------------------------------------------------------------------------------------------
const asignar = document.getElementById("asignar");
        asignar.addEventListener("click", function() {
            window.location.href = "asignar.html";
        });
