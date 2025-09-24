function sumarElementosArreglo(arreglo) {
    let suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]
    }
    return suma
}

const numeros = [1, 2, 3, 4, 5]
const resultado1 = sumarElementosArreglo(numeros)
console.log(resultado1)
