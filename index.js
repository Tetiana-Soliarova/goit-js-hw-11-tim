console.log('Привет, Мир!')
const refs = {
    //timersClock: document.querySelector(#timer - 1),
    timerDays: document.querySelector('span[data-value="days"]'),
    timerHours: document.querySelector('span[data-value="hours"]'),
    timerMins: document.querySelector('span[data-value="mins"]'),
    timerSeconds: document.querySelector('span[data-value="secs"]'),
}

class CountdownTimer {
    constructor({ selector, targetDate, onTick }) {
        this.selector = selector;
        //this.selector = document.querySelector('#timer-1') ;
        //this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
        this.onTick = onTick;
    }
    //Создаем запуск времени - старт. При запуске время должно считать с начала, сохранить текущее время

    start() {

        // const targetDate = Date.now();// стартовое время

        //dateTimes.targetDate = Date.now();
        setInterval(() => {


            const currentTime = Date.now(); //текущее время
            const deltaTime = this.targetDate - currentTime;
            // const time{ days, hours, mins, secs } = this.getTimeComponents(deltaTime);
            const time = this.getTimeComponents(deltaTime);

            //this.onTick(time);
            console.log(time);
            this.onTick(time);
            //console.log(`${days}:${hours}:${mins}:${secs}`);
        }, 1000);

    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }

}




//Принимает число приводит к строке добавляет знак спереди 0



const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2020'),
    onTick: updateClockface,
});

function updateClockface({ days, hours, mins, secs }) {
    refs.timerDays.textContent = `${days}`;
    refs.timerHours.textContent = `${hours}`;
    refs.timerMins.textContent = `${mins}`;
    refs.timerSeconds.textContent = `${secs}`;
}

timer.start();