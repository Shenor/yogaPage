function calc () {
    let person = document.querySelectorAll('.counter-block-input')[0],
            day = document.querySelectorAll('.counter-block-input')[1],
            place = document.querySelector('#select')[0],
            totalValue = document.querySelector('#total'),
            personSum = 0,
            daySum = 0,
            total = 0;

            totalValue.textContent = 0;

            person.addEventListener('input', function(){
                personSum = +this.value;
               
                if(day.value == '' || personSum == '' || personSum == 0){
                    totalValue.textContent = 0;
                    total = 0;
                }else{
                    totalValue.textContent =  total;
                    total = (daySum + personSum) * 4000;
                }
            });

            day.addEventListener('input', function(){
                daySum = +this.value;
                //условие слайдера
                if(person.value == '' || daySum == 0 || daySum == ''){
                    totalValue.textContent = 0;
                    total = 0;
                }else{
                    total = (daySum + personSum) * 4000;
                    totalValue.textContent =  total;
                }
            });
}

module.exports = calc;