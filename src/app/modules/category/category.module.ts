import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item/category-item.component';
import {CategoryService} from "./common/services/category.service";
import {ImageModule} from "../image/image.module";
import {RouterModule} from "@angular/router";
import { CategorySortPipe } from './common/pipes/category-sort.pipe';

@NgModule({
  declarations: [
    CategoryItemComponent,
    CategorySortPipe
  ],
  imports: [
    CommonModule,
    ImageModule,
    RouterModule
  ],
  providers: [
    CategoryService
  ],
  exports: [
    CategoryItemComponent,
    CategorySortPipe
  ]
})
export class CategoryModule { }
