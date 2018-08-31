import { List } from './../../models/list/list.model';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ToDoListService } from './../../services/to-do-list/to-do-list.service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toDoList$: Observable<List[]>;
  
  constructor(
  public navCtrl: NavController, 
  private todol: ToDoListService,
  ) {
  	this.toDoList$ = this.todol
  	.getToDoList()
  	.snapshotChanges()
  	.map(
  	changes => {
  		return changes.map(c => ({
  			key: c.payload.key, 
  			...c.payload.val(),
  		}));
  	});
  }
}
