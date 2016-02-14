import {Component, View} from 'angular2/core';
import {Timer} from './timer/timer';
import {Moblist} from './moblist/moblist';
import {Interval} from './interval/interval';

@Component({
	selector: 'my-app',
    templateUrl: './src/app.html',
    directives: [Timer, Moblist, Interval] 
})

export class AppComponent { 
    
}