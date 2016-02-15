import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'moblist',
  templateUrl: './src/moblist/moblist.html',
  directives: [COMMON_DIRECTIVES]
})

export class Moblist {
    mobberList: string[] = [];   
    
    add(mobber: any){
        this.mobberList.push(mobber.value);
        
        mobber.value = '';
    }
    
    move(idx: number, step: number) {
        var tmp = this.mobberList[idx];
        this.mobberList[idx] = this.mobberList[idx - step];
        this.mobberList[idx - step] = tmp;
    }
  
    remove(idx: number) {
	   this.mobberList.splice(idx, 1); 
    }   
}