import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item/category-item.component';
import {CategoryService} from "./common/services/category.service";
import {ImageModule} from "../image/image.module";
import {RouterModule} from "@angular/router";
import { CategorySortPipe } from './common/pipes/category-sort.pipe';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryDescriptionComponent } from './category-description/category-description.component';
import {MatDividerModule} from "@angular/material/divider";
import {ReactiveFormsModule} from "@angular/forms";
import {ScreenUploaderModule} from "../screen-uploader/screen-uploader.module";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    CategoryItemComponent,
    CategorySortPipe,
    AddCategoryComponent,
    CategoryDescriptionComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
    RouterModule,
    MatDividerModule,
    ReactiveFormsModule,
    ScreenUploaderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    CategoryService
  ],
  exports: [
    CategoryItemComponent,
    CategorySortPipe,
    CategoryDescriptionComponent,
    AddCategoryComponent
  ]
})
export class CategoryModule { }
