const form = document.querySelector('#form');
const nombre = form.nombre
const apellido = form.apellido
const direccion = form.direccion
const ciudad = form.ciudad
const telefono = form.telefono
const correo = form.correo
const pregunta1 = form.pregunta1
const pregunta2 = form.pregunta2
const pregunta3 = form.pregunta3
const familia = form.familia
const cantidad = form.cantidad
const especificar = form.especificar
const gastos = form.gastos
const vacuna = form.vacuna
const vivienda = form.vivienda
const patio = form.patio
const comentario = form.comentario
const terminos = form.terminos

let errors = document.querySelector('.errors')

form.addEventListener('submit', validar)

function validar(e) {
    errors.innerHTML = ''
    validarNombre(e)
    validarApellido(e)
    validarDireccion(e)
    validarCiudad(e)
    validarTelefono(e)
    validarCorreo(e)
    validarPregunta1(e)
    validarPregunta2(e)
    validarPregunta3(e)
    validarFamilia(e)
    validarCantidad(e)
    validarEspecificar(e)
    validarGastos(e)
    validarVacunas(e)
    validarVivienda(e)
    validarPatio(e)
    validarComentario(e)
    validarTerminos(e)
}

function validarNombre(e) {
    if (nombre.value == '' || nombre.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese un nombre</li>'
        e.preventDefault()
    }
}

function validarApellido(e) {
    if (apellido.value == '' || apellido.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese un apellido</li>'
        e.preventDefault()
    }
}

function validarDireccion(e) {
    if (direccion.value == '' || direccion.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese una direccion</li>'
        e.preventDefault()
    }
}

function validarCiudad(e) {
    if (ciudad.value == '' || ciudad.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese una ciudad</li>'
        e.preventDefault()
    }
}

function validarTelefono(e) {
    if (telefono.value == '' || telefono.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese un telefono</li>'
        e.preventDefault()
    }
}

function validarCorreo(e) {
    if (correo.value == '' || correo.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese un correo</li>'
        e.preventDefault()
    } else {
        if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo.value)) {

        } else {
            errors.style.display = 'block'
            errors.innerHTML += '<li>Ingrese un correo valido</li>'
            e.preventDefault()
        }
    }
}

function validarPregunta1(e) {
    if (pregunta1.value == '' || pregunta1.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese la mascota que  desea</li>'
        e.preventDefault()
    }
}

function validarPregunta2(e) {
    if (pregunta2.value == '' || pregunta2.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese para quien es la mascota</li>'
        e.preventDefault()
    }
}

function validarPregunta3(e) {
    if (pregunta3.value == '' || pregunta3.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese cuantas personas habitan en su hogar</li>'
        e.preventDefault()
    }
}

function validarFamilia(e) {
    if (familia[0].checked == false && familia[1].checked == false) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese si estan todos de acuerdo adoptar</li>'
        e.preventDefault()
    }
}

function validarCantidad(e) {
    if (cantidad[0].checked == false && cantidad[1].checked == false) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese si hay mas mascotas en la casa</li>'
        e.preventDefault()
    }
}

function validarEspecificar(e) {
    if (especificar.value == '' || especificar.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese cantidad y tipo de mascotas</li>'
        e.preventDefault()
    }
}

function validarGastos(e) {
    if (gastos[0].checked == false && gastos[1].checked == false) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese si conoce los gastos de mantenimiento de las mascotas</li>'
        e.preventDefault()
    }
}

function validarVacunas(e) {
    if (vacuna[0].checked == false && vacuna[1].checked == false) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese si se compromete al cuidado de la mascota</li>'
        e.preventDefault()
    }
}

function validarVivienda(e) {
    if (vivienda[0].checked == false && vivienda[1].checked == false) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese el tipo de vivienda que posee</li>'
        e.preventDefault()
    }
}

function validarPatio(e) {
    if (patio[0].checked == false && patio[1].checked == false) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese si tiene patio</li>'
        e.preventDefault()
    }
}

function validarComentario(e) {
    if (comentario.value == '' || comentario.value == null) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Ingrese un comentario</li>'
        e.preventDefault()
    }
}

function validarTerminos(e) {
    if (!terminos.checked) {
        errors.style.display = 'block'
        errors.innerHTML += '<li>Acepte los terminos</li>'
        e.preventDefault()
    }
}