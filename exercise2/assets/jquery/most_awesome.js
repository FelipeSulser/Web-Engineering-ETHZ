
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
var execute = 0

var path = "http://localhost:8888/wp-content/themes/Archive-2"

function changes(){
	if(execute === 0){
		return;
	}

	jQuery("#butt1").css({
        	"background-color" : "transparent"
        	});
	jQuery("#butt2").css({
        	"background-color" : "transparent"
        	});
	jQuery("#butt3").css({
        	"background-color" : "transparent"
        	});
	jQuery("#butt4").css({
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
		

		jQuery("#butt1").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});
        	jQuery("#firstimg").attr("src",path+"/images/pic02.jpg");
        	jQuery("#firstimgpop").attr("src",path+"/images/pic02.jpg");
        	jQuery("#secondimg").attr("src",path+"/images/pic01.jpg");
        	jQuery("#secondimgpop").attr("src",path+"/images/pic01.jpg");
        	jQuery("#thirdimg").attr("src",path+"/images/pic04.jpg");
        	jQuery("#thirdimgpop").attr("src",path+"/images/pic04.jpg");
        	jQuery("#fourthimg").attr("src",path+"/images/pic03.jpg");
        	jQuery("#fourthimgpop").attr("src",path+"/images/pic03.jpg");
        	jQuery("#fifthimg").attr("src",path+"/images/pic06.jpg");
        	jQuery("#fifthimgpop").attr("src",path+"/images/pic06.jpg");
        	jQuery("#sixthimg").attr("src",path+"/images/pic05.jpg");
        	jQuery("#sixthimgpop").attr("src",path+"/images/pic05.jpg");

		replace_text(h1,t1,jQuery("#firstbox"), jQuery("#openModal1"));	
		replace_text(h2,t2,jQuery("#secondbox"), jQuery("#openModal2"));
		replace_text(h3,t3,jQuery("#thirdbox"), jQuery("#openModal3"));
		replace_text(h4,t4,jQuery("#fourthbox"), jQuery("#openModal4"));
		replace_text(h5,t5,jQuery("#fifthbox"), jQuery("#openModal5"));
		replace_text(h6,t5,jQuery("#sixthbox"), jQuery("#openModal6"));



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

        	jQuery("#butt2").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});
        	jQuery("#firstimg").attr("src",path+"/images/Pasta/pic02.jpg");
        	jQuery("#firstimgpop").attr("src",path+"/images/Pasta/pic02.jpg");

		

        	jQuery("#secondimg").attr("src",path+"/images/Pasta/pic01.jpg");
        	jQuery("#secondimgpop").attr("src",path+"/images/Pasta/pic01.jpg");

        	jQuery("#thirdimg").attr("src",path+"/images/Pasta/pic04.jpg");
        	jQuery("#thirdimgpop").attr("src",path+"/images/Pasta/pic04.jpg");
        	jQuery("#fourthimg").attr("src",path+"/images/Pasta/pic03.jpg");
        	jQuery("#fourthimgpop").attr("src",path+"/images/Pasta/pic03.jpg");
        	jQuery("#fifthimg").attr("src",path+"/images/Pasta/pic06.jpg");
        	jQuery("#fifthimgpop").attr("src",path+"/images/Pasta/pic06.jpg");
        	jQuery("#sixthimg").attr("src",path+"/images/Pasta/pic05.jpg");
        	jQuery("#sixthimgpop").attr("src",path+"/images/Pasta/pic05.jpg");

        	replace_text(h1,t1,jQuery("#firstbox"), jQuery("#openModal1"));	
		replace_text(h2,t2,jQuery("#secondbox"), jQuery("#openModal2"));
		replace_text(h3,t3,jQuery("#thirdbox"), jQuery("#openModal3"));
		replace_text(h4,t4,jQuery("#fourthbox"), jQuery("#openModal4"));
		replace_text(h5,t5,jQuery("#fifthbox"), jQuery("#openModal5"));
		replace_text(h6,t5,jQuery("#sixthbox"), jQuery("#openModal6"));
		
			break;

		case 2:

		var h1 = "Salmon"
		var h2 = "Herring"
		var h3 = "Vegetables Bath"
		var h4 = "Kabeljau"
		var h5 = "Aspargus Wonder"
		var h6 = "Chef's Creation"
		
		var t1 = "Delicious salmon with limes and green pesto. Perfect to treat your taste buds !"
		var t2 = "Figs and herring. This is meant to treat you because you only deserve the best."
		var t3 = "Surrounded by vegetables this is our offer for the health concious customer. "
		var t4 = "Delicious kabeljau from Nordsee"
		var t5 = "The celebrate the spring we have seasonal offer of aspargus which you can enjoy for a limited time only." 
		var t6 = "The chefs personal creation. Salmon with zucchini and potatoes is our restaurants speciality. Be sure to try it."


			jQuery("#butt3").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});
        	jQuery("#firstimg").attr("src",path+"/images/Meat_Fish/pic02.jpg");
        	jQuery("#firstimgpop").attr("src",path+"/images/Meat_Fish/pic02.jpg");
        	jQuery("#secondimg").attr("src",path+"/images/Meat_Fish/pic01.jpg");
        	jQuery("#secondimgpop").attr("src",path+"/images/Meat_Fish/pic01.jpg");
        	jQuery("#thirdimg").attr("src",path+"/images/Meat_Fish/pic04.jpg");
        	jQuery("#thirdimgpop").attr("src",path+"/images/Meat_Fish/pic04.jpg");
        	jQuery("#fourthimg").attr("src",path+"/images/Meat_Fish/pic03.jpg");
        	jQuery("#fourthimgpop").attr("src",path+"/images/Meat_Fish/pic03.jpg");
        	jQuery("#fifthimg").attr("src",path+"/images/Meat_Fish/pic06.jpg");
        	jQuery("#fifthimgpop").attr("src",path+"/images/Meat_Fish/pic06.jpg");
        	jQuery("#sixthimg").attr("src",path+"/images/Meat_Fish/pic05.jpg");
        	jQuery("#sixthimgpop").attr("src",path+"/images/Meat_Fish/pic05.jpg");

		replace_text(h1,t1,jQuery("#firstbox"), jQuery("#openModal1"));	
		replace_text(h2,t2,jQuery("#secondbox"), jQuery("#openModal2"));
		replace_text(h3,t3,jQuery("#thirdbox"), jQuery("#openModal3"));
		replace_text(h4,t4,jQuery("#fourthbox"), jQuery("#openModal4"));
		replace_text(h5,t5,jQuery("#fifthbox"), jQuery("#openModal5"));
		replace_text(h6,t5,jQuery("#sixthbox"), jQuery("#openModal6"));

			break;

		case 3:

		var h1 = "Mochi rolls"
		var h2 = "Raspberry pie"
		var h3 = "Brownies"
		var h4 = "Pudding"
		var h5 = "Pralines"
		var h6 = "Macarons"
		
		var t1 = "Sweet rolls that go really well with a jasmin tea"
		var t2 = "Delicious pie served with a secret sweet sauce"
		var t3 = "Brown brownies produced by Brown Browning "
		var t4 = "Served with strawberry sauce"
		var t5 = "Pralines from Sprlüngli" 
		var t6 = "Delicious treat from Luxemburg"

		
			jQuery("#butt4").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});
        	jQuery("#firstimg").attr("src",path+"/images/Dessert/pic02.jpg");
        	jQuery("#firstimgpop").attr("src",path+"/images/Dessert/pic02.jpg");
        	jQuery("#secondimg").attr("src",path+"/images/Dessert/pic01.jpg");
        	jQuery("#secondimgpop").attr("src",path+"/images/Dessert/pic01.jpg");
        	jQuery("#thirdimg").attr("src",path+"/images/Dessert/pic04.jpg");
        	jQuery("#thirdimgpop").attr("src",path+"/images/Dessert/pic04.jpg");
        	jQuery("#fourthimg").attr("src",path+"/images/Dessert/pic03.jpg");
        	jQuery("#fourthimgpop").attr("src",path+"/images/Dessert/pic03.jpg");
        	jQuery("#fifthimg").attr("src",path+"/images/Dessert/pic06.jpg");
        	jQuery("#fifthimgpop").attr("src",path+"/images/Dessert/pic06.jpg");
        	jQuery("#sixthimg").attr("src",path+"/images/Dessert/pic05.jpg");
        	jQuery("#sixthimgpop").attr("src",path+"/images/Dessert/pic05.jpg");

		replace_text(h1,t1,jQuery("#firstbox"), jQuery("#openModal1"));	
		replace_text(h2,t2,jQuery("#secondbox"), jQuery("#openModal2"));
		replace_text(h3,t3,jQuery("#thirdbox"), jQuery("#openModal3"));
		replace_text(h4,t4,jQuery("#fourthbox"), jQuery("#openModal4"));
		replace_text(h5,t5,jQuery("#fifthbox"), jQuery("#openModal5"));
		replace_text(h6,t5,jQuery("#sixthbox"), jQuery("#openModal6"));

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
	if(jQuery('#la_place').isOnScreen() && !la_place){
		la_place = true
		console.log("la place")
		jQuery("#la_place").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
        jQuery("#la_place").animate({
        	"margin-right" : "0px",
        	"margin-left" : "0px"
		});
	}
    if(jQuery('#secondblock').isOnScreen() && !welcome){
        welcome = true
        console.log("Welcome")
        jQuery("#secondblock").css({
            "margin-top" : "100px"
        });
        jQuery("#secondblock").animate({
            "margin-top" : "0px"
        });

    }
	if(jQuery('#thirdblock').isOnScreen() && !high_quality){
		high_quality = true
		console.log("high_quality")


		jQuery("#thirdblock").css({
            "overflow" : "hidden"
        });
        jQuery("#thirdblock h2").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
        jQuery("#thirdblock h2").animate({
        	"margin-right" : "0px",
        	"margin-left" : "0px"
		});
		jQuery("#thirdblock p").css({
			"margin-left" : "-1000px",
        	"margin-right" : "1100px"
		});
		 jQuery("#thirdblock p").animate({
        	"margin-right" : "0px",
        	"margin-left" : "0px"
		});





	}
	if(jQuery('#best_ingredients').isOnScreen() && !best_ingredients){
		best_ingredients = true
		console.log("best_ingredients")

        jQuery("#best_ingredients").css({
            "margin-top" : "200px"
        });
        jQuery("#best_ingredients").animate({
            "margin-top" : "0px"
        });
	}
	if(jQuery('#our_events').isOnScreen() && !our_events){
		our_events = true
		console.log("our_events")
		jQuery("#our_events h2").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
        jQuery("#our_events h2").animate({
        	"margin-right" : "0px",
        	"margin-left" : "0px"
		});
		jQuery("#our_events p").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
        jQuery("#our_events p").animate({
        	"margin-right" : "0px",
        	"margin-left" : "0px"
		});
	}
	if(jQuery('#upcoming_events').isOnScreen() && !upcoming_events){
		upcoming_events = true
		console.log(".bigEventBox")
		jQuery("#upcoming_events").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
		jQuery("#upcoming_events").animate({
        	"margin": "0 2% 5% 2%" 
		});
		




	}
	if(jQuery('#centerid').isOnScreen() && !past_events){
		past_events = true

		jQuery("#centerid").css({
        	"margin-left" : "+1000px",
            "margin-right" : "-1100px"
        });

		jQuery("#centerid").animate({
        	"margin": "0 0% 0% 0%" 
		});
	}
	if(jQuery('#contactdata').isOnScreen() && !contact_us){
		contact_us = true
		console.log("contact_us")
		jQuery("#contactdata").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
		jQuery("#contactdata").animate({
        	"margin-left" : "0px",
        	"margin-right" : "0px",
        	"margin-bottom":"70px"
		});


	}
	if(jQuery('#Booking_inner').isOnScreen() && !book_table){
		book_table = true
		console.log("book_table")
		jQuery("#Booking_inner").css({
            "margin-top" : "50px"
        });
        jQuery("#Booking_inner").animate({
            "margin-top" : "0px"
        });

	}
	if(jQuery('#Impressium').isOnScreen() && !opening_hours){
		opening_hours = true
		console.log("opening_hours")
		jQuery(".leftrightimp").css({
        	"margin-left" : "-1000px",
            "margin-right" : "1100px"
        });
		jQuery(".leftrightimp").animate({
        	"margin-left" : "0px",
            "margin-right" : "0px"
		});
	}

}

//All Credit goes to https://coderwall.com/p/fnvjvg/jquery-test-if-element-is-in-viewport
jQuery.fn.isOnScreen = function(){
	var win = jQuery(window);
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
jQuery(window).scroll(function() {
	fade_in()
});


jQuery(document).ready(function(){
	fade_in()
	setInterval(changes, 4000);
	jQuery( ".img-container" ).click(function() {
		execute = 0
  		
	});
	jQuery( ".close" ).click(function() {
		execute = 1
  		
	});
	
});


