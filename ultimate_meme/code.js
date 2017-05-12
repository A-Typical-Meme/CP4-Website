function test() {
	document.getElementById("test").innerHTML = "Success";
}	

function log() {
	console.log(prof_sets)
}

function log_local() {
	console.log(localStorage.new_prof_sets)
}

function clear() {
	var bus = JSON.parse("new_prof_sets")
	var bus = ""
	localStorage.setItem("new_prof_sets", bus)
}

/* These are the profile settings, by username and password */

var profile1 = new person("goodchilda", "test")

var profile2 = new person("john_derpy", "nope")

var prof_sets = [profile1, profile2];

/* The person constructor is a profile object creator for new users */

function person (userIn, passIn){
	this.username = userIn;
	this.passWord = passIn;
}

/* This function links to the main database to create a new profile */ 
 
var new_profile = function(){
	userIn = prompt("Enter the new username: ");
	passIn = prompt("Enter the new password: ");
	profile3 = new person(userIn, passIn);
	prof_sets.push(profile3);
	var sub = JSON.stringify(prof_sets)
	localStorage.setItem("new_prof_sets", sub);
	console.log(prof_sets[prof_sets.length - 1]);
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

/* This function cross checks the profile settings with the uservar and
passvar inputs. It also returns the key variable as True so that it will not repeat after
a successful login. */ 
 
function profCheck(userInput, passInput){
	var new_prof_sets = JSON.parse(localStorage.new_prof_sets)
	for(i = 0; i <= new_prof_sets.length; i++ )
		if(userInput === new_prof_sets[i].username){
			if(passInput === new_prof_sets[i].passWord){
				window.location = "file:///H:/Documents/GitHub/CP4-Website/ultimate_meme/ultimate_meme.html"
				return(key = "True")
				confirm("Login successful")
			}
			else {
			confirm("Login not successful")
			}
		}

}