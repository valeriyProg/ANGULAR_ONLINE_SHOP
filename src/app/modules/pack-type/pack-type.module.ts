import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackTypeAddComponent } from './pack-type-add/pack-type-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { PackTypeListComponent } from './pack-type-list/pack-type-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ButtonsModule} from "../../ui/buttons/buttons.module";

@NgModule({
  declarations: [
    PackTypeAddComponent,
    PackTypeListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ButtonsModule
  ],
  exports: [
    PackTypeAddComponent,
    PackTypeListComponent
  ]
})
export class PackTypeModule { }
