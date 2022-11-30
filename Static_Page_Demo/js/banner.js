var blackTop=document.getElementsByClassName('flc-box')[4];
var header=document.getElementsByClassName('box-header')[0];
var val=true;
// console.log(header.offsetTop);

// 返回顶部
blackTop.onclick=function(){
    document.documentElement.scrollTop=0;
}

// 页面滚动式出现菜单栏
document.addEventListener('scroll',appear);

function appear(){
    if(document.documentElement.scrollTop>=487){
        header.classList.add('ative-head')
    }else{
        header.classList.remove('ative-head')
    }
    // console.log(document.documentElement.scrollTop);

}
