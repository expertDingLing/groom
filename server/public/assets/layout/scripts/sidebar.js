$('.page-logo .sidebar-toggler').click(function () {
    if ($(".sidebar-userinfo").is(":visible")) {
        $('.sidebar-userinfo').hide();
    } else {
        $('.sidebar-userinfo').show();
    }
});

$('.page-sidebar-menu > .nav-item').click(function () {
    if ($(this).children().length == 1) {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(this).siblings().find("li").removeClass('active');
        }
    }
});

$('.page-sidebar-menu .sub-menu > .nav-item').click(function () {
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        if (!$(this).parent().parent().hasClass('active')) {
            $(this).parent().parent().addClass('active');
        }
        $(this).siblings().removeClass('active');
        $(this).parent().parent().siblings().removeClass('active');
        $(this).parent().parent().siblings().find("li").removeClass('active');
    }
});