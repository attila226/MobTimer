import {Component, View} from 'angular2/core';

@Component({
  selector: 'timer',
  templateUrl: './src/timer/timer.html' 
})

export class Timer {
    time: number = 300;
    isTimerRunning: boolean = false;
    timeOutput: string;
    buttonText: string = 'Play';
    
    constructor(){      
        this.setTime(this.time);
          
        setInterval(() => {
            this.setTime(this.time);
            
            if(this.time > 0 && this.isTimerRunning){
                this.time--;
            }    
        }, 1000);    
    }
    
    setTime(time){
        let min = Math.floor(time / 60);
        let sec = time - min * 60;     
        
        this.timeOutput = this.formatTime(min, sec);  
    }
    
    formatTime(min:number, sec:number){
        let minPadding: string = '';
        let secPadding: string = '';
        
        if(min < 10){
            minPadding = '0';
        }
        
        if(sec < 10){
            secPadding = '0';
        }
        
        return `${minPadding}${min} : ${secPadding}${sec}`;
    }
           
    toggle(){
        this.isTimerRunning = ! (this.isTimerRunning);
        
        this.buttonText = (this.isTimerRunning) ? 'Pause' : 'Play';
    }
 }