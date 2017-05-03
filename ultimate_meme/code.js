function test() {
	document.getElementById("test").innerHTML = "Success";
}	

/* These are the profile settings, by username and password */

var profile1 = {
	username : "goodchilda", 
	passWord : "test",
};

var profile2 = {
	username : "john_derpy", 
	passWord : "nope",
};

/* The person condructor is a profile object creator for new users */

function person (userIn, passIn){
	this.username = userIn;
	this.passWord = passIn;
}

/* This function links to the main database to create a new profile */
 
var new_profile = function(){
	userIn = prompt("Enter the new username: ");
	passIn = prompt("Enter the new password: ");
	prof_sets[prof_sets.length] = new person(userIn, passIn);
	console.log(prof_sets[prof_sets.length - 1]) 
}

/* This function asks the user for their username and password by popup,
Leaves these inputs in uservar and passvar for later */

var login = function(){
	while(key === "False"){
		uservar = prompt("Enter username: ")
		passvar = prompt("Enter password: ") 
		profCheck(uservar, passvar)
	}
}

/* Some settings for infinite loop prevention and profile scanning */

var key = "False";

var prof_sets = [profile1, profile2,];

/* This function cross checks the profile settings with the uservar and
passvar inputs. It also returns the key variable as True so that it will not repeat after
a successful login. */ 
 
function profCheck(userInput, passInput){
	for(i = 0; i <= prof_sets.length; i++ )
		if(userInput === prof_sets[i].username){
			if(passInput === prof_sets[i].passWord){
				window.location = "file:///H:/Documents/GitHub/CP4-Website/ultimate_meme/ultimate_meme.html"
				return(key = "True")
				confirm("Login successful")
			}
			else {
			confirm("Login not successful")
			}
		}
	//This part checks profile1's username and password with the inputs give
	/*if (userInput == profile1[0]){
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
	
	}*/

}
