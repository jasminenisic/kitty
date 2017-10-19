var Slider = function(){
	sliderNext = 

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

	sliderPrev =

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

	sliderNextDo = 

	$(document).ready(function(){

	$(".next").click(function(){
		sliderNext();

	});

	sliderPrevDo =

	$(document).ready(function(){

	$(".prev").click(function(){
	sliderPrev();

}); 

	sliderAuto =

	setInterval(function(){sliderNext()}, 3000);
}
