$(document).ready(function(){
	$('body').click(function(){
		$('#intro').hide();
	});
	
	$('.word-1').click(function(){
		// $(this).css({'width':'100px', 'border-color':"#339999", 'color':"#339999"});
		$(this).toggleClass('word-1-show');
		//$(".hide").toggleClass('show');
		// $('.outside').toggleClass('outside-1');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside"></div><div id="inside-1"></div><div id="inside-2"></div>');
		$('#print').append('<div class="break"><img src="printout-1.png></div>');
		// $('.break').prepend('<div class="break"><img src="printout-1></div>');
	});

	$('.word-2').click(function(){
		$(this).toggleClass('word-2-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-2"></div><div id="inside-1"></div><div id="inside-2"></div>');

	});

	$('.word-3').click(function(){
		$(this).toggleClass('word-3-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-3"></div><div id="inside-1"></div><div id="inside-2"></div>');

	});

	$('.word-4').click(function(){
		$(this).toggleClass('word-4-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-4"></div><div id="inside-1"></div><div id="inside-2"></div>');
	});

	$('.word-5').click(function(){
		$(this).toggleClass('word-5-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-5"></div><div id="inside-1"></div><div id="inside-2"></div>');
	});

	$('.word-6').click(function(){
		$(this).toggleClass('word-6-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-6"></div><div id="inside-1"></div><div id="inside-2"></div>');
	});

	$('.word-7').click(function(){
		$(this).toggleClass('word-7-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-7"></div><div id="inside-1"></div><div id="inside-2"></div>');
	});

	$('.word-8').click(function(){
		$(this).toggleClass('word-8-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-8"></div><div id="inside-1"></div><div id="inside-2"></div>');
	});

	$('.word-9').click(function(){
		$(this).toggleClass('word-9-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-9"></div><div id="inside-1"></div><div id="inside-2"></div>');
	});

	$('.word-10').click(function(){
		$(this).toggleClass('word-10-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-10"></div><div id="inside-1"></div><div id="inside-2"></div>');
	});

	$('.word-11').click(function(){
		$(this).toggleClass('word-11-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-11"></div><div id="inside-1"></div><div id="inside-2"></div>');
	});

	$('.word-12').click(function(){
		$(this).toggleClass('word-12-show');
		$('#handle').addClass('rotated');
		$('main').prepend('<div class="outside-12"></div><div id="inside-1"></div><div id="inside-2"></div>');
	});

	

});