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
    selectedMobberIndex: number = 0;
    mobberListSize: number = 0;
    selectedMobber: string;
    next: boolean = false;
    prev: boolean = false;
    
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
        
    mobberListSizeUpdated(listSize: number){
        this.mobberListSize = listSize;
        console.log(`Mobber list size ${this.mobberListSize}`);
    }
    
    nextMobber(direction: number){
        //If new number > list size, move to 0
        if((this.selectedMobberIndex + direction) >= this.mobberListSize){
            this.selectedMobberIndex = 0;
        //If new number < 0 move to end
        }else if((this.selectedMobberIndex + direction) < 0 ){
            this.selectedMobberIndex = this.mobberListSize;
        }
        else{
             this.selectedMobberIndex = this.selectedMobberIndex + direction;
        }
        
        console.log(this.selectedMobberIndex);
    }
    
    rotate(){
        console.log('Time to rotate!!!');
        this.next = true;
    }
}