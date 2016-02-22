import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'interval',
  templateUrl: './src/interval/interval.html' 
})

export class Interval {
    @Output() selectEvent = new EventEmitter();
         
    intervals: number[];  
    selectedInterval: number;
    
    constructor() {
        this.intervals = [5,6,7,8,9,10,11,12,13,14,15];  
        this.selectedInterval = 5;
    }
    
    onIntervalSelected(newInterval: number){
        this.selectEvent.emit(newInterval);
    }
}