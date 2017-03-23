
//Set the seen variables for the titles
var la_place = false
var high_quality = false
var best_ingredients = false
var our_events = false
var upcoming_events = false
var past_events = false
var contact_us = false
var book_table = false
var opening_hours = false


function fade_in(){
	if($('#la_place').isOnScreen() && !la_place){
		la_place = true
		console.log("la place")
	}
	if($('#thirdblock').isOnScreen() && !high_quality){
		high_quality = true
		console.log("high_quality")
	}
	if($('#best_ingredients').isOnScreen() && !best_ingredients){
		best_ingredients = true
		console.log("best_ingredients")
	}
	if($('#our_events').isOnScreen() && !our_events){
		our_events = true
		console.log("our_events")
	}
	if($('#upcoming_events').isOnScreen() && !upcoming_events){
		upcoming_events = true
		console.log("upcoming_events")
	}
	if($('#centerid').isOnScreen() && !past_events){
		past_events = true
		console.log("past_events")
	}
	if($('#Contact').isOnScreen() && !contact_us){
		contact_us = true
		console.log("contact_us")
	}
	if($('#Booking_inner').isOnScreen() && !book_table){
		book_table = true
		console.log("book_table")
	}
	if($('#Impressium').isOnScreen() && !opening_hours){
		opening_hours = true
		console.log("opening_hours")
	}
	
}

//All Credit goes to https://coderwall.com/p/fnvjvg/jquery-test-if-element-is-in-viewport
$.fn.isOnScreen = function(){
	var win = $(window);
	var viewport = {
        	top : win.scrollTop(),
        	left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();
	
	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();
	
	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
}
/*
Every time we scrool we check whether a window is visible	
*/
$(window).scroll(function() {
	fade_in()
});

$(document).ready(function(){
	fade_in()
});


