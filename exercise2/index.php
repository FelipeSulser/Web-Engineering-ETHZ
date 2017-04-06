<!DOCTYPE HTML>

<html>
<meta name="viewport" content="width=device-width">
	<head>
		<title>LaPlace Restaurant</title>
		<meta charset="utf-8" />
		<link href="<?php bloginfo('template_directory'); ?>/assets/css/style.css" rel="stylesheet">
		<link href="<?php bloginfo('template_directory'); ?>/assets/css/max_style.css" rel="stylesheet">
		<link href="<?php bloginfo('template_directory'); ?>/assets/css/mystyle.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Kreon" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/assets/jquery/most_awesome.js"></script>
		
	</head>
	<script type="text/javascript">
var templateUrl = '<?= get_bloginfo("template_url"); ?>';
</script>
	<body id="container">

		<!-- Header -->

			<a href="index.html"  ><img src="<?php bloginfo('template_directory'); ?>/images/logo.png" alt="" id = "hidden"> </a>
					<div id = "header">
						<nav id="nav">
							<a href="#" id="menu-icon"></a>
					  <ul>
					  <div id="headercontent">
					   <li class="modif"><a href="#first" class="needbutton" >About</a></li>
					   <li class="modif"><a href="#menu" class="needbutton">Menu</a></li>
						
					   <li ><a href="index.html"  ><img src="<?php bloginfo('template_directory'); ?>/images/logo.png" alt="" id = "logoimg"> </a></li>
					  
					   <li class="modif"><a href="#events" class="needbutton">Events</a></li>
					   <li class="modif"><a href="#contacts"  class="needbutton">Contacts</a></li>
					  </div>
					 </ul>
					</nav>
					</div>
			<div class= "content">

			<div >
				<h1 >
				  </a>
				</h1>
			
			  </div>
			  <div id="firstblock" style="background-image: url(<?php header_image(); ?>)">
					<h1 id = la_place> <?php echo get_bloginfo('name'); ?> </h1>
					<a href="#book" >Book a Table</a>
		<!-- First About-->
			</div>
			 <div id="secondblock" class="simpletext">
			<?php $the_query = new WP_Query( array( 'pagename' => 'my-page' ) ); ?>

			<?php while ($the_query -> have_posts()) : $the_query -> the_post();  ?>
				<h2><?php the_title(); ?></h2>
                 <?php the_content(); ?>


    	    <?php endwhile;?>
 			</div>
				
					
				
				
				
		<!-- Second About -->	
		<div id="thirdblock" class="parallax" >	
				<?php $the_query = new WP_Query( array( 'pagename' => 'high-quality-cuisine' ) ); ?>

			<?php while ($the_query -> have_posts()) : $the_query -> the_post();  ?>
				<h2 class="shadowed"><?php the_title(); ?></h2>
               <?php the_content(); ?>


     <?php endwhile;?>
	 </div>
					
					
					
			
		<!-- Third About -->				
		
				
	<div class="simpletext" id = "best_ingredients">
		<?php $the_query = new WP_Query( array( 'pagename' => 'only-the-best-ingredients' ) ); ?>

			<?php while ($the_query -> have_posts()) : $the_query -> the_post();  ?>
				<h2><?php the_title(); ?></h2>
               <?php the_content(); ?>


     <?php endwhile;?>
	</div>
				
				

	
			

		<!-- Menu -->
			
			
				<div>
					<div >
						<div >
							<div id="browndiv" class="brown_div">
								<div class="left">
									<div class="filling-div-20"></div>
									<div class="filling-div-20"></div>
									<h3>Our Menu</h3>
									<h2>Appetizers</h2>
									<p>We serve a seasonal tasting menu that focuses on local ingredients. Our appetizers may vary during the year to always ensure the best quality.
										For the appetizers, we are famous for our bruschettas that we serve in several different variants.</p>
									<div class="filling-div-20"></div>
										<a href="" id="butt1" >Appetizers</a>
										<a href="" id="butt2">Fresh Pasta</a>
										<a href="" id="butt3">Meat - Fish</a>
										<a href="" id="butt4">Dessert</a>
								</div>

								<div id="right">

									<div class="img-container">

										<a id="firstbox" class="img-a" href="#openModal1">
											<img id="firstimg" class="my-img" src="<?php bloginfo('template_directory'); ?>/images/pic02.jpg">
											<div class="opback">
											<div class="img-tag" id="work">Green Rolls</div>

										</div>
										</a>
									</div>
									<div id="openModal1" class="modalDialog">
										<div class="modalwrapper">
												<header>
												
													<a href="#close" title="Close" class="close">X</a>
											    
												<h2>Green Rolls</h2>
											</header>
											<div class="mainwrapper">
												<img  id="firstimgpop" src="<?php bloginfo('template_directory'); ?>/images/pic02.jpg">
												</div>
											    <footer>Delicious green rolls from Taiwan. Avocado rolls with salmon on top. All wrapped with the finest Taiwanese algae.</footer>
											</div>
										</div>
 
									<div class="img-container">

										<a id="secondbox" class="img-a" href="#openModal2">
											<img id="secondimg" class="my-img" src="<?php bloginfo('template_directory'); ?>/images/pic01.jpg">
											<div class="opback">
											<div class="img-tag" id="work">Bruschetta</div>
										</div>
										</a>
									</div>
									<div id="openModal2" class="modalDialog">
										<div class="modalwrapper">
												<header>
												
													<a href="#close" title="Close" class="close">X</a>
											    
												<h2>Bruschetta</h2>
											</header>
											<div class="mainwrapper">
												<img  id="secondimgpop" src="<?php bloginfo('template_directory'); ?>/images/pic01.jpg">
												</div>
											    <footer>Delicious italian appetizer 🇮🇹. Vegan Bruschette with beans and tomato topping.</footer>
											</div>
										</div>


									<div class="img-container">
										<a  id="thirdbox" class="img-a" href="#openModal3">
											<img id="thirdimg" class="my-img" src="<?php bloginfo('template_directory'); ?>/images/pic04.jpg">
											<div class="opback">
											<div class="img-tag">Bruschette</div>

										</div>
										</a>
									</div>
									<div id="openModal3" class="modalDialog">
										<div class="modalwrapper">
												<header>
												
													<a href="#close" title="Close" class="close">X</a>
											    
												<h2>Bruschette</h2>
											</header>
											<div class="mainwrapper">
												<img  id="thirdimgpop" src="<?php bloginfo('template_directory'); ?>/images/pic04.jpg">
												</div>
											    <footer>The classic, reborn. Our chef has prepared these delicious bruschettes. With Pomegranate sprinkled on top of it. Yummy!</footer>
											</div>
										</div>

									<div class="img-container">
										<a id="fourthbox" class="img-a" href="#openModal4">
											<img id="fourthimg" class="my-img" src="<?php bloginfo('template_directory'); ?>/images/pic03.jpg">
											<div class="opback">
											<div class="img-tag">Eggplants</div>
										</div>
										</a>
									</div>
									<div id="openModal4" class="modalDialog">
										<div class="modalwrapper">
												<header>
												
													<a href="#close" title="Close" class="close">X</a>
											    
												<h2>Eggplants</h2>
											</header>
											<div class="mainwrapper">
												<img id="fourthimgpop" src="<?php bloginfo('template_directory'); ?>/images/pic03.jpg">
												</div>
											    <footer>Dish simplicity implies food multiplicity. With this slogan we offer a simple yet delicious appetizer, the filled Eggplants (The actual food in the image is filled peppers) </footer>
											</div>
										</div>

									<div class="img-container">
										<a id="fifthbox" class="img-a" href="#openModal5">
											<img id="fifthimg" class="my-img" src="<?php bloginfo('template_directory'); ?>/images/pic06.jpg">
											<div class="opback">
											<div class="img-tag">Spicy Beans</div>
										</div>
										</a>
									</div>
									<div id="openModal5" class="modalDialog">
										<div class="modalwrapper">
												<header>
												
													<a href="#close" title="Close" class="close">X</a>
											    
												<h2>Spicy Beans</h2>
											</header>
											<div class="mainwrapper">
												<img  id="fifthimgpop" src="<?php bloginfo('template_directory'); ?>/images/pic06.jpg">
												</div>
											    <footer>Fresh edamame beans straight out of Japan 🇯🇵. Go spicy or go home.</footer>
											</div>
										</div>

									<div class="img-container">
										<a id="sixthbox" class="img-a" href="#openModal6">
											<img id="sixthimg" class="my-img" src="<?php bloginfo('template_directory'); ?>/images/pic05.jpg">
											<div class="opback">
											<div class="img-tag">Meatballs</div>

										</div>
										</a>
										
									</div>
									<div id="openModal6" class="modalDialog">
										<div class="modalwrapper">
												<header>
												
													<a href="#close" title="Close" class="close">X</a>
											    
												<h2>Meatballs</h2>
											</header>
											<div class="mainwrapper">
												<img id="sixthimgpop" src="<?php bloginfo('template_directory'); ?>/images/pic05.jpg">
												</div>
											    <footer>Ikea meatballs, but better. Don't worry, these meatballs are not produced with furniture waste. Coming from the mongolian tundra, we offer these fine Mongolian Horse meat meatballs.</footer>
											</div>
										</div>

								</div>

							</div>
						</div>
					</div>
				</div>
			

		<!-- Third -->
				<div class="simpletext" id = "our_events">

		<?php $the_query = new WP_Query( array( 'pagename' => 'our-events' ) ); ?>

			<?php while ($the_query -> have_posts()) : $the_query -> the_post();  ?>
				<h2><?php the_title(); ?></h2>
               <?php the_content(); ?>

     <?php endwhile;?>
	</div>

					<div >
					<div id="lowerbrown" class="lower_brown_div">
					<div class="filling-div-20"></div>
					
						<div id = "upcoming_events">
							<h3 id="upcoming"><b> Upcoming Events </b></h3>
							<div class="bigEventBox">
								
									
										<span ><span  ></span></span>

									<img class="bigImage" src="<?php bloginfo('template_directory'); ?>/images/cooking.jpg">
									
										<a class="header-sum" href="">
											<h3>Learning to Cook</h3>
											<h2>12/03/2017 10:30 a.m.</h2>
										</a>
									
									<p>Get the basic skills every home cook needs to be successful and happy in the kitchen. Ditch recipes by learning basic cooking formulas. Come and learn how to <a href=""> [Read More]</a></p>

							</div>
							<div class="bigEventBox">
								
									<span ><span  ></span></span>

								<img class="bigImage" src="<?php bloginfo('template_directory'); ?>/images/2.jpg">
									<a class="header-sum" href="">
										<h3>Pasta Day</h3>
										<h2>11/03/2017 18:00 - 23:00</h2>
									</a>
									
									<p>The fresh pastas offered at LaPlace are made right in our restaurant. And if you've only ever had boxed pastas, you are truly missing out! Once evert two months we celebrate Pasta with an event <a  href=""> [Read More]</a></p>

							</div>
							<div class="bigEventBox">
								
									<span ><span  ></span></span>

								<img class="bigImage" src="<?php bloginfo('template_directory'); ?>/images/3.png">
									<a class="header-sum" href="">
										<h3>Happy Hour</h3>
										<h2>03/03/2017 18:00 - 23:00</h2>
									</a>
									
									<p>It's Friday!!! Come and enjoy the start of the weekend with us. Our Happy Hours offer the best combination of nice drinks and food. To reserve a sit please register to the event <a href=""> [Read More]</a> </p>
								
							</div>
						</div>
						</br> </br>
						<div  id="centerid">
						<h3 > <b> Past Events </b> </h3>
						<div >
							<div  class="smallEventBox">
									
										<span ><span  ></span></span>
								<div id="divforsmallimg">
									<img class="smallImage"  src="<?php bloginfo('template_directory'); ?>/images/4.jpg">
								</div>

										<a href="">
											<h3>10th Anniversary</h3>
											<h2>01/12/2016 18:00 - 23:00</h2>
										</a>

										
									
								</div>
							<div  class="smallEventBox">
									
										<span ><span  ></span></span>
								<div id="divforsmallimg">
									<img class="smallImage" src="<?php bloginfo('template_directory'); ?>/images/2.jpg">
								</div>
										<a href="">
											<h3>Pasta Day</h3>
											<h2>20/11/2016 18:00 - 23:00</h2>
										</a>
										
										
									
								</div>
							
							<div  class="smallEventBox">
									
										<span ><span  ></span></span>
								<div id="divforsmallimg">
									<img class="smallImage" src="<?php bloginfo('template_directory'); ?>/images/3.png">
								</div>

										<a href="">
											<h3>Happy Hour</h3>
											<h2>11/11/2016 18:00 - 23:00</h2>
										</a>
										
										
									
								</div>

							<div  class="smallEventBox">
									
										<span ><span  ></span></span>
								<div id="divforsmallimg">
									<img class="smallImage" src="<?php bloginfo('template_directory'); ?>/images/cooking.jpg">
								</div>
										<a href="">
											<h3>Salsa</h3>
											<h2>01/11/2016 18:00 - 23:00</h2>
										</a>
										
										
									
								</div>			
						</div>
						</br> </br>
						<div class="SeeMoreBtn">
							<div >
								
									<a href="#second" style="text-decoration: none; color: white;">See More</a>
								
							</div>
						</div>
					</div>
				</div>
			
		<!-- Basic Elements -->
		
		<!-- Fourth -->
					<div class = "Contact">
						<h2>Contact us</h2>
						<p>Feel free to contact us for any kind of issues or questions</p>
					</div>
				
				<div id="contactdata" class = "Contact" >
					<div >
						<form method="post" action="#">
							<div id = "Contact_row">
								<div ><input type="text" placeholder="Name" /></div>
								<div ><input type="text" placeholder="Email" /></div>
							</div>
							<div id = "Contact_row">
								<div ><textarea name="message" placeholder="Message"></textarea></div>
							</div>
							<div >
								<div>
									<ul id = "Contact_button">
										<li><input type="submit"  value="Send Message" /></li>
										<li><input type="reset"  value="Clear Form" /></li>
									</ul>
								</div>
							</div>
						</form>
					</div>
				</div>
			
		
		<!-- 5th -->	
		
		<div id = "Booking" class="parallax">
		<div id = "Booking_inner">
					<h2  >Book a table</h2>
				<div>
					<div  >
						<form method="post" action="#">
							<div id = "Element_set">
								<div ><input type="text" placeholder="Name" /></div>
								<div ><input type="text" placeholder="Phone" /></div>
							</div>
							<div id = "Element_set">
							<div ><input type="text" placeholder="Date" /></div>
						<div ><input type="text" placeholder="Time" /></div>
							</div>
							
							<div id = "Element_set">
								<div ><textarea name="message" placeholder="Message"></textarea></div>
							</div>
							</br>
							<input type="submit"  value="Book" />
							
							</div>
						</form>
					</div>
				</div>
				</div>
				</div>
		<!-- Footer -->

			<div id="Impressium">
				<div id="Opening_Hours" class="leftrightimp" >
					<h2> Opening Hour </h2>
					<?php
					$the_slug = 'opening-hours';
					$args = array(
					  'name'        => $the_slug,
					  'post_type'   => 'post',
					  'post_status' => 'publish',
					  'numberposts' => 1
					);

					$my_posts = get_posts($args);
					if( $my_posts ) :
						$idval = $my_posts[0]->ID;
						$meta = get_post_meta($idval);
					
						foreach($meta as $key=>$val){
							if($key == '_edit_last' || $key == '_edit_lock' || $key == '_wp_old_slug')continue;
							echo '<p> <b>'. $key.' : </b>'. $val[0].'</p> </br>';
						}
					endif;
					?>
				
				</div>
				<div  id="Contacts" class="leftrightimp">
					<h2>  Contacts </h2>
					<?php
					$the_slug = 'contacts';
					$args = array(
					  'name'        => $the_slug,
					  'post_type'   => 'post',
					  'post_status' => 'publish',
					  'numberposts' => 1
					);

					$my_posts = get_posts($args);
					if( $my_posts ) :
						$idval = $my_posts[0]->ID;
						$meta = get_post_meta($idval);
					
						foreach($meta as $key=>$val){
							if($key == '_edit_last' || $key == '_edit_lock' || $key == '_wp_old_slug')continue;
							if($key == 'DISCARD'){
								echo '<p>'.$val[0].'</p></br>';
							}else{
								echo '<p> <b>'. $key.' : </b>'. $val[0].'</p> </br>';
							}
							
						}
					endif;
					?>
	
				</div>	
			</div>	
				<div id="Footer">
					<ul >
					
						<li id = "left_li">&copy; Untitled. All rights reserved.</li><li>Design: ETH Zurich, Globis Group</li>
					</ul>
				</div>
			</div>
			<?php get_footer(); ?>

