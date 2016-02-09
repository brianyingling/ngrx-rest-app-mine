import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Item} from '../models/Item';
import {Store} from '@ngrx/store';

export class ItemsService {
	items: Observable<Array<Item>>;
	constructor(private store: Store<AppStore>) {
		this.items = store.select('items');
	}
}