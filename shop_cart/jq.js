$(function () {
    dataRender();
    function dataRender() {
        for (var i = 0; i < shopcartData.length; i++) {
            var $bodyItems = $(`<div class="body-items"><div class="checkbtn"><input type="checkbox" class="check"></div>
            <div class="shop-img"><img class="auto-img" src='${shopcartData[i].small_img}'></div>
            <div class="body-content">
                <div class="content-header">
                    <div class="ch-top-text">
                        <span>${shopcartData[i].name}</span>
                        <span>${shopcartData[i].rule}</span>
                    </div>
                    <div class="ch-to-tis">${shopcartData[i].enname}</div>
                </div>
                <div class="content-foot">
                    <span class='danPrice'>&yen;${shopcartData[i].price}</span>
                    <div class="con-btn">
                        <div class="btn-left" data-count='-1'>-</div>
                        <div class="btn-content">${shopcartData[i].count}</div>
                        <div class="btn-right" data-count='1'>+</div>
                    </div>
                </div>
            </div>
            </div>
            `)
            $('.box-body').append($bodyItems);
        }
    }
    $('.check').click(function () {
        var judge = true;
        $('.check').each(function (index, element) {
            var isRun = $(element).prop('checked');
            if (!isRun) {
                judge = false;
                return;
            }
        })
        if (judge) {
            $('#allcheck').prop('checked', true);
        } else {
            $('#allcheck').prop('checked', false);
        }
        countAllPrice()

    })
    $('#allcheck').click(function () {
        var currentCheck = $(this).prop('checked');
        if (currentCheck) {

            $('.check').prop('checked', true);
        } else {
            $('.check').prop('checked', false);
        }
        countAllPrice()
    })

    clickButton();
    function clickButton() {
        $('.btn-left').click(function () {
            var reduce = $(this).data('count');
            var reduceText = Number($(this).next().text());
            if (reduceText == 1) {
                return;
            }
            $(this).next().text(reduceText + reduce);
            countAllPrice()
        })
        $('.btn-right').click(function () {
            var add = $(this).data('count');
            var addText1 = Number($(this).prev().text());
            $(this).prev().text(addText1 + add);
            countAllPrice()
        })
    }
    countAllPrice();
    function countAllPrice() {
        var sumPrice = 0;
        $('.check').each(function (index, element) {
            var isRun = $(element).prop('checked');
            if (isRun) {
                var a = Number($(element).parents('.body-items').find('.danPrice').text().slice(1));
                var b = Number($(element).parents('.body-items').find('.btn-content').text());
                sumPrice += a * b;

            }
        })

        $('.all-sum').html(`&yen;${sumPrice.toFixed(2)}`)
    }
deletList();
    function deletList(){
        var judge1=true;
        $('.header-text').click(function(){
            if(judge1){
                $(this).text('完成');
                $('.count-left').hide();
                $('.count-right').hide();
                $('.delets').show();
                judge1=false;
            }else{
                $(this).text('编辑');
                $('.count-left').show();
                $('.count-right').show();
                $('.delets').hide();
                judge1=true;
            }
        });
        $('.delets').click(function(){
            $('.check').each(function(index,element){
                var isDel=$(element).prop('checked');
                if(isDel){
                    $(element).parents('.body-items').remove();
                }
            })
            countAllPrice();
        })
    }
    submitButton()
    function submitButton(){
        $('.count-right').click(function(){
            alert('合计为:'+$('.all-sum').text());
        })
    }
})