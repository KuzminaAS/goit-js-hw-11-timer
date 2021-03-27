
class CountdownTimer {



  constructor({ selector, targetDate }) {
    
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;

    this.rootEl = document.querySelector(selector);

    this.refs = {
      fieldDays: this.rootEl.querySelector('span[data-value="days"]'),
      fieldHours: this.rootEl.querySelector('span[data-value="hours"]'),
      fieldMins: this.rootEl.querySelector('span[data-value="mins"]'),
      fieldSecs: this.rootEl.querySelector('span[data-value="secs"]'),
    }
  }

     start() {
       
       
  this.intervalId = setInterval(() => {
  const currenTime = Date.now();
  const deltaTime = this.targetDate - currenTime;
    const time = this.getTimeComponents(deltaTime);
    
    if (deltaTime <= 0) {
    
      this.stop();
      return;
  } 

  this.updateColors(time);
  }, 1000)
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
  
  
  updateColors ({ days, hours, mins, secs }) {
  this.refs.fieldDays.textContent = days;
  this.refs.fieldHours.textContent = hours;
  this.refs.fieldMins.textContent = mins;
  this.refs.fieldSecs.textContent = secs;
}
  
  stop() {
    clearInterval(this.intervalId);
  }


}
 
 const countTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 10, 2021'),
});
countTimer.start();



