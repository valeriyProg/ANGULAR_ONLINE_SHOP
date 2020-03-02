import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandAddComponent } from './brand-add/brand-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { BrandListComponent } from './brand-list/brand-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ButtonsModule} from "../../ui/buttons/buttons.module";

@NgModule({
  declarations: [
    BrandAddComponent,
    BrandListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    ButtonsModule
  ],
  exports: [
    BrandAddComponent,
    BrandListComponent
  ]
})
export class BrandModule { }
