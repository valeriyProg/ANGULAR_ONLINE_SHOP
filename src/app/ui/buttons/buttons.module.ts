import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemBtnComponent } from './add-item-btn/add-item-btn.component';
import { DeleteItemBtnComponent } from './delete-item-btn/delete-item-btn.component';
import { EditItemBtnComponent } from './edit-item-btn/edit-item-btn.component';

@NgModule({
  declarations: [
    AddItemBtnComponent,
    DeleteItemBtnComponent,
    EditItemBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddItemBtnComponent,
    DeleteItemBtnComponent,
    EditItemBtnComponent
  ]
})
export class ButtonsModule { }
