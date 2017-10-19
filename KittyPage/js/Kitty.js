
function sliderNext() {

	var li = document.getElementsByClassName("li-slider");

	for(var i= 0; i < li.length; i=i+1) {
		if($(li[i]).hasClass("active")){
			$(li[i]).removeClass("active");
			if(i > 0){
			$(li[i-1]).addClass("active");}
			else{
				$(li[li.length - 1]).addClass("active");
			}
			return;
		}
	}
}

function sliderPrev() {

	var li = document.getElementsByClassName("li-slider");

	for(var i=0; i < li.length; i=i+1) {
		if($(li[i]).hasClass("active")){
			$(li[i]).removeClass("active");
			if(i < li.length - 1){
			$(li[i+1]).addClass("active");}
			else{
				$(li[0]).addClass("active");
			}
			return;
		}
	} 
}

$(document).ready(function(){

$(".next").click(function(){
	sliderNext()

});
$(".prev").click(function(){
	sliderPrev();

});

setInterval(function(){sliderNext()}, 3000);




$('.dropdown').on('show.bs.dropdown', function(e){
$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function(e){
$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

});

function validateName() {
  if(myForm.fname.value.length==0){
	document.getElementById('messageName').innerHTML="Please enter your name";
	return false;
  }else {
  	document.getElementById('messageName').innerHTML="";
  }


  if (!/^[a-zA-Z]*$/g.test(document.myForm.fname.value)) {
  	document.getElementById('messageName').innerHTML="You have entered invalid characters";
  	return false;
 }
}

function validateLName() {
  if(myForm.lname.value.length==0){
	document.getElementById('messageLName').innerHTML="Please enter your name";
	return false;
  }else {
  	document.getElementById('messageLName').innerHTML="";
  }

  if (!/^[a-zA-Z]*$/g.test(document.myForm.lname.value)) {
  	document.getElementById('messageLName').innerHTML="You have entered invalid characters";
  	return false;
  }
}

function checkEmail() {
    var email = document.getElementById("email");
    var message = document.getElementById("messageEmail");
    var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;


        if(!regex.test(email.value)){
            message.innerHTML = "Email incorrect";
            return false;
        }else {
            message.innerHTML = ""
        }
}
function checkConfirmEmail()
{

    var email = document.getElementById('email');
    var confirm = document.getElementById('confirmEmail');
 
    var message = document.getElementById('confirmMessage'); 
   
    if(email.value == confirm.value){
        message.innerHTML = ""
    }else{
        message.innerHTML = "Emails do not match!"
        return false;
    }

    if(myForm.lname.value.length==0){
	message.innerHTML="Please enter your email";
	return false;
  }
}

function validateDropdown() {
  if(myForm.radio.value.length==0){
	document.getElementById('radioMessage').innerHTML="Please select an option";
	return false;
  }else{
  	document.getElementById('radioMessage').innerHTML="";

  }
}

function validateMessage() {
  if(myForm.field5.value.length==0){
	document.getElementById('messageBox').innerHTML="Please enter a message";
	return false;
  }else{
  	document.getElementById('messageBox').innerHTML=""
  }
}

function validateForm(){
	if(!validateName()) {
		alert("Please enter correct name.");
	}

	if(!validateLName()) {
		alert("Please enter correct name.");
	}

	if(!checkEmail()){
		alert("Please enter correct email.");
	}

	if(!checkConfirmEmail()){
		alert("Please enter correct email.");
	}
	if(!validateDropdown()){
		alert("Please select option.");
	}
	if(!validateMessage()){
		alert("Please enter message.");
	}

}



$( ".control-cat" ).click(function() {
  $( ".msg-cat" ).addClass('active');
  if($(".msg-dog").hasClass('active')){
  	$(".msg-dog").removeClass('active');
  }
  if($(".msg-other").hasClass('active')){
  	$(".msg-other").removeClass('active');
  }
});

$( ".control-dog" ).click(function() {
  $( ".msg-dog" ).addClass('active');
    if($(".msg-cat").hasClass('active')){
  	$(".msg-cat").removeClass('active');
  }
  if($(".msg-other").hasClass('active')){
  	$(".msg-other").removeClass('active');
  }
});

$( ".control-other" ).click(function() {
  $( ".msg-other" ).addClass('active');
   if($(".msg-dog").hasClass('active')){
  	$(".msg-dog").removeClass('active');
  }
  if($(".msg-cat").hasClass('active')){
  	$(".msg-cat").removeClass('active');
  }
});

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});