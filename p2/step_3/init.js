$(document).ready(function(){

// $('img').click(function() {
//         $(this).next().css('opacity', 1);
     
//     });  

$("img").hover(function() {
    $(this).css('cursor','pointer');
}, function() {
    $(this).css('cursor','auto');
});

// var n = 1;

//     $('img').click(function() {
//         $('img:eq('+n+')').show();
//         n++;
//     });

$('#button').click(function() {
        $('img').addClass('show');
     
    });  


});



