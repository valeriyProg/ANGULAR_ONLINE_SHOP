import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListComponent } from './image-list/image-list.component';
import {ImageModule} from "../../modules/image/image.module";

@NgModule({
  declarations: [
    ImageListComponent
  ],
  imports: [
    CommonModule,
    ImageModule
  ],
  exports: [
    ImageListComponent
  ]
})
export class ImageListModule { }
