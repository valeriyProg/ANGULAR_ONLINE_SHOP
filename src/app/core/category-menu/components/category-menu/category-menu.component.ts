import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategoryMenuService} from "../../common/services/category-menu.service";
import CategoryMenuItemModel from "../../common/models/category-menu-item.model";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {
  categoryMenu: Observable<CategoryMenuItemModel[]>;

  constructor(private http: HttpClient, private categoryService: CategoryMenuService) { }

  ngOnInit() {
    this.categoryService.uploadListSubject.subscribe(value=>{
      this.render();
    });
    this.render();
  }

  render() {
    this.categoryMenu = this.categoryService.getMenu();
  }
}
