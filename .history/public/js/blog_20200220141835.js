$( 'a' ).on( 'click', function( e ) {
	e.preventDefault();
	$( 'iframe' ).attr( 'src',  $(this).attr( 'href' ) );
	$('html, body').animate({ scrollTop: $( 'iframe' ).offset().top }, 'fast');
} );