let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');


window.addEventListener('DOMContentLoaded', function () {
    'use strict'

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    console.log(info);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function () {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2019-3-27';

    function getTimeRemaning(entime){
        let t = Date.parse(entime) - Date.parse(new Date()),
        seconds = new Date(t).getSeconds(),
        minutes = new Date(t).getMinutes(),
        hours = new Date(t).getHours();

        return {
            'total': t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }


    function setClock(id, entime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(update, 1000);

            function update(){
                let t = getTimeRemaning(entime);

                t.hours.toString().length == 1? hours.textContent = '0' + t.hours : hours.textContent = t.hours;
                t.minutes.toString().length == 1? minutes.textContent = '0' + t.minutes : minutes.textContent = t.minutes;
                t.seconds.toString().length == 1? seconds.textContent = '0' + t.seconds : seconds.textContent = t.seconds;

                if (t.total <= 0){
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }

    }
    setClock('timer', deadline);

    // Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptBtn = document.querySelectorAll('.description-btn');

        more.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });

        //Вызов функции модального окна для каждой функции

        descriptBtn.forEach(function(item){
            item.addEventListener('click', function(){
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });
        });

        //добавление нового дива через классы
        let mainBlock = document.querySelector('.main-block');
        class Options{
                constructor(height, width, bg, fontSize, color){
                    this.height = height;
                    this.width = width;
                    this.bg = bg;
                    this.fontSize = fontSize;
                    this.color = color;
                    this.textAlign = 'center';
                }
                createDiv(){
                    let elem = document.createElement('div'),
                        param = `height:${this.height}px;width:${this.width}px;background-color:${this.bg};font-size:${this.fontSize};text-align:${this.textAlign};color:${this.color};`;
                     
                        mainBlock.appendChild(elem);
                        elem.style.cssText = param;

                }
        }
        let item = new Options(300, 350, "red", 14, "black"); 
        item.createDiv();
});