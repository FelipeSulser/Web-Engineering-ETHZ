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
            'title'       => __( 'MyTheme Options', 'mytheme' ), //Visible title of section
            'priority'    => 35, //Determines what order this appears in
            'capability'  => 'edit_theme_options', //Capability needed to tweak
            'description' => __('Allows you to customize some example settings for MyTheme.', 'mytheme'), //Descriptive tooltip
         ) 
      );
       //2. Register new settings to the WP database...
          
            
     
      $wp_customize->add_control( new WP_Customize_Color_Control( //Instantiate the color control class
         $wp_customize, //Pass the $wp_customize object (required)
         'background_color_live', //Set a unique ID for the control
         array(
            'label'      => __( 'Bg Color' ), //Admin-visible name of the control
            'settings'   => 'background_color_settings', //Which setting to load and manipulate (serialized is okay)
            'priority'   => 10, //Determines the order this control appears in for the specified section
            'section'    => 'colors', //ID of the section this control should render in (can be one of yours, or a section)
            'transport' => 'postMessage'
         ) 
      ) );
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

// Output custom CSS to live site
// Enqueue live preview javascript in Theme Customizer admin screen

?>