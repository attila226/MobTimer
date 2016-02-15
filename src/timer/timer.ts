import {Component, View} from 'angular2/core';

@Component({
  selector: 'timer',
  templateUrl: './src/timer/timer.html' 
})

export class Timer {
    time: number = 300;
    isTimerRunning: boolean = true;
    min: number;
    sec: number;
    
    constructor(){      
        this.setTime(this.time);
          
        setInterval(() => {
            this.setTime(this.time);
            
            //Not the THIS that we're looking for
            if(this.time > 0 && this.isTimerRunning){
                this.time--;
            }    
        }, 1000);    
    }
    
    setTime(time){
        this.min = Math.floor(time / 60);
        this.sec = time - this.min * 60;       
    }
           
    toggle(){
        this.isTimerRunning = ! (this.isTimerRunning);
    }
 }