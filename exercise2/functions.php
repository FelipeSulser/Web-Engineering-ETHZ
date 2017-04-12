<?php

   
  function register ( $wp_customize ) {
       $wp_customize->add_setting( 'background_color_settings', //No need to use a SERIALIZED name, as `theme_mod` settings already live under one db record
         array(
            'default'    => '#423433', //Default setting/value to save
            'type'       => 'theme_mod', //Is this an 'option' or a 'theme_mod'?
            'capability' => 'edit_theme_options', //Optional. Special permissions for accessing this setting.
            'transport'  => 'postMessage' //What triggers a refresh of the setting? 'refresh' or 'postMessage' (instant)?
         ) 
      );   
      
      //1. Define a new section (if desired) to the Theme Customizer
      $wp_customize->add_section( 'mytheme_options', 
         array(
            'title'       => __( 'LaPlace Color', 'mytheme' ), //Visible title of section
            'priority'    => 35, //Determines what order this appears in
            'capability'  => 'edit_theme_options', //Capability needed to tweak
            'description' => __('Allows you to customize some example settings for MyTheme.', 'mytheme'), //Descriptive tooltip
         ) 
      );
       //2. Register new settings to the WP database...
          
      $wp_customize->remove_section('colors');
     
      $wp_customize->add_control( new WP_Customize_Color_Control( //Instantiate the color control class
         $wp_customize, //Pass the $wp_customize object (required)
         'background_color_live', //Set a unique ID for the control
         array(
            'label'      => __( 'Bg Color' ), //Admin-visible name of the control
            'settings'   => 'background_color_settings', //Which setting to load and manipulate (serialized is okay)
            'priority'   => 10, //Determines the order this control appears in for the specified section
            'section'    => 'mytheme_options', //ID of the section this control should render in (can be one of yours, or a section)
            'transport' => 'postMessage'
         ) 
      ) );











      $wp_customize->add_section( 'Opening_Hours', 
         array(
            'title'       => "Opening Hours", //Visible title of section
            'priority'    => 40, //Determines what order this appears in
            'capability'  => 'edit_theme_options', //Capability needed to tweak
         ) 
      );


      $wp_customize->add_setting(
    'monday_opening_setting',
    array(
        'default' => 'Closed',
    )
);
      $wp_customize->add_control(
    'monday_opening_setting',
    array(
        'label' => 'Monday',
        'section' => 'Opening_Hours',
        'type' => 'text',
    )
);

      $wp_customize->add_setting(
    'tue_fri_opening_setting',
    array(
        'default' => 'Closed',
    )
);
      $wp_customize->add_control(
    'tue_fri_opening_setting',
    array(
        'label' => 'Tue-Fri',
        'section' => 'Opening_Hours',
        'type' => 'text',
    )
);
       $wp_customize->add_setting(
    'sat_sun_opening_setting',
    array(
        'default' => 'Closed',
    )
);
      $wp_customize->add_control(
    'sat_sun_opening_setting',
    array(
        'label' => 'Sat-Sun',
        'section' => 'Opening_Hours',
        'type' => 'text',
    )
);
        $wp_customize->add_setting(
    'holiday_opening_setting',
    array(
        'default' => 'Closed',
    )
);
      $wp_customize->add_control(
    'holiday_opening_setting',
    array(
        'label' => 'Holidays',
        'section' => 'Opening_Hours',
        'type' => 'text',
    )
);



      $wp_customize->add_section( 'Contact', 
         array(
            'title'       => "Contact", //Visible title of section
            'priority'    => 40, //Determines what order this appears in
            'capability'  => 'edit_theme_options', //Capability needed to tweak
         ) 
      );


      $wp_customize->add_setting(
    'city_contact_setting',
    array(
        'default' => 'Mustercontact',
    )
);
      $wp_customize->add_control(
    'city_contact_setting',
    array(
        'label' => 'City',
        'section' => 'Contact',
        'type' => 'text',
    )
);

      $wp_customize->add_setting(
    'street_contact_setting',
    array(
        'default' => 'Mustercontact',
    )
);
      $wp_customize->add_control(
    'street_contact_setting',
    array(
        'label' => 'Street',
        'section' => 'Contact',
        'type' => 'text',
    )
);
      $wp_customize->add_setting(
    'phone_contact_setting',
    array(
        'default' => 'Mustercontact',
    )
);
      $wp_customize->add_control(
    'phone_contact_setting',
    array(
        'label' => 'Phone',
        'section' => 'Contact',
        'type' => 'text',
    )
);
      $wp_customize->add_setting(
    'email_contact_setting',
    array(
        'default' => 'Mustercontact',
    )
);
      $wp_customize->add_control(
    'email_contact_setting',
    array(
        'label' => 'Email',
        'section' => 'Contact',
        'type' => 'text',
    )
);


   }



   function generate_css( $selector, $style, $mod_name, $prefix='', $postfix='', $echo=true ) {
      $return = '';
      $mod = get_theme_mod($mod_name);
      if ( ! empty( $mod ) ) {
         $return = sprintf('%s { %s:%s; }',
            $selector,
            $style,
            $prefix.$mod.$postfix
         );
         if ( $echo ) {
            echo $return;
         }
      }
      return $return;
    }

     function header_output() {
      ?>
      <!--Customizer CSS--> 
      <style type="text/css">
           <?php generate_css('#browndiv', 'background', 'background_color_settings'); ?> 
           <?php generate_css('#lowerbrown', 'background', 'background_color_settings'); ?> 
        
      </style> 
      <!--/Customizer CSS-->
      <?php
   }



 function live_preview() {
      wp_enqueue_script( 
           'mytheme-themecustomizer', // Give the script a unique ID
           get_template_directory_uri() . '/assets/jquery/theme-customizer.js', // Define the path to the JS file
           array(  'jquery', 'customize-preview' ), // Define dependencies
           '', // Define a version (optional) 
           true // Specify whether to put in footer (leave this true)
      );
   }




add_action( 'customize_preview_init' ,  'live_preview' );
// Setup the Theme Customizer settings and controls...
add_action( 'customize_register' , 'register'  );
// Output custom CSS to live site
add_action( 'wp_footer' ,  'header_output'  );

$args = array(
  'width' => 1600,
  'height' => 650,
  'uploads' => true,
  );

function add_custom_image_header_ours( $wp_head_callback, $admin_head_callback, $admin_preview_callback = '' ) {
    _deprecated_function( __FUNCTION__, '3.4.0', 'add_theme_support( \'custom-header\', $args )' );
    $args = array(
        'wp-head-callback'    => $wp_head_callback,
        'admin-head-callback' => $admin_head_callback,
        'width' => 1600,
        'height' => 650,
        'uploads' => true

    );
    if ( $admin_preview_callback )
        $args['admin-preview-callback'] = $admin_preview_callback;
    return add_theme_support( 'custom-header', $args );
}
add_custom_image_header_ours('custom_header',$args);
function ajax_test_enqueue_scripts() {
 wp_enqueue_script( 'most_awesome', get_template_directory_uri() . '/assets/jquery/most_awesome.js', array ( 'jquery' ), 1.1, true);

  wp_localize_script( 'most_awesome', 'postevents', array(
    'ajax_url' => admin_url( 'admin-ajax.php' )
  ));

}
add_action( 'wp_ajax_get_post_past', 'get_post_past' );
add_action( 'wp_ajax_nopriv_get_post_past', 'get_post_past' );
function wpdocs_custom_excerpt_length( $length ) {
    return 15;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );
function get_post_past() {
  //quer
  $my_posts_past = get_posts(array(
                'numberposts' => -1,
                'post_type'   => 'post',
                'meta_key' => 'DATE_STARTING',
                'orderby' => 'meta_value',
                'order'   => 'DESC'
              ));
  $my_posts = array();
  $my_special_array = array();
  if($my_posts_past):
    foreach($my_posts_past as &$postinfopast){
        $idval = $postinfopast->ID;
        $meta_current = get_post_meta($idval);
        $date_post = $meta_current['DATE_STARTING'][0];
        $postinfopast->DATE_STARTING =(int) $date_post;
        array_push($my_special_array, (int) $date_post);
    }

    usort($my_posts_past, function($a, $b) { return($a->DATE_STARTING < $b->DATE_STARTING); });
    
     $threshold = 4;
     $counter = 4;
   foreach($my_posts_past as &$postinfopast):
    $idval = $postinfopast->ID;
    $current_tstamp = time();
    $meta_current = get_post_meta($idval);
    $date_post = $meta_current['DATE_STARTING'][0];


    if($date_post <  $current_tstamp):
      $img_url = $meta_current['URLDIR'];
      
      setup_postdata($postinfopast) ;
      if($threshold <= 0 && $counter > 0){

       // $postinfopast->DATE_STARTING = $meta_current['DATE_STARTING'][0];
        $postinfopast->DATE_STARTING = date('d/m/Y H:i:s', $meta_current['DATE_STARTING'][0]);
    $postinfopast->DATE_ENDING = date('d/m/Y H:i:s', $meta_current['DATE_ENDING'][0]);
        $postinfopast->URLDIR = $meta_current['URLDIR'][0];
        //array_push($postinfopast, $meta_current['DATE_STARTING']);
        array_push($my_posts, ($postinfopast));
        $counter = $counter -1;

      }
      $threshold = $threshold-1;
                   
                 endif;
                
                 endforeach;

             endif; 
             echo json_encode($my_posts);
             die();

}

?>