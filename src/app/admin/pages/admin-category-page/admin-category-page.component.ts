import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../modules/category/common/services/category.service";
import {Observable} from "rxjs";
import CategoryDataModel from "../../../modules/category/common/models/category-data.model";

@Component({
  selector: 'app-admin-category-page',
  templateUrl: './admin-category-page.component.html',
  styleUrls: ['./admin-category-page.component.scss']
})
export class AdminCategoryPageComponent implements OnInit {
  categories: CategoryDataModel[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
   this.categoryService.list().subscribe(value => {
     this.categories = value;
   });
  }

  loadItems() {
    this.categoryService.list().subscribe(value => {
      this.categories = value;
    });
  }
}
