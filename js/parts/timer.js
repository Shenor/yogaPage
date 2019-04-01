function timer() {
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
}

module.exports = timer;