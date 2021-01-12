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
        
        if( window.location.href.indexOf("#") > -1 ) {
            onEndInitialAnimation();
        }
        
        else {

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
	}

	function startLoading() {
		// simulate loading something..
		var simulationFn = function(instance) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min( progress + 0.075, 1 );

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
                            classie.remove( document.body, 'no-scroll' );
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
        
        if( window.location.href.indexOf("#") > -1 ) {
            classie.remove( container, 'loading' );
            classie.add( container, 'loaded' );
            classie.add( document.body, 'loading-complete' );
            classie.remove( document.body, 'no-scroll' );
            window.removeEventListener( 'scroll', noscroll );
            classie.add( container, 'view' );
        }
        else {
            loader.setProgressFn( simulationFn );
        }
	}
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();

})();


    
$('.intro-out').click (function(e) {
    e.preventDefault();
    var linkUrl = $(this).attr('href');
    $('#container').removeClass ('view');
    $('#container').addClass ('hide');
    setTimeout(function(url) { window.location = url; }, 200, linkUrl);
});
    
