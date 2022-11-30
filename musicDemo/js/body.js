$(function () {
    $.ajax({
        type: 'get',
        url: 'https://apis.netstart.cn/music/personalized/newsong',
        success: function (res) {
            let dataResult = res.result;
            let temperObject = {};
            let freT = [];

            renderData(dataResult);

            function renderData(dataResult) {
                dataResult.forEach((elements, index) => {
                    temperObject[elements.id] = elements.picUrl;
                    let string = fn(elements);

                    let $div = $(`
                <div class="body-song-list-items">
                <div class="bsl-items-sequence">${index + 1}</div>
                <div class="bsl-items-content">
                    <div class="bsl-items-left">
                        <div class="bsl-items-songName">${elements.name}</div>
                        <div class="bsl-items-songer">${string}</div>
                    </div>
                    <div class="bsl-items-right">
                        <div class="click-player-songe" data-id="${elements.id}"></div>
                    </div>
                </div>
            </div>
                `);

                    $('.body-song-list').append($div);

                })


                $('.body-songer-image>.auto-img').attr("src", `${dataResult[0].picUrl}`);
                $('.create-berfore-img').css({
                    backgroundImage: `url(${dataResult[0].picUrl})`
                })
                $('.songer-inf-songName').text(`${dataResult[0].name}`);
                $('.songer-inf-songer').text(`${fn(dataResult[0])}`);
            }

            function fn(elements) {
                let arr = [];
                elements.song.artists.forEach(item => {
                    arr.push(item.name);
                })
                return arr.join(' / ');
            }

            clickPlayer();
            function clickPlayer() {
                let self = null;
                let judge = true;
                let judge1 = true;
                let countArr = [];
                $('.body-song-list').on({
                    click: function () {
                        let currentId = this.dataset.id;
                        let imageUrl = temperObject[currentId];
                        let currentSongName = $(this).parents('.bsl-items-content').find('.bsl-items-songName').text();
                        let currentSonger = $(this).parents('.bsl-items-content').find('.bsl-items-songer').text();
                        let playAudio = document.querySelector('.play-audio');
                        if (self != this) {
                            $('.play-audio').removeClass('data-ind');
                        }
                        let judgePlay = $('.play-audio').hasClass('data-ind');

                        $('.body-songer-image>.auto-img').attr("src", `${imageUrl}`);
                        $('.create-berfore-img').css({
                            backgroundImage: `url(${imageUrl})`
                        })
                        $('.songer-inf-songName').text(`${currentSongName}`);
                        $('.songer-inf-songer').text(`${currentSonger}`)
                        $('.footer-img').css({
                            backgroundImage: `url(${imageUrl})`
                        })

                        $('.flh-songName').text(`${currentSongName}`);
                        $('.flh-songer').text(`${currentSonger}`)
                        $('.footer-lists-song-text').empty();

                        $('.fcr-songWord-scroll').empty();
                        $('.fe3-container-right-songName').text(`${currentSongName}`)


                        $('.play-audio').attr('src', `https://music.163.com/song/media/outer/url?id=${currentId}.mp3`);
                        if (!judgePlay) {
                            playAudio.play();
                            judgePlay = $('.play-audio').addClass('data-ind');

                            $('.footer-player-center').css({
                                backgroundPosition: `0px -164px`
                            });
                            judge = false;
                            judge1 = false;

                        } else {
                            playAudio.pause();
                            judgePlay = $('.play-audio').removeClass('data-ind');

                            $('.footer-player-center').css({
                                backgroundPosition: `0px -203px`
                            });
                            judge = true;
                            judge1 = true;
                        }
                        self = this;


                        let currentindexs = $(this).parents('.body-song-list-items').find('.bsl-items-sequence').text();
                        let curd = null;
                        let rA1 = JSON.parse(localStorage.getItem('currentData'));
                        if (rA1) {
                            rA1.forEach(b => {
                                countArr.push(b.indexs);
                            })
                        }
                        if (countArr.indexOf(currentindexs) === -1) {
                            let objRun = {
                                currentSongName,
                                currentSonger,
                                indexs: currentindexs,
                                currentId
                            }
                            renderCollection(objRun)
                            countArr.push(currentindexs);
                            curd = currentindexs;

                            refreshData(objRun)
                        }



                        $('.fclm-items-Rlists').css('display', 'none');
                        $('.fclm-items-text').css('color', '#ccc');
                        $('.fclm-items-songName').css('color', '#ccc');
                        $('.fclm-items-duration').css('color', '#ccc');
                        $('.fclm-items').css('backgroundColor', '')
                        $(`.dur-${currentindexs}`).css('backgroundColor', 'black');
                        // $(`.dur-${currentindexs}`).find('.fclm-items-Rlists').css('display', 'flex');
                        $(`.dur-${currentindexs}`).find('.fclm-items-text').css('color', '#fff');
                        $(`.dur-${currentindexs}`).find('.fclm-items-songName').css('color', '#fff');
                        $(`.dur-${currentindexs}`).find('.fclm-items-duration').css('color', '#fff');
                        $('.fclm-items-player').css('backgroundImage', '');
                        $(`.dur-${currentindexs}`).find('.fclm-items-player').css({
                            backgroundImage: 'url(../image/playlist.png)'
                        })


                        dealProgressTime(curd);
                        dealSongWord(currentId);

                    }
                }, '.click-player-songe')


                $('.fe3-container-left-mainMeun').on({
                    click: function () {
                        $('.fclm-items-Rlists').css('display', 'none');
                        $('.fclm-items-text').css('color', '#ccc');
                        $('.fclm-items-songName').css('color', '#ccc');
                        $('.fclm-items-duration').css('color', '#ccc');
                        $('.fclm-items').css('backgroundColor', '')
                        $(this).css('backgroundColor', 'black');
                        $(this).find('.fclm-items-Rlists').css('display', 'flex');
                        $(this).find('.fclm-items-text').css('color', '#fff');
                        $(this).find('.fclm-items-songName').css('color', '#fff');
                        $(this).find('.fclm-items-duration').css('color', '#fff');
                        $('.fclm-items-player').css('backgroundImage', '');
                        $(this).find('.fclm-items-player').css({
                            backgroundImage: 'url(../image/playlist.png)'
                        })

                        let currentIds = this.dataset.ids;
                        let imageUrl1 = temperObject[currentIds];
                        let playAudio3 = document.querySelector('.play-audio');
                        $('.play-audio').attr('src', `https://music.163.com/song/media/outer/url?id=${currentIds}.mp3`);

                        playAudio3.play();
                        judgePlay = $('.play-audio').addClass('data-ind');

                        $('.footer-player-center').css({
                            backgroundPosition: `0px -164px`
                        });
                        judge = false;
                        judge1 = false;

                        $('.body-songer-image>.auto-img').attr("src", `${imageUrl1}`);
                        $('.create-berfore-img').css({
                            backgroundImage: `url(${imageUrl1})`
                        })
                        $('.footer-img').css({
                            backgroundImage: `url(${imageUrl1})`
                        })

                        let currentSongName1 = $(this).find('.fclm-items-text').text();
                        let currentSonger1 = $(this).find('.fclm-items-songName').text();
                        $('.flh-songName').text(`${currentSongName1}`);
                        $('.flh-songer').text(`${currentSonger1}`)
                        $('.footer-lists-song-text').empty();

                        $('.fcr-songWord-scroll').empty();
                        $('.fe3-container-right-songName').text(`${currentSongName1}`)

                        $('.songer-inf-songName').text(`${currentSongName1}`);
                        $('.songer-inf-songer').text(`${currentSonger1}`)

                        let curds = $(this).attr('name');
                        dealProgressTime(curds);
                        dealSongWord(currentIds);
                    }
                }, '.fclm-items')

                $('.fe3-container-left-header').on({
                    mousedown: function () {
                        $('.fclm-items').remove();
                        countArr = [];
                        localStorage.setItem('currentData', '[]');
                    }
                }, '.fe3-containerR-t2')

                $('.fe3-container-left-mainMeun').on({
                    mousedown: function () {
                        $(this).parents('.fclm-items').remove();
                        let N = $(this).parents('.fclm-items').attr('name');
                        let indexs1 = countArr.indexOf(N);
                        countArr.splice(indexs1, 1);

                        let DataA = JSON.parse(localStorage.getItem('currentData'));
                        if (DataA) {
                            let a = []
                            DataA.forEach(ite => {
                                a.push(ite.indexs)
                            })
                            DataA.splice(a.indexOf(N), 1);
                        }

                        let DataSt = JSON.stringify(DataA);
                        localStorage.setItem('currentData', DataSt);

                    }
                }, '.ct4-lay')


                $('.footer-player-center').on('click', function () {
                    let playAudio1 = document.querySelector('.play-audio');
                    if (judge) {
                        $('.footer-player-center').css({
                            backgroundPosition: `0px -164px`
                        })
                        playAudio1.play();
                        judge = false;
                        judge1 = false;
                    } else {
                        $('.footer-player-center').css({
                            backgroundPosition: `0px -203px`
                        })
                        playAudio1.pause();
                        judge = true;
                        judge1 = true;
                    }
                })

                $('.footer-player-center').on('mouseenter', function () {
                    if (judge1) {
                        $('.footer-player-center').css({

                            backgroundPosition: `-40px -203px`
                        })
                    } else {
                        $('.footer-player-center').css({

                            backgroundPosition: `-40px -164px`
                        })
                    }
                })
                $('.footer-player-center').on('mouseleave', function () {
                    if (judge1) {
                        $('.footer-player-center').css({

                            backgroundPosition: `0px -203px`
                        })
                    } else {
                        $('.footer-player-center').css({

                            backgroundPosition: `0px -164px`
                        })
                    }
                })

            }

            function dealProgressTime(value) {
                let playAudioElement = document.querySelector('.play-audio');
                value = value || '';
                playAudioElement.oncanplay = function () {
                    let sumTime = playAudioElement.duration;
                    let minute = parseInt(sumTime / 60);
                    let second = parseInt(sumTime % 60);
                    minute = minute >= 10 ? minute : '0' + minute;
                    second = second >= 10 ? second : '0' + second;
                    $('.all-time').find('span').eq(0).text(minute)
                    $('.all-time').find('span').eq(1).text(second)
                    $(`.dur-${value}`).find('.fclm-items-duration').find('span').eq(0).text(minute)
                    $(`.dur-${value}`).find('.fclm-items-duration').find('span').eq(1).text(second);
                    let o = {};
                    if (freT.length === 0) {
                        o[value] = [minute, second]
                        freT.push(o)
                    } else {
                        let d = [];
                        freT.forEach(c => {
                            d.push(c.value);
                        })

                        if (d.indexOf(value) === -1) {
                            o[value] = [minute, second]
                            freT.push(o)
                        }

                    }
                    let string1 = JSON.stringify(freT)
                    localStorage.setItem('times', string1);
                }
                playAudioElement.ontimeupdate = function () {
                    let footerLayerW = $('.scrollBottom').width();
                    let Ctime = playAudioElement.currentTime;
                    let progressWidth = footerLayerW * (Ctime / playAudioElement.duration);
                    let currleft = parseInt(progressWidth - $('.scrollCricle').width() / 2);
                    $('.scrollTop').css({
                        width: progressWidth + 'px'
                    })
                    $('.scrollCricle').css({
                        left: currleft + 'px'
                    })
                    let minute = parseInt(Ctime / 60);
                    let second = parseInt(Ctime % 60);
                    minute = minute >= 10 ? minute : '0' + minute;
                    second = second >= 10 ? second : '0' + second;
                    $('.progressTime').find('span').eq(0).text(minute)
                    $('.progressTime').find('span').eq(1).text(second)

                    let curTime = parseInt(playAudioElement.currentTime);
                    let jr = $('.fl-song-text-row').hasClass(`${curTime}`)

                    let jr1 = $('.fcr-songWord-text').hasClass(`fst${curTime}`)


                    if (jr) {
                        let moveTop = 0;
                        let cut = $(`.${curTime}`).index();
                        for (let i = 0; i < cut - 1; i++) {

                            moveTop += $('.fl-song-text-row').eq(i).outerHeight(true);
                        }
                        $('.footer-lists-song-text').css('top', `${-moveTop}px`);
                        $(`.${curTime}`).siblings().removeClass('changeWordColor')
                        $(`.${curTime}`).addClass('changeWordColor');
                    }


                    if (jr1) {
                        let moveTop1 = 0;
                        let cut1 = $(`.fst${curTime}`).index();
                        for (let i = 0; i < cut1 - 3; i++) {

                            moveTop1 += $('.fcr-songWord-text').eq(i).outerHeight(true);
                        }
                        $('.fcr-songWord-scroll').css('top', `${-moveTop1}px`);
                        $(`.fst${curTime}`).siblings().removeClass('changeWordColor1')
                        $(`.fst${curTime}`).addClass('changeWordColor1');
                    }


                }
            }

            moveAndDown()

            function moveAndDown() {
                let scrollBottom = document.querySelector('.scrollBottom');
                let playAudioElement2 = document.querySelector('.play-audio');
                $('.footer-layer').on('mousedown', function (event1) {
                    fun(event1);
                })
                $('.footer').on('mouseup', function () {
                    $('.footer').off('mousemove');
                })

                $('.scrollCricle').on('mousedown', function () {
                    $('.footer').on('mousemove', function (event2) {
                        fun(event2)
                    })
                })
                function fun(e) {
                    let mouseX = e.clientX;
                    let scrollBottomL = scrollBottom.offsetLeft;
                    let scrollCricleW = $('.scrollCricle').outerWidth();
                    let x = mouseX - scrollBottomL - scrollCricleW / 2;
                    let tx = mouseX - scrollBottomL;
                    let footerLayerW = $('.footer-layer').outerWidth();
                    let maxX = footerLayerW - scrollCricleW;
                    x = x >= maxX ? maxX : x <= 3 ? 0 : x;
                    tx = tx >= footerLayerW ? footerLayerW : tx < 0 ? 0 : tx;
                    playAudioElement2.currentTime = (tx / $('.scrollBottom').outerWidth()) * playAudioElement2.duration;
                    $('.scrollTop').css({
                        width: tx + 'px'
                    })
                    $('.scrollCricle').css({
                        left: x + 'px'
                    })
                }
            }

            function dealSongWord(valueId) {
                $.ajax({
                    type: 'get',
                    url: ' https://apis.netstart.cn/music/lyric',
                    data: {
                        id: valueId
                    },
                    success: function (result) {
                        let dataSongelrc = result.lrc.lyric;
                        let reg1 = /\[(.*)\]/g;
                        let reg2 = /\](.*)/g;
                        let songTimeArr = dataSongelrc.match(reg1);
                        let songWordArr = dataSongelrc.match(reg2);
                        let object = dealSongWordTimeAndText(songTimeArr, songWordArr);
                        for (let key in object) {
                            let $div = $(`
                            <div class="fl-song-text-row ${key}">${object[key]}</div>
                            `)
                            $('.footer-lists-song-text').append($div);

                            let $divex = $(`
                            <div class="fcr-songWord-text fst${key}">${object[key]}</div>
                            `)
                            $('.fcr-songWord-scroll').append($divex);
                        }



                    }
                })
            }

            function dealSongWordTimeAndText(value1, value2) {
                let object = {};
                value1.forEach((items, index) => {
                    if (value2[index].split(']')[1]) {
                        let a = items.match(/\[(.*)\]/)[1];
                        let t = parseInt(a.split(':')[0]) * 60 + parseInt(a.split(':')[1]);
                        let w = value2[index].replace(']', '');
                        object[t] = w;
                    }
                })
                return object;
            }

            function renderCollection(obj) {
                let $newDiv = $(`
                <div class="fclm-items dur-${obj.indexs}" name="${obj.indexs}" data-ids="${obj.currentId}">
                <div class="fclm-items-left">
                    <div class="fclm-items-player"></div>
                    <div class="fclm-items-text">${obj.currentSongName}</div>
                </div>

                <div class="fclm-items-right">
                    <div class="fclm-items-Rlists">
                        <div class="ctr ct1"></div>
                        <div class="ctr ct2"></div>
                        <div class="ctr ct3"></div>
                        <div class="ctr ct4"><div class="ct4-lay"></div></div>
                    </div>
                    <div class="fclm-items-songName">${obj.currentSonger}</div>
                    <div class="fclm-items-duration"><span></span>:<span></span></div>
                    <div class="fclm-items-conts"></div>
                </div>
            </div>
                `)

                $('.fe3-container-left-mainMeun').append($newDiv);


                $('.fclm-items-Rlists').css('display', 'none');
                $('.fclm-items-text').css('color', '#ccc');
                $('.fclm-items-songName').css('color', '#ccc');
                $('.fclm-items-duration').css('color', '#ccc');
                $('.fclm-items').css('backgroundColor', '')
                $($newDiv).css('backgroundColor', 'black');
                $($newDiv).find('.fclm-items-text').css('color', '#fff');
                $($newDiv).find('.fclm-items-songName').css('color', '#fff');
                $($newDiv).find('.fclm-items-duration').css('color', '#fff');
                $('.fclm-items-player').css('backgroundImage', '');
                $($newDiv).find('.fclm-items-player').css({
                    backgroundImage: 'url(../image/playlist.png)'
                })
            }

            function refreshData(result1) {
                let DataArr = JSON.parse(localStorage.getItem('currentData')) ?? [];
                if (DataArr.length === 0) {
                    DataArr.push(result1);
                } else {
                    let carr = [];
                    DataArr.forEach((item) => {
                        carr.push(item.indexs);
                    })
                    if (carr.indexOf(result1.indexs) === -1) {
                        DataArr.push(result1);
                    }
                }
                let DataStr = JSON.stringify(DataArr);
                localStorage.setItem('currentData', DataStr);
            }

            refreshStartRender()
            function refreshStartRender() {
                let rArr = JSON.parse(localStorage.getItem('currentData')) ?? [];
                rArr.forEach(it => {
                    renderCollection(it);
                })
                 CollTime();
            }

            window.onstorage = function () {
                refreshStartRender()
            }

           
            function CollTime(){
                let r1 = JSON.parse(localStorage.getItem('times')) ?? [];
                r1.forEach(it => {
                    let keys=Object.keys(it)[0];
                    $(`.dur-${keys}`).find('.fclm-items-duration').find('span').eq(0).text(it[keys][0])
                    $(`.dur-${keys}`).find('.fclm-items-duration').find('span').eq(1).text(it[keys][1])
                })
            }

        }

    })


    popClick()
    function popClick() {
        let isRun1 = true;
        $('.footer-ld1').on('click', function () {
            if (isRun1) {
                $('.footer-content-pop').show();
                isRun1 = false;
            } else {
                $('.footer-content-pop').hide();
                isRun1 = true;
            }
        })

        $('.close-btn').on('mousedown', () => {
            $('.footer-content-pop').hide();
            isRun1 = true;
        })
    }

})