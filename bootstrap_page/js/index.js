$(function () {
    var timer = null;
    // $('.nav-list-items').on('mouseenter', function () {
    //     $('.model-items').slideUp();
    //     var ind = $(this).index();
    //     $('.model-items').eq(ind).stop().slideToggle();
    //     cot=ind;
    //     $('.model-items').on('mouseleave', function () {
    //         $('.model-items').eq(ind).stop().slideUp();
    //     })
        
    // })
   

    function fn() {
        $('.temper-li').find('.ni').on('click', function () {
            var inds = $(this).index();
            $('.model-items1').eq(inds).stop().show();
            $('.allmodel1').addClass('animate__animated animate__slideInRight')
        })
        $('.it-title').on('click', function () {
            $(this).removeClass('animate__animated animate__slideInRight')
            $(this).addClass('animate__animated animate__slideOutRight');

        })
    }


    $('.header-nav-bar').on('click', function () {
        $('.temper-list').stop().slideToggle();
    })
    autoChangeBlock();
    function autoChangeBlock() {
        var count = 0;
        timer = setInterval(function () {
            count++;
            if (count == 2) {
                count = 0;
            }
            $('.br').hide();
            $('.br').eq(count).show();
            $('.br').eq(count).addClass('animate__animated animate__slideInRight')
        }, 2000);
    }


    $(window).resize(function () {
        var width = this.innerWidth;
        if (width > 991 || width < 767) {
            $('.header-nav-contents').css({
                display: 'none'
            })
        }
    })
})