$(function () {
    $('.layer').mouseenter(function () {
        $('.magnifier').css({
            display: 'block'
        })
        $('.model').css({
            display:'block'
        })
        
        $(this).mousemove(function (e) {
            var left = $(this).offset().left;
            var top = $(this).offset().top;
            var mouseX = e.pageX - left-$('.magnifier').width()/2;
            var mouseY = e.pageY - top-$('.magnifier').height()/2;
            var maxX = $('.body-box').width() - $('.magnifier').width();
            var maxY = $('.body-box').height() - $('.magnifier').height();
            mouseX = mouseX < 0 ? 0 : mouseX > maxX ? maxX : mouseX;
            mouseY=mouseY<0? 0:mouseY>maxY?maxY:mouseY;
            $('.magnifier').css({
                left:mouseX,
                top:mouseY
            })

            var object={
                w: $('.body-box').width()/$('.magnifier').width(),
                h:$('.body-box').height()/$('.magnifier').height()
            }
            var object1={
                x:mouseX*object.w,
                y:mouseY*object.h
            }
            $('.model').css({
                backgroundSize: object.w*100+'%'+object.h*100+'%',
                backgroundPosition:`-${object1.x}px -${object1.y}px`
            })
            

        })
    });

    $('.layer').mouseleave(function () {
        $('.magnifier').css({
            display: 'none'
        })
        $('.model').css({
            display:'none'
        })
    })

    $('.b-ig').mouseenter(function(){
        $('.b-ig').removeClass('active');
        $(this).addClass('active');
        var sc=$(this).find('img').attr('src');
        $('.box-img').attr('src',`${sc}`);
        $('.model').css({
            backgroundImage:`url('${sc}')`
        })
    })

    var scrollLeft=$('.box-allImg').width()-$('.box-items').width();
    var len=0;
    console.log(scrollLeft)
    $('.arrow-left').click(function(){
        if(len<scrollLeft){
            len+=scrollLeft/2;
        }else{
            return;
        }
        $('.box-allImg').css({
            left:`-${len}px`
        })

    })
    $('.arrow-right').click(function(){
        if(len>0){
            len-=scrollLeft/2;
        }else{
            return;
        }
        $('.box-allImg').css({
            left:`-${len}px`
        })
    })
})