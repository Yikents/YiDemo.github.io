window.onload = function () {
    let cvs = document.getElementById('cvs');
    let lis = document.querySelectorAll('.box-header-Scolor>li')
    let clearBtn = document.querySelector('.box-clear-canvas');
    let colorContent = 'black';
    let boxEraser = document.querySelector('.box-eraser');
    let cl=document.querySelector('.cl');
    let judge = true;
    lis.forEach(items => {
        items.onclick = function () {
            colorContent = getComputedStyle(this).backgroundColor;
            cl.textContent=this.getAttribute('name');
        }
    })

    let cxt = cvs.getContext('2d');
    fn()
    function fn() {
        cvs.onmousedown = function (e) {
            let mouseX = e.offsetX;
            let mouseY = e.offsetY;

            cxt.moveTo(mouseX, mouseY);
            cxt.beginPath();
            this.onmousemove = function (event) {
                let X = event.offsetX;
                let Y = event.offsetY;
                cxt.lineTo(X, Y);
                cxt.strokeStyle = colorContent;
                cxt.stroke();

            }
        }
    }
    cvs.onmouseup = function () {
        this.onmousemove = null;
    }

    clearBtn.onmousedown = function () {
        cxt.clearRect(0, 0, 500, 400);
    }

    boxEraser.onclick = function () {
        if (judge) {
            
            boxEraser.textContent='取消橡皮擦'
            cvs.onmousedown = function () {

                this.onmousemove = function (evt) {
                    let currentX = evt.offsetX;
                    let currentY = evt.offsetY;
                    cxt.clearRect(currentX, currentY, 20, 20);
                }
            }
            clearBtn.onmousedown=null;
            judge = false;
        } else {
            boxEraser.textContent='橡皮擦'
            judge = true;
            cvs.onmousedown = null;
            cvs.onmousemove = null;
            clearBtn.onmousedown = function () {
                cxt.clearRect(0, 0, 500, 400);
                fn();
            }
            fn();
        }
    }





}