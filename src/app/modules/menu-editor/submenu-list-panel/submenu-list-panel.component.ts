import { Component, OnInit } from '@angular/core';
import {MenuEditorService} from "../common/services/menu-editor.service";
import CategoryMenuItemModel from "../../../core/category-menu/common/models/category-menu-item.model";

@Component({
  selector: 'app-submenu-list-panel',
  templateUrl: './submenu-list-panel.component.html',
  styleUrls: ['./submenu-list-panel.component.scss']
})
export class SubmenuListPanelComponent implements OnInit {
  menuData: CategoryMenuItemModel[];

  constructor(private menuEditorService: MenuEditorService) { }

  ngOnInit() {
    this.menuEditorService.dataLoaded.subscribe(state=> {
      if (state) {
        this.menuData = this.menuEditorService.menuData;
      }
    });
  }

  showSubmenuEditForm(e: Event, index:number): void {
    e.preventDefault();
    this.menuEditorService.showSubmenuEditForm(index);
    this.menuEditorService.openSubmenuEditForm.next(true);
  }
}
