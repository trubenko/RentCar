$(document).ready(function () {
    $('.js-feedback .rating')
        .rating({
            initialRating: 2,
            maxRating: 4
        });
    $('.js-feedback .rating').rating('enable');

    $('.selection.dropdown').dropdown();
    $('#date-start, #date-end').datetimepicker({
        format: 'd.m.Y H:i'
    });

    $('.js-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.js-languages,.js-currency')
        .dropdown()
});