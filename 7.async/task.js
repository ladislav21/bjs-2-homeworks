class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if (this.alarmCollection.some((element) => element.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        
        this.alarmCollection.push({
            callback,
            time: time,
            canCall: true,
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((element) => element.time !== time)
    }

    getCurrentFormattedTime() {
        var currentTime = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return currentTime;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(this.alarmCollection.forEach((element) => {
            if(element.time === this.getCurrentFormattedTime() && element.canCall === true) {
                element.canCall = false;
                element.callback();
            }
        }), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((element) => element.canCall = true);
    } 

    clearAlarms() {
        this.intervalId = null;
        this.alarmCollection = [];
    }
}