import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategoryMenuService} from "../common/services/category-menu.service";
import CategoryMenuItemModel from "../common/models/category-menu-item.model";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit, OnDestroy {
  categoryMenu: Observable<CategoryMenuItemModel[]>;
  private subscriptions: Subscription[] = [];

  constructor(private http: HttpClient, private categoryService: CategoryMenuService) { }

  ngOnInit() {
    let subs = this.categoryService.onUploadList.subscribe(value=>{
      this.render();
    });
    this.subscriptions.push(subs);
    this.render();
  }

  render() {
    this.categoryMenu = this.categoryService.getMenu();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( value =>{
      value.unsubscribe();
    })
  }
}
