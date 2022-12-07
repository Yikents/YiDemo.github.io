window.onload = function () {
    //渲染页面数据
    renderProduct();
    function renderProduct() {
        var Box = document.querySelector('.box-body');
        for (var i = 0; i < shopcartData.length; i++) {
            var bodyItems = document.createElement('div');
            bodyItems.classList.add('body-items');
            bodyItems.innerHTML = `<div class="checkbtn"><input type="checkbox" class="check"></div>
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
                <div class="btn-left">-</div>
                <div class="btn-content">${shopcartData[i].count}</div>
                <div class="btn-right">+</div>
            </div>
        </div>
    </div>
    `
            Box.appendChild(bodyItems);
        }
    }

    var s = document.querySelector('.all-sum');
    //勾选事件
    changEvent();
    function changEvent() {
        var check = document.querySelectorAll('.check');
        var allCheck = document.querySelector('#allcheck');
        check.forEach(function (value) {
            value.onchange = function () {
                sumPrice();
                var judge = true;
                for (var i = 0; i < check.length; i++) {
                    if (!check[i].checked) {
                        judge = false;
                        break;
                    }
                }
                allCheck.checked = judge;
            }
        })
        allCheck.onchange = function () {
            if (allCheck.checked) {
                check.forEach(function (val) {
                    val.checked = true;
                });
                // sumPrice();
            } else {
                check.forEach(function (val) {
                    val.checked = false;
                });
                // s.innerHTML = '&yen;0.00'
            }
            sumPrice();

        }
    }


    shopCount();
    //增减按键
    function shopCount() {
        var btnLeft = document.querySelectorAll('.btn-left');
        var btnRight = document.querySelectorAll('.btn-right');
        var count = 1;
        btnLeft.forEach(function (value) {
            value.onclick = function () {

                var sb = this.nextElementSibling;
                if (sb.textContent >= count) {
                    sb.textContent = sb.textContent - count;
                }
                sumPrice()
            }
        })
        btnRight.forEach(function (value2) {
            value2.onclick = function () {

                var sb = this.previousElementSibling;
                sb.textContent = Number(sb.textContent) + count; sumPrice()
            }
        })
    }

    //合计
    sumPrice();
    function sumPrice() {
        var sum = document.querySelector('.all-sum');
        var check1 = document.querySelectorAll('.check');
        var countSum = 0;
        var tcount = 0;
        check1.forEach(function (ch) {
            if (ch.checked) {
                var temper = ch.parentNode.parentNode;
                var danPrice = Number(temper.querySelector('.danPrice').textContent.slice(1));
                var btnContent = temper.querySelector('.btn-content').textContent;
                countSum += danPrice * btnContent;
                sum.innerHTML = '&yen;' + countSum.toFixed(2);
                tcount++;
            }
        })
        if (tcount === 0) {
            sum.innerHTML = '&yen;0.00'
        }
    }


    submitPrice();

    //提交按键
    function submitPrice() {
        var sub = document.querySelector('.count-right');
        sub.onclick = function () {
            var value = s.textContent.slice(1);
            alert('总价为' + value + '元');
        }
    }

    deletItems();

    //删除按键
    function deletItems() {
        var headerText = document.querySelector('.header-text');
        // console.log(headerText);
        var selec = document.querySelectorAll('.check');
        var cl = document.querySelector('.count-left');
        var cr = document.querySelector('.count-right');
        var dl = document.querySelector('.delets');
        var as = document.querySelector('.all-sum');
        var ak = document.querySelector('#allcheck');
        var isRun = true;
        // var judge1 = false;
        headerText.onclick = function () {

            if (isRun) {
                this.textContent = '完成';
                this.style.color = 'blue';
                cl.style.display = 'none';
                cr.style.display = 'none';
                dl.style.display = 'block';
                dl.textContent = '删除选中'
                isRun = false;
                judge1 = false;
                dl.onclick = function () {
                    selec.forEach(function (v) {
                        if (v.checked) {
                            v.parentNode.parentNode.remove();
                        }
                    })
                    ak.checked = false;
                    // judge1 = true;
                }
            } else {

                cl.style.display = 'block';
                cr.style.display = 'block';
                dl.style.display = 'none';
                // if (judge1) {
                //     as.innerHTML = '&yen;0.00';
                // }
                // ak.checked = false;
                this.textContent = '编辑';
                this.style.color = 'black';
                isRun = true;

            }
            sumPrice();
        }

    };

    //禁止文本被选中
    document.onselectstart=function(){
        return false;
    }

}