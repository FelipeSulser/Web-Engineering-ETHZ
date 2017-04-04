(function( $ ) {

        /**
         * Connects to the Theme Customizer's color picker, and changes the anchor
         * color whenever the user changes colors in the Theme Customizer.
         */
	wp.customize( 'background_color_settings', function( value ) {
		value.bind( function( to ) {
			$( '#browndiv' ).css( 'background', to );
			$( '#lowerbrown' ).css( 'background', to );

		});
	});

}( jQuery ));