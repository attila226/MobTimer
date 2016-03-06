import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'moblist',
  templateUrl: './src/moblist/moblist.html',
  directives: [COMMON_DIRECTIVES]
})

export class Moblist {
    @Output() mobberSelected = new EventEmitter();
    mobberList: string[] = [];
    selectedIndex: number = -1;   
            
    add(mobber: any){
        this.mobberList.push(mobber.value);
        
        mobber.value = '';
        
        //By default we make the first person added the selected mobber
        if(this.selectedIndex === -1){
            this.selectedIndex = 0;
        }
        
        this.setCurrentMobber();
    }
    
    remove(idx: number) {
	   this.mobberList.splice(idx, 1); 
       
       //If we remove the selected person ... then we should move on to the next mobber
       if(idx === this.selectedIndex){
           this.next();
       } 
       //If we remove someone from the list that is above the selected person, we have to decrement the selectedIndex
       else if(idx < this.selectedIndex){
           this.selectedIndex--;
       }
       
       this.setCurrentMobber();
    } 
    
    move(idx: number, step: number) {
        var tmp = this.mobberList[idx];
        this.mobberList[idx] = this.mobberList[idx - step];
        this.mobberList[idx - step] = tmp;
        
        this.setCurrentMobber();
    }
      
    next(){
        let isEmpty: boolean = (this.mobberList.length === 0) ? true : false;
        
        //Do nothing when the list is empty
        if(isEmpty){
            return;
        }
        
        //When at the end of the list, move to the front
        if(this.selectedIndex === (this.mobberList.length -1)){
            this.selectedIndex = 0;
        }
        //Otherwise increase selectedIndex
        else {
            this.selectedIndex++;
        }    
        
        this.setCurrentMobber();           
    }
    
    setCurrentMobber(){
        if(this.mobberList.length > 0){
            this.mobberSelected.emit(this.mobberList[this.selectedIndex]);
        }
    }  
}