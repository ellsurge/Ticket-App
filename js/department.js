
$(function () {
    $('.department').show();

    $('#select-dept').on("change", function (){
        $('.department').hide();
        $('.'+$(this).val()).show();

    });
});