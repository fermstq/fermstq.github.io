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
        $(this).toggleClass ('active');
        $('.project').toggleClass ('active');
        $('.cover').toggleClass ('hide view');
        $('.project-content').toggleClass('hide view');
    }); 
    
    $('#menu-button').click (function(e) {
        e.preventDefault();
        $('#main-menu').toggleClass ('hide view');
        $('#footer').toggleClass ('hide view');
    }); 
    
    $('.intro-out').click (function(e) {
        e.preventDefault();
        $('#container').removeClass ('view');
        $('#container').addClass ('hide');
        $('#main').removeClass ('hide');
        $('#main').addClass ('view');
        $('.loading-complete').addClass ('no-scroll');
    }); 
    
    $('.intro-in').click (function(e) {
        e.preventDefault();
        $('#container').removeClass ('hide');
        $('#container').addClass ('view');
        $('#main').removeClass ('view');
        $('.loading-complete').removeClass ('no-scroll');
        setTimeout(closeMain, 1000);
    }); 
    
    $('#about').click (function(e) {
        e.preventDefault();
        $('#about-content').toggleClass ('view');
    }); 
    
        
    // Menu Project Links
    $('#p1').click (function(e) {
        e.preventDefault();
        
        $('.project').classList.remove('project-active', 'project-slide-in-right', 'project-slide-in-left', 'project-slide-out-right', 'project-slide-out-left');
        
    
        $('#main-menu').toggleClass ('hide view');
        $('#footer').toggleClass ('hide view');
    });
    
}); 


// Project Mobile Slider

// $slider = projectList

// $sliderSlides = project

// $sliderLeft = projectLeft

// $currentSlide = currentProject

// $previousSlide = previousProject

// $slider-slide-hidden = project-hidden

// $slider-slide-active = project-active

// $nextSlide = nextProject


(() => {
    const $projectList = document.querySelector('.project-list');

    const $project = document.querySelectorAll('.project');

    const $projectLeft = document.querySelector('.previous-project');

    const $projectRight = document.querySelector('.next-project');

    // Create method for going on the previous project
    const projectLeft = (e) => {
        e.preventDefault();

        // Get current project
        let $currentProject = document.querySelector('.project-active');

        // Find the previous project
        let $previousProject = $currentProject.previousElementSibling;

        if ($previousProject !== null) {

            // If we are not on the first project
            $currentProject.classList.remove('project-active', 'project-slide-in-right', 'project-slide-in-left', 'project-slide-out-right', 'project-slide-out-left');
            $currentProject.classList.add('project-hidden', 'project-slide-out-right');

            $previousProject.classList.remove('project-hidden', 'project-slide-in-right', 'project-slide-in-left', 'project-slide-out-right', 'project-slide-out-left');
            $previousProject.classList.add('project-active', 'project-slide-in-left');

        } else {

            // If we are on the first project
            $currentProject.classList.remove('project-active', 'project-slide-in-right', 'project-slide-in-left', 'project-slide-out-right', 'project-slide-out-left');
            $currentProject.classList.add('project-hidden', 'project-slide-out-right');

            $projectList.lastElementChild.classList.remove('project-hidden', 'project-slide-in-right', 'project-slide-in-left', 'project-slide-out-right', 'project-slide-out-left');
            $projectList.lastElementChild.classList.add('project-active', 'project-slide-in-left');
        };
        
    };

    // Create method for going on the next project
    const projectRight = (e) => {
        e.preventDefault();
        
        // Get current project
        let $currentProject = document.querySelector('.project-active');

        // Find the next project
        let $nextProject = $currentProject.nextElementSibling;

        if ($nextProject !== null) {
            // If we are not on the last project
            $currentProject.classList.remove('project-active', 'project-slide-in-right', 'project-slide-in-left', 'project-slide-out-right', 'project-slide-out-left');
            $currentProject.classList.add('project-hidden', 'project-slide-out-left');

            $nextProject.classList.remove('project-hidden', 'project-slide-in-right', 'project-slide-in-left', 'project-slide-out-right', 'project-slide-out-left');
            $nextProject.classList.add('project-active', 'project-slide-in-right');
        } else {
            // If we are on the last project
            $currentProject.classList.remove('project-active', 'project-slide-in-right', 'project-slide-in-left', 'project-slide-out-right', 'project-slide-out-left');
            $currentProject.classList.add('project-hidden', 'project-slide-out-left');

            $projectList.firstElementChild.classList.remove('project-hidden', 'project-slide-in-right', 'project-slide-in-left', 'project-slide-out-right', 'project-slide-out-left');
            $projectList.firstElementChild.classList.add('project-active', 'project-slide-in-right');
        };

    };

    // Create new custom event for sliding to the left
    const projectLeftEvent = new Event('projectLeft');

    // Create new custom event for sliding to the right
    const projectRightEvent = new Event('projectRight');

    // Create eventListener for click on the left arrow
    $projectLeft.addEventListener('click', projectLeft, false);

    // Create eventListener for click on the right arrow
    $projectRight.addEventListener('click', projectRight, false);

    // Create eventListener for pressing the left key
    $projectLeft.addEventListener('projectLeft', projectLeft, false);

    // Create eventListener for pressing the right key
    $projectRight.addEventListener('projectRight', projectRight, false);

    // Listen for keydown event
    document.addEventListener('keydown', (e) => {
        e = e || window.event;

        if (e.keyCode === 37) {
            // If pressed key was left arrow
            $projectLeft.dispatchEvent(projectLeftEvent);
        } else if (e.keyCode === 39) {
            // If pressed key was right arrow
            $projectRight.dispatchEvent(projectRightEvent);
        }
    }, false);
    
})();
