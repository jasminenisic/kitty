var Validation = function(){
    validateName = 

    function validateName() {
      if(myForm.fname.value.length==0){
    	document.getElementById('messageName').innerHTML="Please enter your name";
      }else {
      	document.getElementById('messageName').innerHTML="";
      }


      if (!/^[a-zA-Z]*$/g.test(document.myForm.fname.value)) {
      	document.getElementById('messageName').innerHTML="You have entered invalid characters";
     }
    }

    validateLName =

    function validateLName() {
      if(myForm.lname.value.length==0){
	       document.getElementById('messageLName').innerHTML="Please enter your name";
      }else {
  	     document.getElementById('messageLName').innerHTML="";
      }

      if (!/^[a-zA-Z]*$/g.test(document.myForm.lname.value)) {
      	document.getElementById('messageLName').innerHTML="You have entered invalid characters";
      }
    }

    checkEmail =

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

    checkConfirmEmail =

    function checkConfirmEmail()
    {

        var email = document.getElementById('email');
        var confirm = document.getElementById('confirmEmail');
     
        var message = document.getElementById('confirmMessage'); 
       
        if(email.value == confirm.value){
            message.innerHTML = ""
        }else{
            message.innerHTML = "Emails do not match!"
        }

        if(myForm.lname.value.length==0){
    	message.innerHTML="Please enter your email";
      }
    }

    validateDropdown = 

    function validateDropdown() {
      if(myForm.radio.value.length==0){
    	document.getElementById('radioMessage').innerHTML="Please select an option";
      }
    }

    validateMessage =

    function validateMessage() {
      if(myForm.field5.value.length==0){
    	document.getElementById('messageBox').innerHTML="Please enter a message";
      }
    }