
class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intrvalID = null;
    }

    getRefs = () => {
        const container = document.querySelector(this.selector);
        const days = container.querySelector('[data-value="days"]');
        const hours = container.querySelector('[data-value="hours"]');
        const mins = container.querySelector('[data-value="mins"]');
        const secs = container.querySelector('[data-value="secs"]');
        // const startBtn = container.querySelector('[data-value="start"]');
        // const stopBtn = container.querySelector('[data-value="stop"]');
        return {container, days, hours, mins, secs };
    }

    updateTimer({ container, days, hours, mins, secs}) {
        const time = this.targetDate - Date.now();
        
        if (time < 0) {
            this.stop(container);
            return
        }
        days.textContent = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        secs.textContent = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');
    };

    start() {
        this.intrvalID = setInterval(() => {
            this.updateTimer(this.getRefs())
        }, 1000)
    };

    stop() {
        clearInterval(this.intrvalID);
        // this.getRefs().container.innerHTML = '<h1>Время вышло!<h1>';

    };

    // addListenners({ startBtn, stopBtn }) {
    //     startBtn.addEventListener('click', this.start.bind(this));
    //     stopBtn.addEventListener('click', this.stop.bind(this));
    // }
};


const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 18, 2021 23:07'),    
});

timer.start(timer.getRefs());
