
jQuery(function() {

let my_switch = false;

$('#my_button').click(function () {

if ( my_switch == false ) {
	my_switch = true;

	$(this).html('It&apos;s a Girl').removeClass('btn-primary').addClass('btn-secondary');
	$('h1').html('Congratulations!').removeClass('h1-pink').addClass('h1-blue');
	$('#my_image').attr('src', 'images/boy3.png');
} else {
	my_switch = false;

	$(this).html('It&apos;s a Boy').removeClass('btn-secondary').addClass('btn-primary');
	$('h1').html('Congratulations!').removeClass('h1-blue').addClass('h1-pink');
	$('#my_image').attr('src', 'images/girl3.png');
}

// if ( $('.square.alt').hasClass('red') ) {
// 	$('.square.alt').removeClass('red');
// } else {
// 	$('.square.alt').addClass('red');
// }


});

});

//HIDE INSTRUCTIONS
$(document).ready(function(){
  $("#my_button").click(function(){
    $("p").hide();
  });
  // $("#show").click(function(){
  //   $("p").show();
  // });
});
