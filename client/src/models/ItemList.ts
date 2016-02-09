import {Input, Output, EventEmitter} from 'angular2/core';
import {ItemsService, Item, AppStore} from '../items';

export default class ItemList {
	@Input() items: Item[];
	@Output() selected = new EventEmitter();
	@Output() deleted = new EventEmitter();

}