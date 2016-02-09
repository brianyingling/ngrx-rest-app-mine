import {
	Component,
	Input,
	Output,
	EventEmitter,
	ChangeDetectionStrategy
} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import ItemListComponent from './components/ItemListComponent';
import ItemDetailComponent from './components/ItemDetailComponent';

@Component({
	selector: 'my-app';
	
})
export class App {}
