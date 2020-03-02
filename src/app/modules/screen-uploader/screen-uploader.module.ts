import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenUploaderComponent } from './screen-uploader/screen-uploader.component';
import {ScreenUploaderService} from "./common/services/screen-uploader.service";
import {ImageModule} from "../image/image.module";

@NgModule({
  declarations: [
    ScreenUploaderComponent
  ],
  providers: [
    ScreenUploaderService
  ],
  imports: [
    CommonModule,
    ImageModule
  ],
  exports: [
    ScreenUploaderComponent
  ]
})
export class ScreenUploaderModule { }
