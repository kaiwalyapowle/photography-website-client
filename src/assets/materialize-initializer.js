$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    setInterval(function () {
        $('.carousel.carousel-slider').carousel('next')
    }, 2000);
});
