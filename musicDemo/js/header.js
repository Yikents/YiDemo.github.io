$(function(){

    $('.search-list li').on('click',function(){
        let index=$(this).index();
        if(index==0){
            $('.hb-lists').css('height','35px');
            $('.hb-lists-items>div').show();
            $('.hb-lists-items div').removeClass('dv-active');
            $('.hb-lists-items div').eq(0).addClass('dv-active');
        }else{
            $('.hb-lists').css('height','5px');
            $('.hb-lists-items>div').hide();
        }
        $('.search-list li').removeClass('search-active');
        $(this).addClass('search-active');


    })


    $('.hb-lists-items div').on('click',function(){
        $('.hb-lists-items div').removeClass('dv-active');
        $(this).addClass('dv-active');
    })
})