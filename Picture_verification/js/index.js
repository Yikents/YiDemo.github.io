window.onload = function () {
    var box = document.querySelector('.box');
    var boxImg = document.querySelector('.box-img');
    var boxBlank = document.querySelector('.box-blank');
    var boxValid = document.querySelector('.box-valid');
    var scrollBlock = document.querySelector('.scroll-block');
    var boxBlock = document.querySelector('.box-block');
    var boxBlankStyle = getComputedStyle(boxBlank);
    var boxBlankW = parseFloat(boxBlankStyle.width);
    var boxBlankH = parseFloat(boxBlankStyle.height);
    var boxImgStyle = getComputedStyle(boxImg);
    var boxImgX = parseFloat(boxImgStyle.width);
    var boxImgY = parseFloat(boxImgStyle.height);
    var randomX = Math.floor(Math.random() * boxImgX / 2) + boxImgX / 2;
    var randomY = Math.floor(Math.random() * boxImgY);
    var rightRang = {
        w: boxImgX - boxBlankW,
        h: boxImgY - boxBlankH
    }
    var judge = null;
    var isRun=false;
    var progress=document.querySelector('.progress');
    var update=document.querySelector('.update');
    var timer=null;
    var time=0;
    randomX = randomX > rightRang.w ? rightRang.w : randomX
    randomY = randomY > rightRang.h ? rightRang.h : randomY
    boxBlank.style.left = randomX + 'px';
    boxBlank.style.top = randomY + 'px';
    boxValid.style.top = randomY + 'px';
    var igX = randomX;
    var igY = randomY;
    boxValid.style.backgroundPosition = `-${igX}px -${igY}px`;


    scrollBlock.onmousedown = function () {
        isRun=true;
        boxBlock.onmousemove = function (e) {
            var currentX = e.pageX - scrollBlock.offsetWidth / 2 - box.offsetLeft;
            var maxX = boxBlock.offsetWidth - scrollBlock.offsetWidth;
            currentX = currentX < 0 ? 0 : currentX > maxX ? maxX : currentX;
            scrollBlock.style.left = currentX + 'px';
            boxValid.style.left = `${currentX}px `;
            judge = currentX;
            progress.style.width=currentX+'px';
            boxBlock.style.backgroundColor='rgb(216, 216, 216)';
            scrollBlock.style.color='skyblue'
        }
        
        document.onmouseup = function () {
            if (isRun) {
                if (judge <= igX + 3 && judge >= igX - 3) {
                    boxBlock.style.color='blue';
                    boxBlock.innerHTML=`${time}s 验证成功`;
                    setTimeout(() => {
                        var blankLeft=parseFloat(getComputedStyle(boxBlank).left);
                         boxValid.style.left=blankLeft+'px';
                         boxBlank.style.left=blankLeft+'px';
                    }, 400);
                } else {
                    boxBlock.style.color='red';
                    boxBlock.textContent='验证失败';
                }
                isRun=false;
                clearInterval(timer);
            }
            boxBlock.onmousemove = null;
        }
        //定时器
        timer=setInterval(() => {
            time++;
        }, 1000);
    }

    update.onclick=function(){
        location.reload();
    }
    
    document.onselectstart=function(){
        return false;
    }
}


