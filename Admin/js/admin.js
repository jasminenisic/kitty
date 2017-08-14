function checkEmail() {

	
	// var emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
	// var messageEmail = document.getElementById("messageEmail");

	// var test = emailPattern.test(email);

	// if (!test) {
	// 	messageEmail.innerHTML = "Email is incorrect"
	// }

    var email = document.getElementById("email");
    var message = document.getElementById("messageEmail");
    var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;


            if(!regex.test(email.value)){
                  message.innerHTML = "Email Incorrect";
                return false;
            }else {
              message.innerHTML = ""
            }

}



function nameValid() 
{
	var pass1 = document.getElementById('pass1');
	var name = document.getElementById('fname');

	var message = document.getElementById('messageName');
	var test = name.includes(pass1.value);

	var goodColor = "#66cc66";
    var badColor = "#ff6666";

	if(test = true){
    	pass1.style.backgroundColor = badColor;
    	message.style.color = badColor;
    	message.innerHTML = "Cannot use password with your name"
    }else{
    	pass1.style.backgroundColor = goodColor;
    	message.innerHTML = "Good!"
    }

}

function checkPass()
{

    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');

 
    var message = document.getElementById('confirmMessage'); 
   
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
   
    if(pass1.value == pass2.value){
   
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"
    }else{
       
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }


}
function validate() {
  if(myForm.fname.value.length==0){
	document.getElementById('errfn').innerHTML="this is invalid name";
  }


  if (!/^[a-zA-Z]*$/g.test(document.myForm.fname.value)) {
  	document.getElementById('errfn').innerHTML="this is invalid characters";
 }
}


function validateForm() {


    var name = document.forms["myForm"]["fname"].value;
    if (name == null || name == "") {
        alert("Name must be filled out.");
        return false;
    }

    // var password = document.forms["myForm"]["password"].value;
    // if (password == null || password == "") {
    //     alert("Password must be filled out.");
    //     return false;
    // }
    var subject = document.forms["myForm"]["subject"].value;
    if (subject == null || subject == "") {
        alert("Must select an option");
        return false;
    }
    var upload = document.forms["myForm"]["fileupload"].value;
    if (upload == null || upload == "") {
        alert("Upload picture");
        return false;
    }
}




  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

$('.carousel').carousel({
   interval: 5000
 });

$( ".forms" ).click(function() {
  $( ".sub-menu" ).toggleClass("hide");
});

$( ".menu-btn" ).click(function() {
  $( "body" ).toggleClass("hide-menu");
});

$( ".menu-btn" ).click(function() {
  $( "nav-lst-hidden" ).toggleClass("hide");
  $( ".logo-small" ).toggleClass("hide");
  
});

$( ".dropdown-bttn" ).click(function() {
  $( ".dropdown-sub-menu" ).toggleClass("hide");
});

$( ".control-cat" ).click(function() {
  $( ".hide-msg" ).addClass("active");
});

$( ".dropdown-bttn" ).click(function() {
});

$( ".lang-dropdown" ).click(function() {
  $( ".lang-sub-menu" ).toggleClass("hide");
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$(".forms").click(function(){
	$(this).toggleClass("glyphicon-plus").toggleClass("glyphicon-minus");
});
$('scrolling-tab').scrollspy({ target: '#navbar-example' });


$( ".control-cat" ).click(function() {
  $( ".hide-cat" ).toggleClass("hide");
});

