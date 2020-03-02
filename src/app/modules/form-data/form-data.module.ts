import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormDataService} from "./common/services/form-data.service";

@NgModule({
  declarations: [],
  providers: [
    FormDataService
  ],
  imports: [
    CommonModule
  ]
})
export class FormDataModule { }
