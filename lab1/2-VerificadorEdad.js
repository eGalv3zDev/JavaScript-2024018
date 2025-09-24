function esMayorDeEdad(edad) {
    return edad >= 18;
}

const edadUsuario = 18

const edad = parseInt(edadUsuario);
const resultado2 = esMayorDeEdad(edad);

if (resultado2) {
    console.log("Usted es mayor de edad");
} else {
    console.log("Usted es menor de edad.");
}