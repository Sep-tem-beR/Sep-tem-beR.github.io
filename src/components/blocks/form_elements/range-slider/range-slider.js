$( function() {
    $( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 15000,
		step: 100,
		values: [ 5000, 10000 ],
		slide: function( event, ui ) {
			$( "#amount" ).val(ui.values[ 0 ] + 'P - ' + ui.values[ 1 ] + 'P' );
		}
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) + 'P - '
     	+ $( "#slider-range" ).slider( "values", 1 ) + 'P' );
} );