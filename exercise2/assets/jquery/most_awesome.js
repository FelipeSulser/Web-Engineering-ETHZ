
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

var path = ""
var page_context = {}
//var path = "http://localhost:8888/wp-content/themes/Archive"

jQuery(function() {
     jQuery("#ajaxbtn").click(function(){
	jQuery('.lower_brown_div').css({
		"height":"1200px"
	});
	jQuery('#ajaxbtn').css({
		"margin-top":"420px"
	});



	//query wp database 
	jQuery.ajax({
		url : ajaxurl,
		type : 'post',
		data : {
			action : "get_post_past"
		},
		success : function( response ) {
			var mydata = JSON.parse(response);
			console.log(mydata);
			for(var i = 0; i < mydata.length; i++){
				//console.log(mydata[i]['DATE_STARTING']);
				//console.log("<img class=\"smallImage\" src=\"http://localhost:8888/wp-content/themes/Archive\""+mydata[i]['URLDIR']+"\">");
				jQuery('#centerid #eventpast').append(
					"<div class=\"smallEventBox givemargin\">\
					<span><span></span></span>\
					<div id=\"divforsmallimg\">\
					<img class=\"smallImage\" src=\"http://localhost:8888/wp-content/themes/Archive"+mydata[i]['URLDIR']+"\">\
					</div>\
					<a href=\"\">\
					<h3>"+mydata[i]['post_title']+"</h3>\
					<h2>"+mydata[i]['DATE_STARTING']+"</h2>\
					<h2>"+mydata[i]['DATE_ENDING']+"</h2>\
					</a>\
					</div>"
					);
			}
			//console.log(mydata);
		}
	});




	});


});
window.addEventListener('popstate',function(event){
	console.log(event.originalEvent);
});
jQuery(function() {
     jQuery(".bigEventBox").click(function(event){
			console.log(event.target.parentNode);
			var data = event.target.parentNode;
			var myClass = jQuery(data).attr("class");
			if(myClass != "bigEventBox"){
				data = data.parentNode
			}

			var myClass = jQuery(data).attr("class");
			if(myClass === "bigEventBox"){
				console.log(data);
			jQuery('.bigEventBox').hide();
			jQuery('#centerid').hide();
			jQuery(data).show();
			jQuery(data).css({
				'width':'100%',
				'height':'100%'
			});
			data = null
			 window.history.pushState(data, '', '/zoom');
			}

		







	});


});



function changes(){

	if(execute === 0){
		return;
	}


	img_order = ["#firstimg", "#secondimg", "#thirdimg", "#fourthimg", "#fifthimg", "#sixthimg"];
	img_order_pop = ["#firstimgpop", "#secondimgpop", "#thirdimgpop", "#fourthimgpop", "#fifthimgpop", "#sixthimgpop"];
	dishtypes = ["appetizer", "pasta", "meat", "dessert"]
	text_order = ["#firstbox", "#secondbox", "#thirdbox", "#fourthbox", "#fifthbox", "#sixthbox"]
	text_order_pop = ["#openModal1", "#openModal2", "#openModal3", "#openModal4", "#openModal5", "#openModal6"]

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

	for(var ii = 0; ii < img_order.length; ii++){
			jQuery(img_order[ii]).attr("src",path+ page_context[dishtypes[statepics]]["url"][ii]);
        	jQuery(img_order_pop[ii]).attr("src",path+ page_context[dishtypes[statepics]]["url"][ii]);
        	replace_text(page_context[dishtypes[statepics]]["h"][ii],page_context[dishtypes[statepics]]["c"][ii],jQuery(text_order[ii]), jQuery(text_order_pop[ii]));
		}

	switch(statepics){
		case 0:

		jQuery("#butt1").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});

			break;

		case 1:
        	jQuery("#butt2").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});

			break;

		case 2:

			jQuery("#butt3").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});

			break;

		case 3:
			jQuery("#butt4").css({
        	"background-color" : "rgba(0, 255, 0, 0.2)"
        	});
			break;

	}

}


function get_page_context(){
	console.log(".")
	// allposts are all posts with their data
	// metas have the corresponding key value pairs

	//Output: For the different meal classes the different image urls -> array in dictionary for the different dishtypes
	dishtypes = ["appetizer", "pasta", "meat", "dessert"]
	var dictionary = {};
	for(var ii = 0; ii < dishtypes.length; ii++){
		var dic = {};
		dic["h"] = new Array();
		dic["c"] = new Array();
		dic["url"] = new Array();
		dictionary[dishtypes[ii]] = dic;
	}


	for(var ii = 0; ii < metas.length; ii++){
       kvs = metas[ii]
       var newh = allposts[ii].post_title
       var newc = allposts[ii].post_content
       if(kvs.DISHTYPE){
       	dictionary[kvs.DISHTYPE[0]].h.push(newh)
       	dictionary[kvs.DISHTYPE[0]].c.push(newc)
       	dictionary[kvs.DISHTYPE[0]].url.push(kvs.URLDIR[0])
       }
    }

    page_context = dictionary

    return dictionary
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

function log(txt) {
  jQuery("#aboutid").html(" <b>" + txt + "</b> px")
}


/*
Every time we scrool we check whether a window is visible	
*/
jQuery(window).scroll(function() {
	fade_in()
	var eTop = jQuery('#right').offset().top; //get the offset top of the element
  log(eTop - jQuery(window).scrollTop()); //position of the ele w.r.t window
  var totalshift = eTop - jQuery(window).scrollTop();
  if(totalshift > 160){
  	statepics = 0;
  }
  if(totalshift < 160 && totalshift > -1){
  	statepics = 1;
  }
  if(totalshift< -1 && totalshift > -130){
  	statepics = 2;
  }
  if(totalshift < -250){
  	statepics = 3;
  }

  var windowsize = jQuery(window).width();
  if(windowsize < 500){
	  if(totalshift > 6){
	  	statepics = 0;
	  }
	  if(totalshift < 119 && totalshift > -451){
	  	statepics = 1;
	  }
	  if(totalshift< -451 && totalshift > -787){
	  	statepics = 2;
	  }
	  if(totalshift < -787){
	  	statepics = 3;
	  }
  }
  changes();
});

jQuery(document).ready(function(){
	path = templateUrl
	var page_context = get_page_context()
	fade_in()
	setInterval(changes, 4000);
	jQuery( ".img-container" ).click(function() {
		execute = 0
		console.log("clicked")
  		
	});
	jQuery( ".close" ).click(function() {
		execute = 1
  		
	});


});


