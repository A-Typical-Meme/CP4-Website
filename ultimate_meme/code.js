function test() {
	document.getElementById("test").innerHTML = "Success";
}	
 
var profile1 = ["goodchilda", "test"];
var profile2 = ["john_derpy", "nope"];
 
function profCheck(userInput, passInput){
	var key = "False"
	while(key == "False"){
		if (userInput == profile1[0]){
			if (passInput == profile1[1]){				
				confirm("Login successful")
				key = "True"
			}
			else {
				confirm("Login not successful")
			}
		}
		else if (userInput == profile2[0]){
			if (passInput == profile2[1]){				
				confirm("Login successful")
				key = "True"
			}
			else {
				confirm("Login not successful")
			}
		}
		else {
			confirm("Login not successful")
		}
	}
}


