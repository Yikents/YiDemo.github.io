$(function () {
    $('.fe3-container-left-mainMeun').on({
        mouseenter: function () {
           $(this).find('.fclm-items-Rlists').css('display', 'flex');
        }
    }, '.fclm-items')
    $('.fe3-container-left-mainMeun').on({
        mouseleave: function () {
           $(this).find('.fclm-items-Rlists').css('display', 'none');
        }
    }, '.fclm-items')


    contChangeImg({
        mainElem:'fe3-container-left-mainMeun',
        elem: 'ct1',
        sx: '-24',
        sy: '0',
        cx: '-24',
        cy: '-20'
    })
    contChangeImg({
        mainElem:'fe3-container-left-mainMeun',
        elem: 'ct2',
        sx: '0',
        sy: '0',
        cx: '-0',
        cy: '-20'
    })
    contChangeImg({
        mainElem:'fe3-container-left-mainMeun',
        elem: 'ct3',
        sx: '-57',
        sy: '-50',
        cx: '-80',
        cy: '-50'
    })
    contChangeImg({
        mainElem:'fe3-container-left-mainMeun',
        elem: 'ct4',
        sx: '-51',
        sy: '-0',
        cx: '-51',
        cy: '-20'
    })


    contChangeImg({
        mainElem:'fe3-container-left-r1',
        elem: 'shoucang-conf',
        sx: '-24',
        sy: '0',
        cx: '-24',
        cy: '-20'
    })

    contChangeImg({
        mainElem:'fe3-container-left-r1',
        elem: 'delete-conf',
        sx: '-51',
        sy: '-0',
        cx: '-51',
        cy: '-20'
    })



    function contChangeImg(obj) {
        $(`.${obj.mainElem}`).on({
            mouseenter: function () {
                $(this).css({
                    backgroundPosition: `${obj.cx}px ${obj.cy}px`
                })
            }
        }, `.${obj.elem}`)
        $(`.${obj.mainElem}`).on({
            mouseleave: function () {
                $(this).css({
                    backgroundPosition: `${obj.sx}px ${obj.sy}px`
                })
            }
        }, `.${obj.elem}`)
    }
})