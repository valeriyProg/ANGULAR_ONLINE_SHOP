import { Component, OnInit } from '@angular/core';
import {MenuEditorService} from "../common/services/menu-editor.service";
import CategoryMenuItemModel from "../../../core/category-menu/common/models/category-menu-item.model";
import {CategoryMenuService} from "../../../core/category-menu/common/services/category-menu.service";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menuData: CategoryMenuItemModel[] = [];

  constructor(private menuEditorService: MenuEditorService,
              private categoryService: CategoryMenuService) { }

  ngOnInit() {
    this.categoryService.getMenu().subscribe( item => {
      this.menuEditorService.menuData = item;
      this.menuData = this.menuEditorService.menuData;
      this.menuEditorService.onDataLoaded.next(true);
    });
  }
}
