import $ from 'jquery';

const carousel = () => {

    $('.js-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true
    });
    
    $('.js-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        asNavFor: '.js-slider-nav'
    });

    $('.js-slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.js-slider-for',
        autoplay: false,
        dots: true,
        centerMode: false,
        arrows: false
    });
    

};


export default carousel;