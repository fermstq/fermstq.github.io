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
					progress = Math.min( progress + Math.random() * 0.15, 1 );

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

							classie.add( document.body, 'loading-complete' );
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
    
    $('#intro-wipe').click (function(e) {
            e.preventDefault();
            $('#container').removeClass ('view');
            $('#container').addClass ('hide');
            $('#main').addClass ('view');
            $('.loading-complete').addClass ('no-scroll');
    }); 
    
    $('#about').click (function(e) {
            e.preventDefault();
            $('#container').removeClass ('hide');
            $('#container').addClass ('view');
            $('#main').removeClass ('view');
            $('#main').addClass ('hide');
            $('.loading-complete').removeClass ('no-scroll');
    }); 
    
}); 