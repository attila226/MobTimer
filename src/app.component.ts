import {Component, View} from 'angular2/core';
import {Timer} from './timer/timer';

@Component({
	selector: 'my-app'
})
@View({
  template: '<h1>This is the root</h1> <timer></timer>',
  directives: [Timer] 
})
export class AppComponent { 
    
}