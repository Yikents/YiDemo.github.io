$(function () {
    var ipt = document.querySelector('#ipt');
    var re = '湛江市';
    var timer = null;
    var date1 = getTime();
    // var object = {};
    ipt.oninput = function () {
        var seft = this;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            var val1 = $(seft).val();
            $('.lisc').remove();
            for (var key in province_list) {
                if (province_list[key] == val1||province_list[key].slice(0,2)==val1.slice(0.2)) {
                    for (var key1 in city_list) {
                        if (key1.slice(0, 2) == key.slice(0, 2)) {
                            var $li = $(`<li class="lisc">${city_list[key1]}</li>`);
                            $('.sc-lists').append($li);
                        }
                    }
                }
            }
            $('.sc-lists').on({
                click: function () {
                    re = $(this).text();
                    $('#ipt').val(re);
                    $ajax(re);
                    $('.lisc').remove();
                }
            }, '.lisc')
        }, 40);
    }

    $ajax(re);
    function $ajax(re) {
        // object = {};
        $.ajax({
            type: 'post',
            url: 'http://api.tianapi.com/tianqi/index',
            data: {
                key: '4fdc79ae0bbaedb36b1caee1d26b72c4',
                city: re
            },
            success: function (data) {
                var count = 0;
                data.newslist.forEach(function (elem, indexs) {
                    // console.log(elem.weatherimg);
                    if (String(elem.date) == date1) {
                        var temper = `${elem.lowest}~${elem.highest}`;
                        // console.log(temper);
                        var arr = [elem.vis, elem.wind + elem.windsc, elem.tips, elem.pop, elem.uv_index];
                        // console.log(arr);
                        var weather = elem.weatherimg;
                        // object['area'] = weather;
                        // console.log(weather)
                        $('.header-left-area').text(elem.area);
                        $('.header-right-time').text(elem.date);
                        $('.header-right-date').text(elem.week);
                        $('.blt1').text(elem.real);
                        $('.cdy').text(elem.weather);
                        $('.temrange').text(temper);
                        $('.body-lc-icon').html(`<img class="auto-img" src="./picture/cucumber/${weather}" alt="天气图片">`)
                        arr.forEach(function (v, index) {
                            $('.list-items-des').eq(index).text(v);
                        })
                        count = 1;
                    } else {
                        var string1 = dealTime(elem.date);
                        var temper1 = `${elem.lowest}~${elem.highest}`;
                        var weather1 = elem.weatherimg;
                        // object[indexs - count] = weather1;
                        $('.footer-icont').eq(indexs - count).html(`<img class="auto-img" src="./picture/cucumber/${weather1}" alt="天气图片">`);
                        $('.ft-top').eq(indexs - count).text(temper1);
                        $('.xing').eq(indexs - count).text(elem.week);
                        $('.yuefen').eq(indexs - count).text(string1);

                    }
                })
            }
        })
        // setTimeout(function(){
        //     // console.log(object);
        //     fn();
            
        // }, 400);
    }
    
    // function fn(){
    //     for(var key in object){
    //         console.log($('.footer-it').eq(key).find('.footer-icont'));
    //         if(key=='area'){
    //             $('.body-lc-icon').html(`<img class="auto-img" src="./picture/cucumber/${object[key]}" alt="天气图片">`)
    //         }else{
    //             $('.footer-it').eq(key).find('.footer-icont').html(`<img class="auto-img" src="./picture/cucumber/${object[key]}" alt="天气图片">`);
    //         }
    //     }
    // }

    function getTime() {
        var dataTime = new Date();
        var year = dataTime.getFullYear();
        var month = dataTime.getMonth() + 1;
        month = month >= 10 ? month : '0' + month;
        var day = dataTime.getDate();
        day = day >= 10 ? day : '0' + day;
        var string = `${year}-${month}-${day}`;
        return string;
    }

    function dealTime(data) {
        var dealDate = new Date(data);
        var m = dealDate.getMonth() + 1;
        var d = dealDate.getDate();
        var string = `(${m}/${d})`;
        return string;
    }
})