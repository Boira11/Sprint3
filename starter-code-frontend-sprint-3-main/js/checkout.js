
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	let fName = document.getElementById("fName").value;
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	let fName2 = document.getElementById("fName").value;
	let fEmail2 = document.getElementById("fEmail").value;
	let fAddress2 = document.getElementById("fAddress").value;
	let fLastN2 = document.getElementById("fLastN").value;
	let fPassword2 = document.getElementById("fPassword").value;
	let fPhone2 = document.getElementById("fPhone").value;

	
	let patternLetters = /^[a-zA-Z]+$/;
	let patternEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	let patternNumbers = /^\d{9}$/;
	


	
	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail"); 
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");

	//Obtenemos el formulario
	let form = document.getElementById("myForm");

	// Añadir un evento submit al formulario
	form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    	//Validacion Nombre

	if( fName.value == "" || fName.length <3 || !patternLetters.test(fName)){
		document.getElementById("fName").style.border = "1px solid red";
		document.getElementById("fName").style.backgroundColor = "#FFC0CB";
		errorName.style.display = "block";
		error++;
		
		
	 }

	 else{
		// Establecer borde y fondo por defecto
		document.getElementById("fName").style.border = "";
		document.getElementById("fName").style.backgroundColor = "";
		errorName.style.display = "none";
	 }

	//Validacion Email   

	 if(fEmail.value == "" || fEmail.length<3 || !patternEmail.test(fEmail.value) ){
		document.getElementById("fEmail").style.border = "1px solid red";
		document.getElementById("fEmail").style.backgroundColor = "#FFC0CB";
		errorEmail.style.display = "block";
	 	error++;
		
	 }

	 else{
		// Establecer borde y fondo por defecto
		document.getElementById("fEmail").style.border = "";
		document.getElementById("fEmail").style.backgroundColor = "";
		errorEmail.style.display = "none";
	 }

	 //Validacion Apellido
	 if( fLastN.value == "" || fLastN.length <3 || !patternLetters.test(fLastN.value)){
		document.getElementById("fLastN").style.border = "1px solid red";
		document.getElementById("fLastN").style.backgroundColor = "#FFC0CB";
		errorLastN.style.display = "block";
		error++;
	 }

	 else{
		// Establecer borde y fondo por defecto
		document.getElementById("fLastN").style.border = "";
		document.getElementById("fLastN").style.backgroundColor = "";
		errorLastN.style.display = "none";
	 }

	 //Validacion Password
	 if( fPassword.value == "" || fPassword.length <3 || patternLetters.test(fPassword.value) || patternNumbers.test(fPassword.value)){
		document.getElementById("fPassword").style.border = "1px solid red";
		document.getElementById("fPassword").style.backgroundColor = "#FFC0CB";
		errorPassword.style.display = "block";
		error++;
	 }

	 else{
		// Establecer borde y fondo por defecto
		document.getElementById("fPassword").style.border = "";
		document.getElementById("fPassword").style.backgroundColor = "";
		errorPassword.style.display = "none";
	 }
	 

	 //Validacion Adress
	 if( fAddress.value == "" || fAddress.length <3 ){
		document.getElementById("fAddress").style.border = "1px solid red";
		document.getElementById("fAddress").style.backgroundColor = "#FFC0CB";
		errorAddress.style.display = "block";
		error++;
	 }

	 else{
		// Establecer borde y fondo por defecto
		document.getElementById("fAddress").style.border = "";
		document.getElementById("fAddress").style.backgroundColor = "";
		errorAddress.style.display = "none";
	 }

	  //Validacion phone
	  if( fPhone.value == "" || fPhone.length <3 || !patternNumbers.test(fPhone.value) ){
		document.getElementById("fPhone").style.border = "1px solid red";
		document.getElementById("fPhone").style.backgroundColor = "#FFC0CB";
		errorPhone.style.display = "block";
		error++;
	 }

	 else{
		// Establecer borde y fondo por defecto
		document.getElementById("fPhone").style.border = "";
		document.getElementById("fPhone").style.backgroundColor = "";
		errorPhone.style.display = "none";
	 }
    
	 //Devolvemos los datos al formulario en caso de error
	if(error>0){
		alert("Error");
		document.getElementById("fName2").value
		document.getElementById("fEmail2").value
		document.getElementById("fAddress2").value
		document.getElementById("fLastN2").value
		document.getElementById("errorPassword2").value
		document.getElementById("fPhone2").value
	}
	else{
		alert("OK");
	}
});
	

	

}
