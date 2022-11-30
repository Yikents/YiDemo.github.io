window.onload = function () {

    var playerLeft = document.querySelector('.footer-player-left');

    var playerRight = document.querySelector('.footer-player-right');


    playerLeft.onmouseenter = function () {
        playerLeft.style.backgroundPosition = `-29px -130px`
    }

    playerLeft.onmouseleave = function () {
        playerLeft.style.backgroundPosition = `1px -130px`
    }




    playerRight.onmouseenter = function () {
        playerRight.style.backgroundPosition = `-110px -130px`
    }

    playerRight.onmouseleave = function () {
        playerRight.style.backgroundPosition = `-80px -130px`
    }

    fn()

    function fn() {
        $('.footer').on('mouseenter', function () {
            $('.footer-box').stop().slideDown('fast').css({
                display: 'flex'
            });
        })
        $('.footer').on('mouseleave', function () {
            $('.footer-box').stop().slideUp('fast');
        })
    }
    let isRun1 = true;
    let isRun2 = true;
    $('.flk').on('click', function () {
        if (isRun1) {
            $('.footer').off('mouseenter');
            $('.footer').off('mouseleave');

            $(this).css({
                backgroundPosition: `-100px -382px`
            })

            isRun1 = false;
        } else {
            fn();
            $('.footer').on('mouseenter');
            $('.footer').on('mouseleave');

            $(this).css({
                backgroundPosition: `-80px -382px `
            })
            $('.footer-fe3-container').hide();

            isRun1 = true;
            isRun2 = true;

        }
    })

    $('.footer-fe3-layer').on('click', function () {
        if (isRun2) {
            $('.footer-fe3-container').css('display', 'flex');
            isRun2 = false;
        } else {
            $('.footer-fe3-container').hide();
            isRun2 = true;
        }
            $('.footer').off('mouseenter');
            $('.footer').off('mouseleave');

            $('.flk').css({
                backgroundPosition: `-100px -382px`
            })

            isRun1 = false;

    })

    $('.fe3-container-close').on('mousedown',function(){
        $('.footer-fe3-container').hide();
        isRun2=true;
    })




}