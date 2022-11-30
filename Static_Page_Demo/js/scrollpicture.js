var ig = document.getElementsByClassName('body-imag');
var arrowLeft = document.getElementsByClassName('b-left')[0];
var arrowRight = document.getElementsByClassName('b-right')[0];
var clickBtn = document.getElementsByClassName('body-btn-cricle');
var clearplay = document.getElementsByClassName('box-scroll-right')[0];
var count = 4;
var countr = 0;
var ti;

// console.log(clearplay);

for (var i = 0; i < clickBtn.length; i++) {
    clickBtn[i].setAttribute('index', i);
    clickBtn[i].onclick = function () {
        for (var i = 0; i < clickBtn.length; i++) {
            clickBtn[i].classList.remove('ative-btn-cricle');
        }
        this.classList.add('ative-btn-cricle');

        var ind = this.getAttribute('index');
        for (var i = 0; i < ig.length; i++) {
            for (var i = 0; i < ig.length; i++) {
                ig[i].style.display = 'none';
            }
            ig[ind].style.display = 'block';
        }

        // 为左箭头获取标点
        if (parseInt(ind) > 0) {
            count = parseInt(ind) - 1;
        } else {
            count = 4;
        }

        // 为右箭头获取标点
        if (parseInt(ind) < 5) {
            countr = parseInt(ind);
        }
    }
}


// 左箭头
arrowLeft.onclick = function () {

    if (count > 0) {
        for (var i = 0; i < clickBtn.length; i++) {
            clickBtn[i].classList.remove('ative-btn-cricle');
        }
        clickBtn[count].classList.add('ative-btn-cricle');


        for (var i = 0; i < ig.length; i++) {
            ig[i].style.display = 'none';
        }
        ig[count].style.display = 'block';
        count--;
    } else {
        for (var i = 0; i < clickBtn.length; i++) {
            clickBtn[i].classList.remove('ative-btn-cricle');
        }
        clickBtn[0].classList.add('ative-btn-cricle');


        for (var i = 0; i < ig.length; i++) {
            ig[i].style.display = 'none';
        }
        ig[0].style.display = 'block';
        count = 4;
    }

    if (count < 4) {
        countr = count + 1;
    } else {
        countr = 0;
    }
}

// 右箭头和自动播放共用函数
function fun() {
    if (countr < 4) {
        countr++;
        for (var i = 0; i < clickBtn.length; i++) {
            clickBtn[i].classList.remove('ative-btn-cricle');
        }
        clickBtn[countr].classList.add('ative-btn-cricle');


        for (var i = 0; i < ig.length; i++) {
            ig[i].style.display = 'none';
        }
        ig[countr].style.display = 'block';

    } else {
        for (var i = 0; i < clickBtn.length; i++) {
            clickBtn[i].classList.remove('ative-btn-cricle');
        }
        clickBtn[0].classList.add('ative-btn-cricle');


        for (var i = 0; i < ig.length; i++) {
            ig[i].style.display = 'none';
        }
        ig[0].style.display = 'block';
        countr = 0;
    }
    if (countr > 0) {
        count = countr - 1;
    } else {
        count = 4;
    }
}

// 右箭头
arrowRight.onclick = function () {
    fun();
}

// 自动播放
ti = setInterval(() => {
    fun();
}, 3000);

// 暂停播放
clearplay.onmouseover = function () {
    clearInterval(ti);
}

// 鼠标离开继续播放
clearplay.onmouseout=function(){
    ti = setInterval(() => {
        fun();
    }, 3000);
}

