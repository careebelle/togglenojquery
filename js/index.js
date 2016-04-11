//original jQuery
/*$('.toggle').on('click', function() {
	$('.menu').toggleClass('active');
});*/


//Rewritten without jQuery
var element = document.getElementsByClassName('menu')[0];
var trigger = document.getElementsByClassName('toggle')[0];

trigger.addEventListener('click', function(e) {
    e.preventDefault();
    element.classList.toggle('active');
});