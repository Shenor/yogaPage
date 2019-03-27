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


        //
        let message = {
            loading: 'Загрузка...',
            success: "Спасибо за заявку!",
            failure: "Что-то пошло не так"
        };

        let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        form.addEventListener('submit', function(event){
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();

             request.open('POST', 'server.php');   
             
             //При отправке данных стандартным форматом, удобен для PHP
             //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

             //При отправке данных с помощью JSON формата
             request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
             
             let formData = new FormData(form);
             
             //Преобразование FormData в JSON
             let obj = {};
             formData.forEach(function(value, key){
                obj[key] = value;
             });

             //Перевод обьекта в JSON
             let json = JSON.stringify(obj);

             //Замена тела запроса на JSON
             //request.send(formData);

             request.send(obj);   
             
             //Обработка событий ответа
             
             request.addEventListener('readystatechange', function(){
                 if(request.readyState < 4 ){
                    statusMessage.innerHTML = message.loading;
                 }else if (request.readyState = 4 && request.status == 200){
                    statusMessage.innerHTML = message.success;
                 }else{
                    statusMessage.innerHTML = message.failure; 
                 }
             });
        });

        //slider
        let slideIndex = 1,
            slides = document.querySelectorAll('.slider-item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrap = document.querySelector('.slider-dots'),
            dots = document.querySelectorAll('.dot');

            showSlides(slideIndex);

            function showSlides(n){
                if(n > slides.length){
                    slideIndex = 1;
                }
                if(n < 1){
                    slideIndex = slides.length
                }
    
                slides.forEach((item) => item.style.display = 'none');
                dots.forEach((item) => item.classList.remove('dot-active'));

                slides[slideIndex - 1].style.display = 'block';
                dots[slideIndex - 1].classList.add('dot-active');
            };
            
            function plusSlider(n){
                showSlides(slideIndex += n);
            };

            function currentSlider(n){
                showSlides(slideIndex = n);
            };
            

            prev.addEventListener('click', function(){
                plusSlider(-1);
            });

            next.addEventListener('click', function(){
                plusSlider(1);
            });

            dotsWrap.addEventListener('click', function(event){
                for(let i = 0; i < dots.length + 1; i++){
                    if (event.target.classList.contains('dot') && event.target == dots[i - 1]){
                        currentSlider(i);
                    } 
                }
            });
});