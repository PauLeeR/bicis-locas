function validateForm(){
	nombre = document.getElementById("name").value;
	apellido = document.getElementById("lastname").value;
	mail = document.getElementById("input-email").value;
	password = document.getElementById("input-password").value;
	bici = document.getElementsByClassName("form-control")[4].value;
	//bike = document.getElementsByTagName("select");
	twitter = document.getElementById("input-social").value;

	function mayuscula(string){ // variable que contendra la validacion para que la primera letra sea mayuscula
		return string.charAt(0).toUpperCase();
	}

//vamos  a crear distintos spans (cada uno en una funcion) para alertar al usuario si está cometiendo algún error al ingresar sus datos
function spanName(){
	var span = document.createElement("span");
	var textoSpan = document.createTextNode("Tu nombre debe comenzar con mayúscula");
	var contenedorNombre = document.getElementsByClassName("name-container input-box")[0];
	span.appendChild(textoSpan);
	contenedorNombre.appendChild(span);
	if (nombre == "" || nombre.length == 0 || nombre.charAt(0) != mayuscula(nombre) || /^[a-zA-Z]+$/.test(nombre) == false){
		return span;
	}else{
		return nombre.charAt(0).toUpperCase();
	}
}

function spanLastname(){
	var span = document.createElement("span");
	var textoSpan = document.createTextNode("Tu apellido debe comenzar con mayúscula");
	var contenedorApellido = document.getElementsByClassName("lastname-container input-box")[0];
	span.appendChild(textoSpan);
	contenedorApellido.appendChild(span);
	if (apellido == "" || apellido.length == 0 || apellido.charAt(0) != mayuscula(apellido) || /^[a-zA-Z]+$/.test(apellido) == false){
		return span; 
	} else{
		return apellido.charAt(0).toUpperCase(); 
	}
}
function spanEmail(){
	var span = document.createElement("span");
	var textoSpan = document.createTextNode("Tu correo debe tener un formato válido, por ej. name@domain.com");
	var contenedorEmail = document.getElementsByClassName("email-container input-box")[0];
	span.appendChild(textoSpan);
	contenedorEmail.appendChild(span);
	function spanContraseña() {
		var span = document.createElement("span");
		var texto = document.createTextNode("Tu contraseña debe tener al menos 6 caracteres");
		var contenedorPassword = document.getElementsByClassName("form-group input-box")[0];
		span.appendChild(texto);
		contenedorPassword.appendChild(span);
		if(mail == "" || mail.length == 0 || /\S+@\S+\.\S+/.test(mail) == false){ 
			return span;
		} else {
			return /\S+@\S+\.\S+/.test(mail) == true;
		}
	}
}
	function spanContraseña() {
		var span = document.createElement("span");
		var texto = document.createTextNode("Tu contraseña debe tener al menos 6 caracteres");
		var contenedorPassword = document.getElementsByClassName("form-group input-box")[0];
		span.appendChild(texto);
		contenedorPassword.appendChild(span);
		if(password === "123456" || password === "098765" || password === "password"){
		return span;
		} else {
			return;	
		}
	}
}
	
/* Escribe tú código aquí */
