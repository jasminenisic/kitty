$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$(".forms").click(function(){
	$(this).toggleClass("glyphicon-plus").toggleClass("glyphicon-minus");
});
$('scrolling-tab').scrollspy({ target: '#navbar-example' });