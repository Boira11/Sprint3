
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
	

	
	// Validate fields entered by the user: name, phone, password, and email

	//Validacion Nombre

	if( fName.value == "" || fName.length <3 || !patternLetters.test(fName)){
		document.getElementById("fName").style.border = "red";
		error++;
		
	 }

	 // Validacion Email   

	//  if(fEmail.value == "" || fEmail.length<3 || !patternEmail.test(fEmail.value) ){
	//  	error++;
	//  }

	//  //Validacion Apellido
	//  if( fLastN.value == "" || fLastN.length <3 || !patternLetters.test(fLastN.value)){
	// 	error++;
	//  }

	//  //Validacion Password
	//  if( fPassword.value == "" || fPassword.length <3 || patternLetters.test(fPassword.value) || patternNumbers.test(fPassword.value)){
	// 	error++;
	//  }
	 

	//  //Validacion Adress
	//  if( fAddress.value == "" || fAddress.length <3 ){
	// 	error++;
	//  }

	//   //Validacion phone
	//   if( fPhone.value == "" || fPhone.length <3 || !patternNumbers.test(fPhone.value) ){
	// 	error++;
	//  }

	if(error>0){
		alert("Error");
	}
	else{
		alert("OK");
	}

}
