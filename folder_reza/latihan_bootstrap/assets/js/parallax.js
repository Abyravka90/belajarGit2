$(document).ready(function(){
    var header = $('.main_banner ');
    
    var backgrounds = new Array(
        'url(https://bdayloona.netlify.app/random_stuff/carousel-1.png'
      , 'url(https://bdayloona.netlify.app/random_stuff/carousel-2.png)'
         , 'url(https://bdayloona.netlify.app/random_stuff/carousel-3.png)'
      
      
    );
    
    var current = 0;
    
    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 5000);
    
    header.css('background-image', backgrounds[0]);
    });