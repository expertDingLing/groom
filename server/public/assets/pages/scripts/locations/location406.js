$(document).ready(function () {
    // Sidebar
    $('#sb-item-locations').addClass('active');
    $('#sb-item-locations').addClass('open');
    $('#sb-item-locations-location406').addClass('active');
});

$('.accordion-toggle').click(function () {
    if ($(this).hasClass('collapsed')) {
        $(this).parent().parent().parent().siblings().find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
        $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
        $(this).parent().parent().parent().siblings().find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
        $(this).find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
});
