function primerMultiploDeSiete() {
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) {  
            return i
        }
    }
}

const resultado = primerMultiploDeSiete();
console.log("El primer múltiplo de 7 en el rango del 1 al 100 es:", resultado)