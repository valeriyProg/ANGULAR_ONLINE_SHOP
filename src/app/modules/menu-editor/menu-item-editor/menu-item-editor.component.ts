import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MenuEditorService} from "../common/services/menu-editor.service";

@Component({
  selector: 'app-menu-item-editor',
  templateUrl: './menu-item-editor.component.html',
  styleUrls: ['./menu-item-editor.component.scss']
})
export class MenuItemEditorComponent implements OnInit {
  menuItemForm: FormGroup;
  constructor(private fb: FormBuilder, private menuEditorService: MenuEditorService) { }

  ngOnInit() {
    this.menuEditorService.dataLoaded.subscribe(state=> {
      if (state) {
        this.initForm();
      }
    });
    this.menuEditorService.changeItem.subscribe(state=> {
      if (state) {
        this.initForm();
      }
    });
  }

  initForm(): void {
    const menuData = this.menuEditorService.menuData;
    this.menuItemForm = this.fb.group({
      title: `${menuData[this.menuEditorService.selectedItemIndex].name.title}`,
      link: `${menuData[this.menuEditorService.selectedItemIndex].name.link}`,
      icon: `${menuData[this.menuEditorService.selectedItemIndex].icon}`,
      submenu: menuData[this.menuEditorService.selectedItemIndex].submenu.length > 0
    });
    this.menuEditorService.isSubmenuExist = this.isSubmenuExist;
    this.menuEditorService.isSubmenuListPanelExpanded = this.isSubmenuExist;
  }

  get isSubmenuExist(): boolean {
    return this.menuItemForm.get('submenu').value;
  }

  submit(): void {
    const index = this.menuEditorService.selectedItemIndex;
    this.menuEditorService.menuData[index].name.title = this.menuItemForm.get('title').value;
    this.menuEditorService.menuData[index].name.link = this.menuItemForm.get('link').value;
    this.menuEditorService.menuData[index].icon = this.menuItemForm.get('icon').value;
    if (!this.menuItemForm.get('submenu').value) {
      this.menuEditorService.menuData[index].submenu = [];
    }
    this.menuEditorService.hideAllTabs();
  }

  cancel(): void {
    this.menuEditorService.hideAllTabs();
  }

  toggleSubmenu(): void {
    if (!this.isSubmenuExist) {
      this.menuEditorService.isSubmenuExist = false;
      this.menuEditorService.isSubmenuListPanelExpanded = false;
      return;
    }
    this.menuEditorService.isSubmenuExist = true;
    this.menuEditorService.isSubmenuListPanelExpanded = true;
  }
}
