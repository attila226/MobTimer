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
    selectedTimeInterval: number;
    selectedMobberIndex: number = -1;
    mobberListSize: number = 0;
    selectedMobber: string;

    constructor() { 
        this.selectedTimeInterval = 5;
        this.selectedMobber = '';
    }

    intervalUpdated(newInterval: number){                        
        this.selectedTimeInterval = newInterval;
    }
    
    currentMobberUpdated(selectedMobber: string){
        this.selectedMobber = selectedMobber;
    }
}