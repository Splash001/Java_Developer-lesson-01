'use strict'

let admin;
let name;

name = "John";
admin = name;
console.log("admin = " + admin);

let login;
let password;

login = admin;
password = "TheMaster";

console.log("Who's there?");

if (login == admin){
	console.log("Enter password:");
		if(password == "TheMaster"){
			console.log("Welcome!");
		} else if (password != "TheMaster") {
			console.log("Wrong password");
		} else {
			console.log("Canceled");
		}	
} else if (login != admin) {
	console.log("I don't know you");
} else {
	console.log("Canceled");
}
