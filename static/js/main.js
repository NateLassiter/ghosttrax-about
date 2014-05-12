

if (Modernizr.touch) {

}


// WAYPOINTS

$('#kickstarter').waypoint(function() {
  $(this).toggleClass('fixed animated fadeInUpBig');
});


// SCROLLING MENU

$(".arrow-link").click(function(event){
	event.preventDefault();
	var scrollDiv = $(this).attr('href');
	$("html, body").animate({
		scrollTop: $(scrollDiv).position().top
	}, 600);
});
