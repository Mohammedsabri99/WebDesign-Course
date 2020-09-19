// Wow JS
// ===========================================================
$(function(){
    new WOW().init();
});

// Preloader
// ===========================================================
$(window).on('load', function(){
    $('#preloader').fadeOut("slow");
});

// Sidebar-ContactBx
// ===========================================================
$(document).ready(function(){
    $('.toggle').click(function(){
        $('#sidebar-contact').toggleClass('active')
        $('.toggle').toggleClass('active')
    })
})