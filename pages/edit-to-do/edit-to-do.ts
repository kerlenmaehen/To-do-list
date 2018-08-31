import { List } from './../../models/list/list.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToDoListService } from './../../services/to-do-list/to-do-list.service';
import { ToastService } from './../../services/toast/toast.service';

/**
 * Generated class for the EditToDoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-to-do',
  templateUrl: 'edit-to-do.html',
})
export class EditToDoPage {

  list: List;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  private todol: ToDoListService,
  private toast: ToastService
  ) {
  }

  ionViewWillLoad() {
    this.list = this.navParams.get('list');
  }

  saveList(list: List) {
  	this.todol.editToDo(list)
  	.then(() => {
      this.toast.show(`${list.addtodo} saved!`);
  		this.navCtrl.setRoot('HomePage');
  	});
  }

  removeList(list: List) {
    this.todol.removeList(list)
    .then(() => {
      this.toast.show(`${list.addtodo} deleted!`);
      this.navCtrl.setRoot('HomePage');
    })
  }
}
