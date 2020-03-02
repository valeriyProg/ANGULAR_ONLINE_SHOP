import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoAddComponent } from './promo-add/promo-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { PromoListComponent } from './promo-list/promo-list.component';
import {MatTableModule} from "@angular/material/table";
import {ButtonsModule} from "../../ui/buttons/buttons.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {PromoService} from "./common/services/promo.service";

@NgModule({
  declarations: [
    PromoAddComponent,
    PromoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ButtonsModule,
    MatPaginatorModule
  ],
  providers: [
    PromoService
  ],
  exports: [
    PromoAddComponent,
    PromoListComponent
  ]
})
export class PromoModule { }
