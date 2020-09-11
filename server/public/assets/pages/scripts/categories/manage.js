// Sidebar
$(document).ready(function () {
    $('#sb-item-categories').addClass('active');
    $('#sb-item-categories').addClass('open');
    $('#sb-item-categories-manage').addClass('active');
});

// Preview image
$('.preview-image-upload').change(function(){
    readURL(this);
});

$('.btn-delete').click(function() {
    $('.preview-image').attr('src', '/assets/layout/img/avatar.png');
    $('.preview-image-upload').val('');
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.preview-image').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}