$(document).ready(function(){
	$('body').click(function(){
		$('#intro').hide();
	});

	function printMusic () {
	    	window.print()}
	$('.power').click(function(){
		setTimeout(printMusic, 1500);
		$('.button').animate({top:"10vh"});	 
		$('#handle').addClass('rotated');   
	});


	$('.word-1').click(function(){
		$(this).addClass('show-1');
		$('main').prepend('<div class="outside-1"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-1.png" />');
	});

	$('.word-2').click(function(){
		$(this).addClass('show-2');
		$('main').prepend('<div class="outside-2"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-2.png" />');

	});

	$('.word-3').click(function(){
		$(this).addClass('word-3-show');
		$('main').prepend('<div class="outside-3"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-3.png" />');

	});

	$('.word-4').click(function(){
		$(this).addClass('word-4-show');
		$('main').prepend('<div class="outside-4"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-4.png" />');
	});

	$('.word-5').click(function(){
		$(this).addClass('word-5-show');
		$('main').prepend('<div class="outside-5"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-5.png" />');
	});

	$('.word-6').click(function(){
		$(this).addClass('word-6-show');
		$('main').prepend('<div class="outside-6"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-6.png" />');
	});

	$('.word-7').click(function(){
		$(this).addClass('word-7-show');
		$('main').prepend('<div class="outside-7"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-7.png" />');
	});

	$('.word-8').click(function(){
		$(this).addClass('word-8-show');
		$('main').prepend('<div class="outside-8"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-8.png" />');
	});

	$('.word-9').click(function(){
		$(this).addClass('word-9-show');
		$('#words').append('<img src="printout-9.png" />');
		$('main').prepend('<div class="outside-9"></div><div id="inside-1"></div><div id="inside-2"></div>');
	});

	$('.word-10').click(function(){
		$(this).addClass('word-10-show');
		$('main').prepend('<div class="outside-10"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-10.png" />');
	});

	$('.word-11').click(function(){
		$(this).addClass('word-11-show');
		$('main').prepend('<div class="outside-11"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-11.png" />');
	});

	$('.word-12').click(function(){
		$(this).addClass('word-12-show');
		$('main').prepend('<div class="outside-12"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#words').append('<img src="printout-12.png" />');
	});

	

});