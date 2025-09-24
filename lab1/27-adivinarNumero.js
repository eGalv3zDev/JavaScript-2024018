const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intento = 0;

alert("¡Adivina el número entre 1 y 100!");

while (intento !== numeroSecreto) {
    intento = parseInt(prompt("Ingresa tu intento:"))
    if (isNaN(intento)) {
        continue
    }
    if (intento < numeroSecreto) {
        alert("Demasiado bajo. Intenta de nuevo.")
    } else if (intento > numeroSecreto) {
        alert("Demasiado alto. Intenta de nuevo.")
    } else {
        alert(`¡Felicidades! Adivinaste el número: ${numeroSecreto}`);
        break
    }
}