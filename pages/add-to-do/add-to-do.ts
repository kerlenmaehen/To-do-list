import { List } from './../../models/list/list.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToDoListService } from './../../services/to-do-list/to-do-list.service';
import { ToastService } from './../../services/toast/toast.service';

/**
 * Generated class for the AddToDoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-to-do',
  templateUrl: 'add-to-do.html',
})
export class AddToDoPage {

  list: List = {
  	addtodo: '',
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private todol: ToDoListService,
    private toast: ToastService
    ) {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddToDoPage');
  }

  addToDo(list: List) {
    this.todol.addToDo(list).then(ref => {
      this.toast.show(`${list.addtodo} added!`);
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }
}
