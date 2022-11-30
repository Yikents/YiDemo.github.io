$(function(){
    $('.footer-content-pop').on('mouseenter',()=>{
        $('.close-btn').show();
    })
    $('.footer-content-pop').on('mouseleave',()=>{
        $('.close-btn').hide();
        $('body').off('mousemove');
    })
    $('.footer-content-pop').on('mousedown',function(){
        $('.close-btn').hide();
        $('body').on('mousemove',function(e){
            let Fwidth=$('.footer-content-pop').width();
            let Fheight=$('.footer-content-pop').height();
            let mouseX=e.pageX;
            let mouseY=e.pageY;
            let FmoveX=mouseX-Fwidth/2;
            let FmoveY=mouseY-Fheight;
            $('.footer-content-pop').css({
                left:FmoveX+'px',
                top:FmoveY+'px'
            })
        })
    })
    $('.footer-content-pop').on('mouseup',function(){
        $('.close-btn').show();
        $('body').off('mousemove');
    })

})