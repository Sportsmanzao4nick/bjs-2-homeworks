class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }
    
    addClock(time, callback, id) {               
        if (!id) {
            throw new Error('error text');
        }
        if (this.alarmCollection.some(item => item.id === id)) {
            console.error("Идентификатор уже существует");
        } else { 
            this.alarmCollection.push({id, time, callback});
        }
    }

    removeClock(id) {
        const remove = this.alarmCollection.findIndex(removeId => removeId.id === id);
        if (remove >= 0) {
            this.alarmCollection.splice(remove, 1);
            return true;
        } else {
            return false;
        }  
    }

    getCurrentFormattedTime() {
        const currentDate = new Date (),
              hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`,
              minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`,
              currentTime = `${hours}:${minutes}`;
        return currentTime;
    }
    
    start() {
        const checkClock = (alarm) => {
            if (alarm.time == this.getCurrentFormattedTime()) {
                return alarm.callback();
            }
        }
            if (this.timerId == null) {
                this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 1000);
            }        
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => {
            console.log(`Будильник № ${item.id} сработает в ${item.time}`);
        })
    }

    clearAlarms(){
        clearInterval(this.timerId);
        this.timerId = null;
        this.alarmCollection = []; 
    }
}

function testCase() {
    const phoneAlarm = new AlarmClock();
    phoneAlarm.addClock("09:00", () => console.log('Пора вставать'), 1);
    phoneAlarm.addClock("09:01", () => { console.log('Давай, вставай уже'); phoneAlarm.removeClock(2)}, 2);
    phoneAlarm.addClock("09:01", () => console.log('Иди умываться!'));
    phoneAlarm.addClock("09:02", () => {
        console.log("Вставай, а то проспишь!");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
    phoneAlarm.addClock("09:05", () => console.log("Вставай, а то проспишь!"),1);
    phoneAlarm.printAlarms();
    phoneAlarm.start();
}

testCase();