/* 
	Global Variables
						*/
var fname, lname, phone, email, stringFormat, intFormat, phoneDashFormat;


/*
	Overall form validation function
										*/
function validate(){
	stringFormat = /^[A-Za-z.-]+$/;
	intFormat = /^\d{10}$/;
	phoneDashFormat = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;

/* Validating First Name */
	fname = document.getElementById("fname").value;

	if(!fname.match(stringFormat)){
		alert("Please input characters and hyphens only for the first name field!");
		document.getElementById("fname").focus();
		return false;
	}

/* Validating Last Name */
	lname = document.getElementById("lname").value;

	if(!lname.match(stringFormat)){
		alert("Please input characters and hyphens only for the last name field!");
		document.getElementById("lname").focus();
		return false;
	}

/* Validating Email */
	email = document.getElementById("email").value;

	if(!validateEmail(email)){
		alert("Please input a proper email!");
		document.getElementById("email").focus();
		return false;
	}
	

/* Validating Phone Number */
	phone = document.getElementById("phone").value;

	if(((!phone.match(intFormat)) && (!phone.match(phoneDashFormat))) && !(phone == "")){
		alert("Please follow the permitted phone number formats!");
		document.getElementById("phone").focus();
		return false;
	}

	alert("Message Successfully Sent!");
	return true;
}


/*
	Helper function to check email input
											*/
function validateEmail(mail){
	atsign = mail.indexOf("@");
	dot = mail.lastIndexOf(".");

	if((atsign < 1) || (dot < 1) || ((dot - atsign) < 2) || (dot == mail.length - 1)){
		return false;
	}else{
		return true;
	}
}




