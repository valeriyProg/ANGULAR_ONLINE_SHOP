import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChocolateTypeAddComponent } from './chocolate-type-add/chocolate-type-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import { ChocolateTypeListComponent } from './chocolate-type-list/chocolate-type-list.component';
import {MatTableModule} from "@angular/material/table";
import {ButtonsModule} from "../../ui/buttons/buttons.module";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    ChocolateTypeAddComponent,
    ChocolateTypeListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatTableModule,
    ButtonsModule,
    MatPaginatorModule
  ],
  exports: [
    ChocolateTypeAddComponent,
    ChocolateTypeListComponent
  ]
})
export class ChocolateTypeModule { }
