'use strict'

let login;
let password;

login = "Admin";
password = "Canceled";

console.log("Who's there?");

switch (login) {
	case "Cancel":{
		console.log("Canceled");
		break;
	}
	case "Admin":{
		console.log("Password?");
		if(password == "TheMaster"){
			console.log("Welcome!");
		} else if(password != "TheMaster") {
			console.log("Wrong password");
		} else {
			console.log("Canceled");
		}
	}
	default:{
		console.log("I don't know you");
		break;
	}
}