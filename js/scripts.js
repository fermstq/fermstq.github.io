(function() {

	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById( 'container' ),
		header = container.querySelector( 'header.header' ),
		loader = new PathLoader( document.getElementById( 'loader-circle' ) ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}

			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		classie.add( container, 'loading' );

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}

	function startLoading() {
		// simulate loading something..
		var simulationFn = function(instance) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min( progress + Math.random() * 0.1, 1 );

					instance.setProgress( progress );

					// reached the end
					if( progress === 1 ) {
						classie.remove( container, 'loading' );
						classie.add( container, 'loaded' );
						clearInterval( interval );

						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}

							classie.add( document.body, 'layout-switch' );
							window.removeEventListener( 'scroll', noscroll );
						};

						if( support.animations ) {
							header.addEventListener( animEndEventName, onEndHeaderAnimation );
						}
						else {
							onEndHeaderAnimation();
						}
					}
				}, 80 );
		};

		loader.setProgressFn( simulationFn );
	}
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();

})();



$(document).ready(function() {
    
    $('.project-button').click (function(e) {
            e.preventDefault();
            $('.cover').toggleClass ('active');
            $('.project-content').toggleClass('active');
    }); 
    
    $('#menu-button').click (function(e) {
            e.preventDefault();
            $('#main-menu').toggleClass ('active');
            $('#footer').toggleClass ('active');
    }); 
    
    $('#view-projects').click (function(e) {
            e.preventDefault();
            $('#container').toggleClass ('hide');
            $('#main').toggleClass ('view');
    }); 

    
    
    /* $('#project-button').click (function(e) {
            e.preventDefault();
            $('#cover').addClass ('animate');
            $('.project-content').addClass('animate');
            $('#cover').toggleClass ('active');
            $('.project-content').toggleClass('active');
            $('#cover').removeClass ('animate');
            $('.project-content').removeClass('animate');
    }); */
            
    
    /* $('#project-button').click (function(e) {
            e.preventDefault();
            if ($('#cover').hasClass ('active')) { 
                    $('#cover').removeClass ('active');
                    $('.project-content').removeClass('active');

            } else { 
                $('#cover').addClass ('active');
                $('.project-content').addClass('active');
            }
    }); */
    
}); 