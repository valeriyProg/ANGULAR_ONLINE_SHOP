import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import CategoryDataModel from "../../../modules/category/common/models/category-data.model";
import {Observable} from "rxjs";
import {CategoryService} from "../../../modules/category/common/services/category.service";

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  categoryData: CategoryDataModel;
  categoryId:  string;
  categories: Observable<CategoryDataModel[]>;

  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(value => {
        if ( value.get('category')) {
          this.categoryId = value.get('category');
        }
        else {
          this.categoryId = '0';
        }
        this.categories = undefined;
        if (this.categoryId == '0') {
          this.categories = this.categoryService.list();
        }
        this.loadCategoryInfo();
      }
    );
  }

  private loadCategoryInfo() {
     this.categoryService.get(this.categoryId).subscribe(value => {
      this.categoryData = value;
    });
  }
}
