function test() {
	document.getElementById("test").innerHTML = "Success";
}	

/* These are the profile settings, by username and password */

var profile1 = ["goodchilda", "test"];
var profile2 = ["john_derpy", "nope"];
var key = "False"

/* This function asks the user for their username and password by popup,
Leaves these inputs in uservar and passvar for later */

function login(){
	while(key === "False"){
		var uservar = prompt("Enter username: ")
		var passvar = prompt("Enter password: ") 
		profCheck(uservar, passvar)
	}
}
 
/* This function cross checks the profile settings with the uservar and
passvar inputs. It also returns the key variable as True so that it will not repeat after
a successful login. */ 
 
function profCheck(userInput, passInput){
	//This part checks profile1's username and password with the inputs give
	if (userInput == profile1[0]){
		if (passInput == profile1[1]){				
			window.location = "file:///H:/Documents/GitHub/CP4-Website/ultimate_meme/ultimate_meme.html"
			return(key = "True")
			confirm("Login successful")
		}
		else {
			confirm("Login not successful")
		}

	}
	//This part checks profile2's username and password with the inputs given
	else if (userInput == profile2[0]){
		if (passInput == profile2[1]){			
			window.location = "file:///H:/Documents/GitHub/CP4-Website/ultimate_meme/ultimate_meme.html"
			return(key = "True")
			confirm("Login successful")
		}
		else {
			confirm("Login not successful")
		}
	}
	else {
		confirm("Login not successful")
	}

}
