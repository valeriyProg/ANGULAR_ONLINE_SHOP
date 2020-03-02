import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageService} from "./common/services/image.service";
import { ServerImagePipe } from './common/pipes/server-image.pipe';

@NgModule({
  declarations: [ServerImagePipe],
  imports: [
    CommonModule
  ],
  exports: [
    ServerImagePipe
  ],
  providers: [
    ImageService
  ]
})
export class ImageModule { }
