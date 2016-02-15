import {Component} from 'angular2/core';

@Component({
  selector: 'moblist',
  templateUrl: './src/moblist/moblist.html'
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