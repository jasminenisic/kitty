// function checkPass() {
// 	var pass1 = document.getElementById('pass1');
//     var pass2 = document.getElementById('pass2');

//     var message = document.getElementById('confirmMessage');

//     var goodColour = "#66cc66";
//     var badColour = "#ff6666";

//     if(pass1.value == pass2.value){ 
//     	pass2.style.backgroundColor = goodColor;
//         message.style.color = goodColor;
//         message.innerHTML = "Passwords Match!"
//     }

//     else {
//     	pass2.style.backgroundColor = badColor;
//         message.style.color = badColor;
//         message.innerHTML = "Passwords Do Not Match!"
//     }
// }
// function namePass() 
// {
// 	var pass1 = document.getElementById('pass1');
// 	var name = document.getElementById('fname');
// 	var patt = new RegExp(name);

// 	var messageName = document.getElementById('messageName');
// 	var test = patt.test(pass1);

// 	var goodColor = "#66cc66";
//     var badColor = "#ff6666";

// 	if(test = true){
//     	pass1.style.backgroundColor = badColor;
//     	messageName.style.color = badColor;
//     	messageName.innerHTML = "Cannot use password with your name"
//     }else{
//     	pass1.style.backgroundColor = goodColor;
//     	messageName.innerHTML = "Good!"
//     }

// }

// // function validateEmail() {
// 	var email = document.getElementById("email");
// 	var messageEmail = document.getElementById('messageEmail');

// 	var goodColor = "#66cc66";
//     var badColor = "#ff6666";

//   	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	
//   	var test = re.test(email.value);	
//   	if(test = true) {
//   		pass1.style.backgroundColor = badColor;
//     	messageEmail.style.color = badColor;
//     	messageEmail.innerHTML = "Cannot use password with your name"
  		
//   	}else {
//   		pass1.style.backgroundColor = goodColor;
//   	}

// }

// function checkEmail() {

//     var email = document.getElementById('email');
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     var messageEmail = document.getElementById('messageEmail');

//     if (!filter.test(email.value)) {
//     messageEmail.innerHTML = "Please provide a valid email address"
//     return false;
//  }
// }