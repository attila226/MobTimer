import {Component, View, OnInit, Input} from 'angular2/core';
import {Timer} from './timer/timer';
import {Moblist} from './moblist/moblist';
import {Interval} from './interval/interval';

@Component({
	selector: 'my-app',
    templateUrl: './src/app.html',
    directives: [Timer, Moblist, Interval] 
})

export class AppComponent  { 
    selectedInterval: number;
    
    constructor() { 
        this.selectedInterval = 5;
    }
    
    intervalUpdated(newInterval: number){
        console.log(`new interval is ${newInterval}`);
        
        //TODO: This is not yet updating in UI
        this.selectedInterval = newInterval;
    }
}