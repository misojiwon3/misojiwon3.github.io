
var current = window.location.pathname.split("/")[1].replace(/\//gi, "");


/**/


/* navigation bar activation */

$(".category .category-header").addClass(current);
$(".post .post-header").addClass(current);

if (current === '') {
    $(".nav .nav-container ul .home").addClass("active");
} else {
    $(".nav .nav-container ul ." + current).addClass("active");
}


/* indicator bar */

var progressIndicator = '<div class="indicator-bar"></div>';
$('body .nav').append(progressIndicator);

$(window).on('scroll', function(){
    var currentScroll = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
    $('.indicator-bar').width(currentScroll+'%');
});


/* tag filter */

$('.tags .tag-list .tag').on('click', function() {
    var current_tag = this.className.split(' ')[1];

    $('.category .post-list .post-item').removeClass("invisible");

    if (current_tag !== 'all') {
        $('.category .post-list .post-item').not('.' + current_tag).addClass("invisible");
    }
});

