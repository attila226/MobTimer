import {Component, View} from 'angular2/core';
import {Timer} from './timer/timer';
import {Moblist} from './moblist/moblist';
import {Interval} from './interval/interval';

@Component({
	selector: 'my-app'
})
@View({
  template: '<h1>This is the root</h1> <timer></timer><moblist></moblist><interval></interval>',
  directives: [Timer, Moblist, Interval] 
})
export class AppComponent { 
    
}