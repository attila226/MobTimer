import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'timer',
  templateUrl: './src/timer/timer.html'
})

export class Timer {
    @Output() onTimerReached = new EventEmitter();    
    @Input() min: number;
        
    timeInSeconds: number;
    isTimerRunning: boolean = false;
    timeOutput: string;
    buttonText: string = 'Play';
    buttonClass: string = 'glyphicon-play-circle';
    timeReached: boolean = false;
    intervalCounter: number = 0;
        
    constructor(){                    
        setInterval(() => {
            this.processTime();
            
            if(this.timeInSeconds > 0 && this.isTimerRunning && this.isMod10(this.intervalCounter)){
                this.timeInSeconds--;
            }    
            
            if(this.timeInSeconds === 0 && ! this.timeReached){
                this.timerReached();
            }
            
            this.intervalCounter++;
            
        }, 100);    
    }
    
    ngOnInit() {
        this.initTimer();
    }
    
    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        //Reset timer on min changes
        this.initTimer();
    }
    
    timerReached(){
        this.timeReached = true;
        
        this.playChime();
        this.timerNotification();
        
        this.onTimerReached.emit();      
        
        //Reset clock
        this.initTimer();
        this.toggle();
    }
    
    isMod10(num: number){
        return (num % 10 === 0);
    }
    
    playChime(){
        let chimeSound = new Audio("https://www.freesound.org/data/previews/22/22267_124239-lq.mp3");
        chimeSound.play();     
    }
    
    timerNotification(){
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                let notification = new Notification(`Time's up`);
            }
        });         
    }
    
    initTimer(){
        this.intervalCounter = 0;
        this.timeReached = false;
        this.timeInSeconds = this.min * 60;
        this.processTime();
    }
    
    processTime(){
        let minSec = this.getMinSec(this.timeInSeconds);  
        this.timeOutput = this.timeDisplayFormatting(minSec.min, minSec.sec);          
    }
    
    getMinSec(time){
        let min = Math.floor(time / 60);
        let sec = time - min * 60;     
        
        return {min, sec}; 
    }
    
    timeDisplayFormatting(min:number, sec:number){
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
        this.buttonClass = (this.isTimerRunning) ? 'glyphicon-pause' : 'glyphicon-play-circle';
    }
 }