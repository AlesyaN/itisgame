$(document).ready(function () {
    $("#arrow").on("click", function (event) {
        var top = $('#section2').offset().top - document.getElementsByClassName('scroll_header')[0].offsetHeight;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});