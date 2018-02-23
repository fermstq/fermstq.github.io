$(document).ready(function() {
    
    $('#project-button').click (function(e) {
            e.preventDefault();
            $('#cover').toggleClass ('active');
            $('.project-content').toggleClass('active');
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