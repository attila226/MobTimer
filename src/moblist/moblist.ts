import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'moblist',
  templateUrl: './src/moblist/moblist.html',
  directives: [COMMON_DIRECTIVES]
})

export class Moblist {
    @Output() mobberSelected = new EventEmitter();
    @Output() mobberListSizeUpdated = new EventEmitter();
    @Input() selectedIndex: number;   
    mobberList: string[] = [];
                 
    add(mobber: any){
        this.mobberList.unshift(mobber.value);
        
        mobber.value = '';
        
        console.log(`Selected index before add ${this.selectedIndex}`);
        
        this.selectedIndex++;
        this.mobberListSizeUpdated.emit(this.mobberList.length);
        this.setCurrentMobber();
    }

    remove(idx: number) {
	   this.mobberList.splice(idx, 1); 
       
       this.selectedIndex--;
       this.mobberListSizeUpdated.emit(this.mobberList.length);
       this.setCurrentMobber();
    } 
    
    move(idx: number, step: number) {
        var tmp = this.mobberList[idx];
        this.mobberList[idx] = this.mobberList[idx - step];
        this.mobberList[idx - step] = tmp;
        
        this.setCurrentMobber();
    }
      
    setCurrentMobber(){
        console.log(`Mobber list selected index ${this.selectedIndex}`);
        
        if(this.mobberList.length > 0){
            this.mobberSelected.emit(this.mobberList[this.selectedIndex]);
        }
    }  
}