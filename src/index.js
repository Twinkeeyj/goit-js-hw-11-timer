const dayVal = document.querySelector('[data-value= "days"]');
const hoursVal = document.querySelector('[data-value="hours"]');
const minsVal = document.querySelector('[data-value="mins"]');
const secsVal = document.querySelector('[data-value="secs"]');
const timer = document.querySelector("#timer-1");

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timer = setInterval(() => {
    const time = this.targetDate - Date.now();
    this.updateClockface(time);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    dayVal.textContent = days;
    hoursVal.textContent = hours;
    minsVal.textContent = mins;
    secsVal.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2020"),
}); 