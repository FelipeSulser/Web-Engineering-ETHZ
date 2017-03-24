
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
		var h1 = "Green Rolls"
		var h2 = "Bruschetta"
		var h3 = "Bruschette"
		var h4 = "Eggplants"
		var h5 = "Spicy Beans"
		var h6 = "Meatballs"
		
		var t1 = "We serve a seasonal tasting menu that focuses on local ingredients. Our appetizers may vary during the year to always ensure the best quality.\n For the appetizers, we are famous for our bruschettas that we serve in several different variants."
		var t2 = "Delicious green rolls from Taiwan. Avocado rolls with salmon on top. All wrapped with the finest Taiwanese algae."
		var t3 = "Delicious italian appetizer 🇮🇹. Vegan Bruschette with beans and tomato topping"
		var t4 = "The classic, reborn. Our chef has prepared these delicious bruschettes. With Pomegranate sprinkled on top of it. Yummy!"
		var t5 = "Dish simplicity implies food multiplicity. With this slogan we offer a simple yet delicious appetizer, the filled Eggplants (The actual food in the image is filled peppers)" 
		var t6 = "Fresh edamame beans straight out of Japan 🇯🇵. Go spicy or go home"		
		

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

		replace_text(h1,t1,$("#firstbox"), $("#openModal1"));	
		replace_text(h2,t2,$("#secondbox"), $("#openModal2"));
		replace_text(h3,t3,$("#thirdbox"), $("#openModal3"));
		replace_text(h4,t4,$("#fourthbox"), $("#openModal4"));
		replace_text(h5,t5,$("#fifthbox"), $("#openModal5"));
		replace_text(h6,t5,$("#sixthbox"), $("#openModal6"));



			break;

		case 1:
		
		var h1= "Spaghetti Carbonara"
            var h2 = "Penne Tuna"
            var h3 = "Cannelloni"
            var h4 = "Lasagne"
            var h5 = "Cheese Macaroni"
            var h6 = "Spaghetti Arrabitata"

            var t1= "Homemade Spaghetti Carbonara. Creamy and delicious."
            var t2 = "he combination of tuna, anchovies, capers, garlic, and parsley is traditional in Mediterranean cooking, particularly in southern France."
            var t3 = "Cannelloni (Italian for large reeds) are a cylindrical type of pasta generally served baked with a filling and covered by a sauce in Italian cuisine."
            var t4 = "Lasagne are wide, flat-shaped pasta, and possibly one of the oldest types of pasta."
            var t5 = "Macaroni and cheese—also called mac and cheese in American is a dish of English origin, consisting of cooked macaroni pasta and a cheese sauce, most commonly cheddar."
            var t6 = "Arrabbiata sauce, or sugo all'arrabbiata in Italian, is a spicy sauce for pasta made from garlic, tomatoes, and red chili peppers cooked in olive oil. Arrabbiata literally means \"angry\" in Italian; the name of the sauce refers to the spiciness of the chili peppers."

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

        	replace_text(h1,t1,$("#firstbox"), $("#openModal1"));	
		replace_text(h2,t2,$("#secondbox"), $("#openModal2"));
		replace_text(h3,t3,$("#thirdbox"), $("#openModal3"));
		replace_text(h4,t4,$("#fourthbox"), $("#openModal4"));
		replace_text(h5,t5,$("#fifthbox"), $("#openModal5"));
		replace_text(h6,t5,$("#sixthbox"), $("#openModal6"));
		
			break;

		case 2:

		var h1 = "Salmon"
		var h2 = "Herring"
		var h3 = "Vegetables Bath"
		var h4 = "Ravioli"
		var h5 = "Aspargus Wonder"
		var h6 = "Chef's Creation"
		
		var t1 = "Delicious salmon with limes and green pesto. Perfect to treat your taste buds !"
		var t2 = "Figs and herring. This is meant to treat you because you only deserve the best."
		var t3 = "Surrounded by vegetables this is our offer for the health concious customer. "
		var t4 = "Our home made ravioli with some freshly catched salmon is are sure to amaze you."
		var t5 = "The celebrate the spring we have seasonal offer of aspargus which you can enjoy for a limited time only." 
		var t6 = "The chefs personal creation. Salmon with zucchini and potatoes is our restaurants speciality. Be sure to try it."


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

		replace_text(h1,t1,$("#firstbox"), $("#openModal1"));	
		replace_text(h2,t2,$("#secondbox"), $("#openModal2"));
		replace_text(h3,t3,$("#thirdbox"), $("#openModal3"));
		replace_text(h4,t4,$("#fourthbox"), $("#openModal4"));
		replace_text(h5,t5,$("#fifthbox"), $("#openModal5"));
		replace_text(h6,t5,$("#sixthbox"), $("#openModal6"));

			break;

		case 3:

		var h1 = ""
		var h2 = ""
		var h3 = ""
		var h4 = ""
		var h5 = ""
		var h6 = ""
		
		var t1 = ""
		var t2 = ""
		var t3 = ""
		var t4 = ""
		var t5 = "" 
		var t6 = ""

		
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

		replace_text(h1,t1,$("#firstbox"), $("#openModal1"));	
		replace_text(h2,t2,$("#secondbox"), $("#openModal2"));
		replace_text(h3,t3,$("#thirdbox"), $("#openModal3"));
		replace_text(h4,t4,$("#fourthbox"), $("#openModal4"));
		replace_text(h5,t5,$("#fifthbox"), $("#openModal5"));
		replace_text(h6,t5,$("#sixthbox"), $("#openModal6"));

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


