var Control = function(){

  controlCat =

$( ".control-cat" ).click(function() {
  $( ".msg-cat" ).addClass('active');
  if($(".msg-dog").hasClass('active')){
  	$(".msg-dog").removeClass('active');
  }
  if($(".msg-other").hasClass('active')){
  	$(".msg-other").removeClass('active');
  }
});

controlDog =

$( ".control-dog" ).click(function() {
  $( ".msg-dog" ).addClass('active');
    if($(".msg-cat").hasClass('active')){
  	$(".msg-cat").removeClass('active');
  }
  if($(".msg-other").hasClass('active')){
  	$(".msg-other").removeClass('active');
  }
});
  
controlOther =

$( ".control-other" ).click(function() {
  $( ".msg-other" ).addClass('active');
   if($(".msg-dog").hasClass('active')){
  	$(".msg-dog").removeClass('active');
  }
  if($(".msg-cat").hasClass('active')){
  	$(".msg-cat").removeClass('active');
  }
});