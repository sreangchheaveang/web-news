$(document).ready(function(){
    $("#bar").click(function(){
        $(".phone-menu").slideToggle(700);
    })

    $(document).on('click','ul li',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })


})