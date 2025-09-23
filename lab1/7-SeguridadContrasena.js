function esContrasenaSegura(contrasena) {
    const tieneSuficientesCaracteres = contrasena.length > 8

    let contieneNumero = false;
    for (let i = 0; i < contrasena.length; i++) {
        if (contrasena[i] >= '0' && contrasena[i] <= '9') {
            contieneNumero = true;
            break;
        }
    }
    return tieneSuficientesCaracteres && contieneNumero;
}

const contrasena = "adrian777"
const esSegura = esContrasenaSegura(contrasena)

if (esSegura) {
    console.log("La contraseña es segura")
} else {
    console.log("La contraseña no es segura. Debe tener más de 8 caracteres y contener al menos un número.")
}