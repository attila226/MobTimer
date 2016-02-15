import {Component, View } from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'moblist',
  templateUrl: './src/moblist/moblist.html',
  directives: [COMMON_DIRECTIVES]
})

export class Moblist {
    list: string[] =  ['Bevis', 'Butthead', 'Jerkface'];    
    
    move(idx: number, step: number) {
        var tmp = this.list[idx];
        this.list[idx] = this.list[idx - step];
        this.list[idx - step] = tmp;
    }
  
    remove(idx: number) {
	   this.list.splice(idx, 1); 
    }   
}