function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var mail = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var bici = document.getElementById("bici").value;
	//bike = document.getElementsByTagName("select");
	//var twitter = document.getElementById("input-social").value;

	/*function mayuscula(string){ // variable que contendra la validacion para que la primera letra sea mayuscula
		return string.charAt(0).toUpperCase();
	}*/
	if (nombre == "" || nombre.length == 0 || /^[a-zA-Z]+$/.test(nombre) == false){
		var spanName = document.createElement("span");
		var textName = document.createTextNode("Este campo no debe estar vacío");
		var contenedorNombre = document.getElementsByClassName("name-container input-box")[0];
		spanName.appendChild(textName);
		contenedorNombre.appendChild(spanName);
		return false;
	}else if(spanName != null){
		contenedorNombre.removeChild(spanName);

	}else if(nombre == "" || nombre.length == 0 || nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
		var spanNameMay = document.createElement("span");
		var textNameMay = document.createTextNode("Tu nombre debe comenzar con mayúscula");
		var contenedorNombre = document.getElementsByClassName("name-container input-box")[0];
		spanNameMay.appendChild(textNameMay);
		contenedorNombre.appendChild(spanNameMay);
		return spanNameMay;
	}
	if (apellido == "" || apellido.length == 0 || /^[a-zA-Z]+$/.test(apellido) == false){
		var spanLastn = document.createElement("span");
		var textoSpanLastname = document.createTextNode("Este campo no debe estar vacío");
		var contenedorApellido = document.getElementsByClassName("lastname-container input-box")[1];
		spanLastn.appendChild(textoSpanLastname);
		contenedorApellido.appendChild(spanLastn);
		return false;
	} else if(apellido == "" || apellido.charAt(0) != apellido.charAt(0).toUpperCase()){
		var spanLastnMay = document.createElement("span");
		var textoSpanLastnameMay = document.createTextNode("Tu apellido debe comenzar con mayúscula");
		var contenedorApellido = document.getElementsByClassName("lastname-container input-box")[1];
		spanLastnMay.appendChild(textoSpanLastnameMay);
		contenedorApellido.appendChild(textoSpanLastnameMay);
		return true;
	}
	if(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail) === false){
		var spanEmail = document.createElement("span");
		var textoSpanEmail = document.createTextNode("Este campo no debe estar vacío");
		var contenedorEmail = document.getElementsByClassName("email-container input-box")[2];
		spanEmail.appendChild(textoSpanEmail);
		contenedorNombre.appendChild(spanEmail);
		return false;	
	} 
	if (password == "" || password.length == 0 || /^\s+$/.test(password)){ 
		var spanPass = document.createElement("span");
		var textoSpanPass = document.createTextNode("Este campo no debe estar vacio");
		spanPass.appendChild(textoSpanPass);
		contenedorPassword.appendChild(spanPass);
		return false;
	}
	else if (password === "123456" || password === "098765" || password === "password" || password.length <= 6){
		var spanPassSeguro = document.createElement("span");
		var textoSpanPassSeguro = document.createTextNode("Para mayor seguridad, tu contraseña debe contener mínimo 6 caracteres");
		var contenedorPassword = document.getElementsByClassName("form-group input-box")[3];
		spanPassSeguro.appendChild(textoSpanPassSeguro);
		contenedorPassword.appendChild(spanPassSeguro);
		return false;
	}
	if(bici == ""){
		var spanBici = document.createElement("span");
		var textoSpanBici = document.createTextNode("Selecciona una opción");
		var contenedorBici = document.getElementsByClassName("form-group input-box")[4];
		spanBici.appendChild(textoSpanBici);
		contenedorBici.appendChild(spanBici);
		return true;
	}

}

//vamos  a crear distintos spans (cada uno en una funcion) para alertar al usuario si está cometiendo algún error al ingresar sus datos
/*function spanName(){
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
}*/

/* Escribe tú código aquí */
