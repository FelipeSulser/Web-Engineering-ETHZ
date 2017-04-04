<?php 


function register_theme_customizer( $wp_customize ) {
  /**
     * Adds the setting with the unique id of 'tmx_link_color'. 
     *
     * Also defines the transport method to 'postMessage' so that 
     * we can use JavaScript to dynamically change the color without 
     * using the default method of 'refresh.'
     */
  $wp_customize->add_setting(
    'background_color',
    array(
      'default'     => '423433',
      'type' => 'theme_mod',
       'capability' => 'edit_theme_options',
      'transport'   => 'postMessage'
    )
    );
$wp_customize->add_section( 'mytheme_options', 
         array(
            'title'       => __( 'MyTheme Options', 'mytheme' ), //Visible title of section
            'priority'    => 35, //Determines what order this appears in
            'capability'  => 'edit_theme_options', //Capability needed to tweak
            'description' => __('Allows you to customize some example settings for MyTheme.', 'mytheme'), //Descriptive tooltip
         ) 
      );
      
      //2. Register new settings to the WP database...
      $wp_customize->add_setting( 'link_textcolor', //No need to use a SERIALIZED name, as `theme_mod` settings already live under one db record
         array(
            'default'    => '#2BA6CB', //Default setting/value to save
            'type'       => 'theme_mod', //Is this an 'option' or a 'theme_mod'?
            'capability' => 'edit_theme_options', //Optional. Special permissions for accessing this setting.
            'transport'  => 'postMessage', //What triggers a refresh of the setting? 'refresh' or 'postMessage' (instant)?
         ) 
      );   

       $wp_customize->add_setting( 'background_color_settings', //No need to use a SERIALIZED name, as `theme_mod` settings already live under one db record
         array(
            'default'    => '#423433', //Default setting/value to save
            'type'       => 'theme_mod', //Is this an 'option' or a 'theme_mod'
            'transport'  => 'postMessage', //What triggers a refresh of the setting? 'refresh' or 'postMessage' (instant)?
         ) 
      );         
            
      //3. Finally, we define the control itself (which links a setting to a section and renders the HTML controls)...
      $wp_customize->add_control( new WP_Customize_Color_Control( //Instantiate the color control class
         $wp_customize, //Pass the $wp_customize object (required)
         'mytheme_link_textcolor', //Set a unique ID for the control
         array(
            'label'      => __( 'Link Color', 'mytheme' ), //Admin-visible name of the control
            'settings'   => 'link_textcolor', //Which setting to load and manipulate (serialized is okay)
            'priority'   => 10, //Determines the order this control appears in for the specified section
            'section'    => 'colors', //ID of the section this control should render in (can be one of yours, or a WordPress default section)
         ) 
      ) );

      $wp_customize->add_control(
        new WP_Customize_Color_Control(
          $wp_customize,
          'background_color',
          array(
              'label'      => __( 'Background Color', 'mytheme' ),
              'section'    => 'colors',
              'settings'   => 'background_color_settings',
              'transport' => 'postMessage'
          )
        )
      );

} // end register_theme_customizer

add_action( 'customize_register', 'register_theme_customizer' );

/**
 * Registers the Theme Customizer Preview JavaScript with WordPress.
 *
 * 
 */
function customizer_live_preview() {
  wp_enqueue_script(
    'theme-customizer',
    get_template_directory_uri() . '/assets/jquery/theme-customizer.js',
    array( 'jquery', 'customize-preview' ),
    '',
    true
  );

} // end tcx_customizer_live_preview

add_action( 'customize_preview_init', 'customizer_live_preview');
add_action('customize_register','register_theme_customizer');


