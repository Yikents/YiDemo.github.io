var hour=document.getElementsByClassName('countdown-hour')[0];
var minute=document.getElementsByClassName('countdown-minute')[0];
var second=document.getElementsByClassName('countdown-second')[0];
var inputTime=+new Date('2023-7-23 00:00:00');
var alltime=1;
// console.log(s);

var timer=setInterval(function(){
    if(alltime!=0){
        filterTime();
    }else{
        clearInterval(timer);
        hour.innerHTML='00';
        minute.innerHTML='00';
        second.innerHTML='00';
    }
},1000)

function filterTime(){
    var currentTime=+new Date();
    alltime=parseInt((inputTime-currentTime)/1000);
    
    var h=parseInt(alltime/60/60%24);
    h=h<10? '0'+ h : h;
    
    var m=parseInt(alltime/60%60);
    m=m<10? '0'+ m : m;
    
    var s=parseInt(alltime%60);
    s=s<10? '0'+ s : s;
    
    // console.log(s);

    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s;
    
}