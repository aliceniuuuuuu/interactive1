$(document).ready(function(){

	n = 1;
	var items = Array('/','|','-','+','=');


	$('body').on( "mousemove", function(e) {
		// move #position on mouse move
		$('#position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px' });
		// copy element on mousemove
		var clone = $('#position').clone();
		$('.page-'+n).append(clone);
	});

	$('body').click(function(){
		n++;
		var item = items[Math.floor(Math.random()*items.length)];
		$('#position').html(item);
		$('body').append('<div class="break"></div><div class="page-'+n+'"></div>');
	});

	// n = 0;

	// $('body').click(function(){
		
	// 	// $redValue = Math.floor(Math.random()*255);
	// 	// $greenValue = Math.floor(Math.random()*255);
	// 	// $blueValue = Math.floor(Math.random()*255);	
	// 	var width = Math.floor(Math.random());
	// 	var height = Math.floor(Math.random());

	// 	$('circle').append('<div class="page-'+n+'">rgb('+$redValue+','+$blueValue+','+$greenValue+')</div><div class="break"></div>');
		
	// 	$('.page-'+n).css(
	// 		'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
	// 	);

	// 	n++;

	// });



});