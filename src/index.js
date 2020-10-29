// const dayVal = document.querySelector('[data-value= "days"]');
// const hoursVal = document.querySelector('[data-value="hours"]');
// const minsVal = document.querySelector('[data-value="mins"]');
// const secsVal = document.querySelector('[data-value="secs"]');
// const timer = document.querySelector("#timer-1");

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }

//   timer = setInterval(() => {
//     const time = this.targetDate - Date.now();
//     this.updateClockface(time);
//   }, 1000);

//   updateClockface(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//     dayVal.textContent = days;
//     hoursVal.textContent = hours;
//     minsVal.textContent = mins;
//     secsVal.textContent = secs;
//   }

//   pad(value) {
//     return String(value).padStart(2, "0");
//   }
// }


// const timer  = new CountdownTimer({
//  selector: '#timer-1',
//  targetDate: new Date('October 29, 2020, 17:09:59'),
// });
// const timer2  = new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('January 17, 2021'),
//  });

// timer.start();
// timer2.start();


  
class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = this.getRefs();
  }

  start (){
  setInt = setInterval(() => {
    const deltaTime = this.targetDate - Date.now(); 
    if(deltaTime > 0) {
      return this.updateClock(deltaTime); 
    } else {
      this.stop();
    }
  }, 1000) 
  }

  stop(){
  clearInterval(setInt);
  }

  pad = function(val) {
  return String(val).padStart(2, '0');
  }

  updateClock (time) {
  const {spanDays, spanHours, spanMins, spanSecs} = this.refs;
  spanDays.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  spanHours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  spanMins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  spanSecs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));  
  }

  getRefs (){
  const timerContainer = document.querySelector(this.selector);
  const spanDays = timerContainer.querySelector('[data-value="days"]');
  const spanHours = timerContainer.querySelector('[data-value="hours"]');
  const spanMins = timerContainer.querySelector('[data-value="mins"]');
  const spanSecs = timerContainer.querySelector('[data-value="secs"]');  
  return {spanDays, spanHours, spanMins, spanSecs};
  }
}

const timer  = new CountdownTimer({
 selector: '#timer-1',
 targetDate: new Date('October 29, 2020, 17:09:59'),
});
const timer2  = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('January 17, 2021'),
 });

timer.start();
timer2.start();
