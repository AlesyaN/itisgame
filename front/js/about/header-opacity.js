var header = $('header');
var range = document.getElementById('section1').offsetHeight;


$(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop(),
        calc = Math.pow(scrollTop / range, 2);
    header.css("background-color", convert("#000000", calc));
    if (calc > '0.8') {
        header.css("background-color", convert("#000000", 0.8));
    }

});

function convert(hex, opacity) {
    //extract the two hexadecimal digits for each color
    var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
    var matches = patt.exec(hex);

    //convert them to decimal
    var r = parseInt(matches[1], 16);
    var g = parseInt(matches[2], 16);
    var b = parseInt(matches[3], 16);

    //create rgba string
    var rgba = "rgba(" + r + "," + g + "," + b + "," + opacity + ")";

    //return rgba colour
    return rgba;
}