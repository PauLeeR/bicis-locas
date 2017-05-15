function validateForm(){
	nombre = document.getElementById("name").value;
	apellido = document.getElementById("lastname").value;
	mail = document.getElementById("input-email").value;
		if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ){
			return false;
		}


	password = document.getElementById("input-password").value;
	
	/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	/\S+@\S+\.\S+/
	
	if(nombre == "" )
	

	var span = document.createElement("span");
	var textoSpan = document.createTextNode("Este campo presenta un error");
	var contenedorNombre = document.getElementsByClass("name-container");
	span.appendChild(textoSpan);
	document.div.appendChild(span);


	
	var bici = document.getElementsByClassName(‘form-control’)[4].value;


	/* Escribe tú código aquí */
}