function modal(){
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

}

module.exports = modal;