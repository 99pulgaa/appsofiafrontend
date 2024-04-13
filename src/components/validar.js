// validar.js
import { Link } from 'react-router-dom';

// Función para validar el inicio de sesión
export function validarYRedireccionar() {
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;

    if (!validateEmail(email)) {
        alert("Por favor, introduzca un email válido.");
        return;
    }

    if (contraseña.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // Si la validación es exitosa, redireccionar
    window.location.href = '../html/menu.html';
}

// Función para validar el formato del email
function validateEmail(email) {
    var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Función para validar el registro
export function validarRegistro() {
    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    var documento = document.getElementById("documento").value;
    var pass = document.getElementById("pass").value;
    var repetirPass = document.getElementById("repetirpass").value;

    // Validación del nombre
    if (nombre.trim() === "") {
        alert("Por favor, introduce tu nombre.");
        return;
    }

    // Validación del email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un email válido.");
        return;
    }

    // Validación del número de documento
    if (documento.length < 9 || documento.length > 10 || isNaN(documento)) {
        alert("El número de documento debe tener entre 9 y 10 dígitos y ser numérico.");
        return;
    }

    // Validación de la contraseña
    if (pass.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // Si la validación es exitosa, redireccionar a la página de registro exitoso
    <Link to="/ListClientesComponents"></Link>
}

// Función para validar el email en el formulario de forgetpass
export function validarEmail() {
    var email = document.getElementById("email").value;

    // Validación del email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un email válido.");
        return;
    }

    // Si la validación es exitosa, redireccionar a la página de registro exitoso
    window.location.href = '../html/forgetpasscheck.html';
}