$(function () {
    let boxWidth = $('.box').width();
    let allImageWidth = $('.all-image').width();
    let countWidth = boxWidth;
    let timer = null;
    let count = 1;
    let allImage = document.querySelector('.all-image');
    fn();
    function fn() {

        timer = setInterval(() => {
           shareCode();

        }, 2000);
    }
    $('.box').on('mouseenter',function(){
        clearInterval(timer);
    })
    $('.box').on('mouseleave',function(){
       fn();
    })
    $('.items-btn').on({
        click:function(){
            $('.items-btn.active').removeClass('active');
            $(this).addClass('active');
            shareCode()
        }
    })

    function shareCode(){
        if (countWidth < allImageWidth) {
            if (count > 3) {
                count = 0;
            }
            $('.items-btn.active').removeClass('active');
            $('.items-btn').eq(count).addClass('active');
            count++;
            $('.all-image').css({
                transition: `left 1s linear`,
                left: -countWidth + 'px'
            });
            countWidth += boxWidth;
            $('.all-image').removeClass('ai');
        }
        if (countWidth == allImageWidth) {
            $('.all-image').addClass('ai');
            allImage.ontransitionend = function () {
                $('.ai').css({
                    transition: `left 0s linear`,
                    left: 0 + 'px'
                });
            }
            countWidth = boxWidth;
        }
    }
})