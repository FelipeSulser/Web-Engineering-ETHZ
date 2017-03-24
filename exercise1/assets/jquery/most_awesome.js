
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
var welcome = false

var statepics = 0
var increasing = 1
var execute = 1

function changes(){
	console.log(statepics)
	if(execute === 0){
		return;
	}
	$("#butt1").css({
        	"background-color" : "transparent"
        	});
	$("#butt2").css({
        	"background-color" : "transparent"
        	});
	$("#butt3").css({
        	"background-color" : "transparent"
        	});
	$("#butt4").css({
        	"background-color" : "transparent"
        	});
	switch(statepics){
		case 0:
			$("#butt1").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});
        	$("#firstimg").attr("src","images/pic02.jpg");
        	$("#firstimgpop").attr("src","images/pic02.jpg");
        	$("#secondimg").attr("src","images/pic01.jpg");
        	$("#secondimgpop").attr("src","images/pic01.jpg");
        	$("#thirdimg").attr("src","images/pic04.jpg");
        	$("#thirdimgpop").attr("src","images/pic04.jpg");
        	$("#fourthimg").attr("src","images/pic03.jpg");
        	$("#fourthimgpop").attr("src","images/pic03.jpg");
        	$("#fifthimg").attr("src","images/pic06.jpg");
        	$("#fifthimgpop").attr("src","images/pic06.jpg");
        	$("#sixthimg").attr("src","images/pic05.jpg");
        	$("#sixthimgpop").attr("src","images/pic05.jpg");



			break;

		case 1:
        	$("#butt2").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});
        	$("#firstimg").attr("src","images/Pasta/pic02.jpg");
        	$("#firstimgpop").attr("src","images/Pasta/pic02.jpg");
        	$("#secondimg").attr("src","images/Pasta/pic01.jpg");
        	$("#secondimgpop").attr("src","images/Pasta/pic01.jpg");
        	$("#thirdimg").attr("src","images/Pasta/pic04.jpg");
        	$("#thirdimgpop").attr("src","images/Pasta/pic04.jpg");
        	$("#fourthimg").attr("src","images/Pasta/pic03.jpg");
        	$("#fourthimgpop").attr("src","images/Pasta/pic03.jpg");
        	$("#fifthimg").attr("src","images/Pasta/pic06.jpg");
        	$("#fifthimgpop").attr("src","images/Pasta/pic06.jpg");
        	$("#sixthimg").attr("src","images/Pasta/pic05.jpg");
        	$("#sixthimgpop").attr("src","images/Pasta/pic05.jpg");

        	replace_text("WOOORKS","sbcjhbsdjhbcshdbcjhsdbchjbsdhcjhsdbcjh",$("#firstbox"), $("#openModal1"));

			break;

		case 2:
			$("#butt3").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});
        	$("#firstimg").attr("src","images/Meat_Fish/pic02.jpg");
        	$("#firstimgpop").attr("src","images/Meat_Fish/pic02.jpg");
        	$("#secondimg").attr("src","images/Meat_Fish/pic01.jpg");
        	$("#secondimgpop").attr("src","images/Meat_Fish/pic01.jpg");
        	$("#thirdimg").attr("src","images/Meat_Fish/pic04.jpg");
        	$("#thirdimgpop").attr("src","images/Meat_Fish/pic04.jpg");
        	$("#fourthimg").attr("src","images/Meat_Fish/pic03.jpg");
        	$("#fourthimgpop").attr("src","images/Meat_Fish/pic03.jpg");
        	$("#fifthimg").attr("src","images/Meat_Fish/pic06.jpg");
        	$("#fifthimgpop").attr("src","images/Meat_Fish/pic06.jpg");
        	$("#sixthimg").attr("src","images/Meat_Fish/pic05.jpg");
        	$("#sixthimgpop").attr("src","images/Meat_Fish/pic05.jpg");

			break;

		case 3:
			$("#butt4").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});
        	$("#firstimg").attr("src","images/Dessert/pic02.jpg");
        	$("#firstimgpop").attr("src","images/Dessert/pic02.jpg");
        	$("#secondimg").attr("src","images/Dessert/pic01.jpg");
        	$("#secondimgpop").attr("src","images/Dessert/pic01.jpg");
        	$("#thirdimg").attr("src","images/Dessert/pic04.jpg");
        	$("#thirdimgpop").attr("src","images/Dessert/pic04.jpg");
        	$("#fourthimg").attr("src","images/Dessert/pic03.jpg");
        	$("#fourthimgpop").attr("src","images/Dessert/pic03.jpg");
        	$("#fifthimg").attr("src","images/Dessert/pic06.jpg");
        	$("#fifthimgpop").attr("src","images/Dessert/pic06.jpg");
        	$("#sixthimg").attr("src","images/Dessert/pic05.jpg");
        	$("#sixthimgpop").attr("src","images/Dessert/pic05.jpg");

			break;




	}
	statepics = statepics + 1 * increasing
	if(3 === statepics){
		increasing = -1
	}
	if(0 === statepics){
		increasing = 1
	}

}

function fade_in(){
	if($('#la_place').isOnScreen() && !la_place){
		la_place = true
		console.log("la place")
		$("#la_place").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
        $("#la_place").animate({
        	"margin-right" : "0px",
        	"margin-left" : "0px"
		});
	}
    if($('#secondblock').isOnScreen() && !welcome){
        welcome = true
        console.log("Welcome bitch")
        $("#secondblock").css({
            "margin-top" : "100px"
        });
        $("#secondblock").animate({
            "margin-top" : "0px"
        });

    }
	if($('#thirdblock').isOnScreen() && !high_quality){
		high_quality = true
		console.log("high_quality")


		$("#thirdblock").css({
            "overflow" : "hidden"
        });
        $("#thirdblock h2").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
        $("#thirdblock h2").animate({
        	"margin-right" : "0px",
        	"margin-left" : "0px"
		});
		$("#thirdblock p").css({
			"margin-left" : "-1000px",
        	"margin-right" : "1100px"
		});
		 $("#thirdblock p").animate({
        	"margin-right" : "0px",
        	"margin-left" : "0px"
		});





	}
	if($('#best_ingredients').isOnScreen() && !best_ingredients){
		best_ingredients = true
		console.log("best_ingredients")

        $("#best_ingredients").css({
            "margin-top" : "200px"
        });
        $("#best_ingredients").animate({
            "margin-top" : "0px"
        });
	}
	if($('#our_events').isOnScreen() && !our_events){
		our_events = true
		console.log("our_events")
		$("#our_events h2").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
        $("#our_events h2").animate({
        	"margin-right" : "0px",
        	"margin-left" : "0px"
		});
		$("#our_events p").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
        $("#our_events p").animate({
        	"margin-right" : "0px",
        	"margin-left" : "0px"
		});
	}
	if($('#upcoming_events').isOnScreen() && !upcoming_events){
		upcoming_events = true
		console.log(".bigEventBox")
		$("#upcoming_events").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
		$("#upcoming_events").animate({
        	"margin": "0 2% 5% 2%" 
		});
		




	}
	if($('#centerid').isOnScreen() && !past_events){
		past_events = true

		$("#centerid").css({
        	"margin-left" : "+1000px",
            "margin-right" : "-1100px"
        });

		$("#centerid").animate({
        	"margin": "0 0% 0% 0%" 
		});
	}
	if($('#contactdata').isOnScreen() && !contact_us){
		contact_us = true
		console.log("contact_us")
		$("#contactdata").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
		$("#contactdata").animate({
        	"margin-left" : "0px",
        	"margin-right" : "0px",
        	"margin-bottom":"70px"
		});


	}
	if($('#Booking_inner').isOnScreen() && !book_table){
		book_table = true
		console.log("book_table")
		$("#Booking_inner").css({
            "margin-top" : "50px"
        });
        $("#Booking_inner").animate({
            "margin-top" : "0px"
        });

	}
	if($('#Impressium').isOnScreen() && !opening_hours){
		opening_hours = true
		console.log("opening_hours")
		$(".leftrightimp").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
		$(".leftrightimp").animate({
        	"margin-left" : "0px",
            "margin-right" : "0px"
		});
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

function replace_text(header, body, firstbox, modalbox){
	firstbox.find(".img-tag").text(header)
	modalbox.find("h2").text(header)
	modalbox.find("footer").text(body)

}
/*
Every time we scrool we check whether a window is visible	
*/
$(window).scroll(function() {
	fade_in()
});

$(document).ready(function(){
	fade_in()
	setInterval(changes, 2000);
	$( ".my-img" ).click(function() {
		execute = 0
  		
	});
	$( ".close" ).click(function() {
		execute = 1
  		
	});


});


