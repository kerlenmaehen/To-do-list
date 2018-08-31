import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditToDoPage } from './edit-to-do';

@NgModule({
  declarations: [
    EditToDoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditToDoPage),
  ],
})
export class EditToDoPageModule {}
