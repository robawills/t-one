import $ from 'jquery';
import 'what-input';
import slick from 'slick-carousel';


$('.js-slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows : false
  });

  $('.js-slick').on('afterChange',
  function(event, slick, currentSlide){
    var index=parseInt(currentSlide)+1; 
    console.log('Slick slider -> EVENT : afterChange',index);
    $('.active').removeClass('active').addClass('hidden');
    $('#content-'+index).removeClass('hidden').addClass('active');
});  


// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
