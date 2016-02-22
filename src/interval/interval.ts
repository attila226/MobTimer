import {Component, View} from 'angular2/core';

@Component({
  selector: 'interval',
  templateUrl: './src/interval/interval.html' 
})

export class Interval { 
    intervals: number[] =  [5,6,7,8,9,10,11,12,13,14,15];  
    selectedInterval: number;
}