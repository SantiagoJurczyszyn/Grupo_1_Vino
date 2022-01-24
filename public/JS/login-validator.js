// Capturo el formulario y los inputs en un array

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

// Expresiones literales para comparar cada campo

const expresiones = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Correo válido.
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ // Mínimo seis caracteres, al menos una letra mayúscula, una letra minúscula y un número.
}

// Guardamos el estado de los campos

const campos = {
	email: false,
	password: false
}

// Creamos una función que validará todos los campos mediante un callback

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
	}
}

// Creamos una función para validar cada campo indivisual

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}`).style.border = "2px solid limegreen";
		document.getElementById(`error-${campo}`).style.display = "none";
		campos[campo] = true; // Cambiamos el estado del campo
	} else {
		document.getElementById(`${campo}`).style.border = "2px solid red";
		document.getElementById(`error-${campo}`).style.display = "block";
		campos[campo] = false; // Cambiamos el estado del campo
	}
}

// Recorremos cada input para aplicar los eventos que validarán los campos

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

// Modificamos el comportamiento del formulario en función de las validaciones de cada campo

formulario.addEventListener('submit', (e) => {
	if(campos.email && campos.password ){
		formulario.reset(); // Limpiamos todos los camposx
	} else {
        e.preventDefault(); // Interrumpimos el envío del formulario
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});