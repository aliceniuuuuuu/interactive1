$(document).ready(function(){

// $('img').click(function() {
//         $(this).next().css('opacity', 1);
     
//     });  

// $("img").hover(function() {
//     $(this).css('cursor','pointer');
// }, function() {
//     $(this).css('cursor','auto');
// });

var n = 1;

    $('#button').click(function() {
        $('img:eq('+n+')').addClass('show');
        n++;
    });

	// $('#button').click(function() {
 //        $('img').addClass('show');
 //    });  


	// store the height and width of the window as variables
	var winHeight = $(window).height();
	var winWidth = $(window).width();

	// loop over each image on the page
	$('img').each(function() {

		// get a random x and y position
		var randPosX = Math.floor((Math.random()*winWidth));
		var randPosY = Math.floor((Math.random()*winHeight));

		// apply the random position
		$(this).css('left', (randPosX)+'px');
		$(this).css('top', (randPosY)+'px');
	});

});




