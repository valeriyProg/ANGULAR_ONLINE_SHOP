import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ListIconComponent } from './components/list-icon/list-icon.component';
import { AddItemBigIconComponent } from './components/add-item-big-icon/add-item-big-icon.component';
import { ReloadIconComponent } from './components/reload-icon/reload-icon.component';

@NgModule({
  declarations: [
    SvgIconComponent,
    ListIconComponent,
    AddItemBigIconComponent,
    ReloadIconComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgIconComponent,
    ListIconComponent,
    AddItemBigIconComponent,
    ReloadIconComponent
  ]
})
export class SvgIconModule { }
