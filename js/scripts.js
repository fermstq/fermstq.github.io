

$(document).ready(function() {
    
    
    $('#menu-button').click (function(e) {
        e.preventDefault();
        $('#menu-button').toggleClass ('open');
        $('#main-menu').toggleClass ('hide view');
        $('#footer').toggleClass ('hide view');
        $('#top').toggleClass ('no-scroll');
        
    }); 
    
    $('.jump-link').click (function(e) {
        $('#menu-button').toggleClass ('open');
        $('#main-menu').toggleClass ('hide view');
        $('#footer').toggleClass ('hide view');
        $('#top').toggleClass ('no-scroll');
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
    
    function comingSoon(){
        $('.cta.disabled').addClass('coming-soon');
    }
    
    $('.cta').click (function(e) {
        e.preventDefault();
        $(this).addClass('disabled');
        setTimeout(comingSoon, 50);
    }); 
    
    function hiRes(){
        $('.tile').parent().addClass('hi-res');
    }
    
    
    // Skillset Tile Clicks
    $('.tile').click (function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        //$(this).parent().removeClass('hi-res');
        //setTimeout(hiRes, 350);
    });
    
    // Accoridon
                                
    $('.trigger').click (function(e) {
        e.preventDefault();
        $(this).parent('.accordion').toggleClass('close');
    });
    
    $('.accordion').addClass('close');


    /*  
    
    // Project Animation Bug Fix
    
    setTimeout(function() { 
        $('#projects .tile-trigger').addClass('active');
    }, 500);
    setTimeout(function() { 
        $('#projects .tile-trigger').removeClass('active');
    }, 1000);
    setTimeout(function() { 
        $('#projects .tile-trigger').addClass('active');
    }, 1500);
    setTimeout(function() { 
        $('#projects .tile-trigger').removeClass('active');
    }, 2000);

    */
    
    
}); 






// NAVIGATION ON SCROLL EVENTS


// Initial state
var scrollPos = 0;
var header = document.getElementById("header");

// When the user scrolls the page, execute myFunction
window.onscroll = function() {fixedNav(), scrollDepth()};

function fixedNav() {
  if (window.pageYOffset > 80) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

function scrollDepth() {
  if (window.pageYOffset > 750) {
    header.classList.add("scrollDepth");
  } else {
    header.classList.remove("scrollDepth");
  }
}

// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		header.classList.add('scrollUp'), header.classList.remove('scrollDown');
	else
		header.classList.remove('scrollUp'), header.classList.add('scrollDown');
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});






