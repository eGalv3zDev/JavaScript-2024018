function cadenaMasLarga(arr) {
    if (arr.length === 0) return null
    let masLarga = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > masLarga.length) {
            masLarga = arr[i];
        }
    }
    return masLarga;
}

const palabras = ["manzana", "pera", "sandía", "kiwi"];
console.log(cadenaMasLarga(palabras));