import './Prom_tara.scss'
import './owlcarousel/owl.carousel.css'
import './owlcarousel/owl.theme.default.css'
import './owlcarousel/owl.carousel.min'
import './owlcarousel/animate.css'
import './owlcarousel/owl.theme.green.css'

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 2,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        navigation : true,
        singleItem : true,
        animateIn: 'fadeIn',
        nav: true,
        navText: [],
    });
});             