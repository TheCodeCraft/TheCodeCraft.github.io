/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});



                 // Trigger the click event of the second link when the first link is clicked.
		// FOR THE DESKTOP
		
		// $('#firstLink').click(function (event) {
		// 	// Prevent the default action of the click event to avoid conflicts.
		// 	event.preventDefault();
	
		// 	// Check if the second link is not the one triggering the click to avoid an infinite loop.
		// 	if (!$(event.target).is('#secondLink')) {
		// 		$('#secondLink').click();
		// 	}
		// });




        
		// $('#firstLink').click(function (event) {
		// 	// Prevent the default action of the click event to avoid conflicts.
		// 	event.preventDefault();
	
		// 	// Check if the second link is not the one triggering the click to avoid an infinite loop.
		// 	if (!$(event.target).is('#secondLink')) {
		// 		$('#thirdLink').click();
		// 	}
		// });

})(jQuery);