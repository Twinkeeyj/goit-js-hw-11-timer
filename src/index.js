class CountdownTimer {
  constructor({selector,targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timer = this.getRefs()
  }

getRefs() {
const timer = document.querySelector(this.selector);
const day = timer.querySelector('[data-value="days"]');
const hours = timer.querySelector('[data-value="hours"]');
const mins = timer.querySelector('[data-value="mins"]');
const secs = timer.querySelector('[data-value="secs"]');
return {day,hours,mins,secs}
  }
  setInt = setInterval(() => {
    const time = this.targetDate - Date.now(); 
    time < 0?clearInterval(this.setInt):this.updateHours(time);
  }, 1000)

  updateHours(time) {
    const { day, hours, mins, secs} = this.timer;
    day.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))  );
    mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  }

   pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2020"),
});

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Oct 30, 2020"),
});

