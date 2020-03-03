import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import {CategoryMenuService} from "./common/services/category-menu.service";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CategoryMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    CategoryMenuService
  ],
  exports: [
    CategoryMenuComponent
  ]
})
export class CategoryMenuModule { }
