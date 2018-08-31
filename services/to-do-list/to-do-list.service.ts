import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { List } from './../../models/list/list.model';

@Injectable()
export class ToDoListService {

	private toDoListRef = this.db.list<List>('todolist');

	constructor(private db: AngularFireDatabase) {
	
	}

	getToDoList() {
		return this.toDoListRef;
	}
	
	addToDo(list: List) {
		return this.toDoListRef.push(list);
	}

	editToDo(list: List) {
		return this.toDoListRef.update(list.key, list);
	}

	removeToDo(list: List) {
		return this.toDoListRef.remove(list.key)
	}
}