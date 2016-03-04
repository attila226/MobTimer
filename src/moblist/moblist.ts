import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'moblist',
  templateUrl: './src/moblist/moblist.html',
  directives: [COMMON_DIRECTIVES]
})

export class Moblist {
    @Output() mobberSelected = new EventEmitter();
    @Input() rotateMobber: boolean;
    mobberList: string[] = [];   
    
    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        //If we need to change the mobber then rotate
    }
        
    add(mobber: any){
        this.mobberList.unshift(mobber.value);
        
        mobber.value = '';
        
        this.setCurrentMobber();
    }
    
    move(idx: number, step: number) {
        var tmp = this.mobberList[idx];
        this.mobberList[idx] = this.mobberList[idx - step];
        this.mobberList[idx - step] = tmp;
        
        this.setCurrentMobber();
    }
  
    remove(idx: number) {
	   this.mobberList.splice(idx, 1); 
       
       this.setCurrentMobber();
    } 
    
    setCurrentMobber(){
        if(this.mobberList.length > 0){
            this.mobberSelected.emit(this.mobberList[0]);
        }
    }  
}