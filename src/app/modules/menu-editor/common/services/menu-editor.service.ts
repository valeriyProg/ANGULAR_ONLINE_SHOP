import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import CategoryMenuItemModel from "../../../../core/category-menu/common/models/category-menu-item.model";
import CategorySubMenuModel from "../../../../core/category-menu/common/models/category-sub-menu.model";

@Injectable()
export class MenuEditorService {
  //TODO: SPLIT FUNCTIONAL ON FEW SERVICES
  dataLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  changeItem: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  openSubmenuEditForm: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  menuData: CategoryMenuItemModel[];
  tempSubmenu: CategorySubMenuModel;
  selectedItemIndex: number = 0;
  selectedItemSubmenuIndex: number = 0;
  isSubmenuExist: boolean = false;
  isEditorContainerExpanded: boolean = true;
  isSubmenuListPanelExpanded: boolean = false;
  isSubmenuItemEditFormExpanded: boolean =false;
  constructor() { }

  showMenuEditForm(selectedItemIndex: number): void {
    if (selectedItemIndex === this.selectedItemIndex) {
      this.isEditorContainerExpanded = !this.isEditorContainerExpanded;
      return;
    }
    if (this.isSubmenuItemEditFormExpanded || this.isEditorContainerExpanded || this.isSubmenuListPanelExpanded) {
      this.hideMenuEditForm();
      this.hideAllTabs();
    }
    setTimeout(()=> {
      this.selectedItemIndex = selectedItemIndex;
      this.isEditorContainerExpanded = true;
      this.changeItem.next(true);
    },510);
  }

  hideMenuEditForm(): void {
    this.isEditorContainerExpanded = false;
  }

  showSubmenuEditForm(index: number) {
    this.selectedItemSubmenuIndex = index;
    this.isSubmenuItemEditFormExpanded = true;
    this.hideSubmenuListPanel();
  }

  hideSubmenuEditForm() {
    this.isSubmenuItemEditFormExpanded = false;
  }

  hideAllTabs() {
    this.hideSubmenuEditForm();
    this.hideSubmenuListPanel();
    this.hideMenuEditForm();
  }

  showSubmenuListPanel() {
    this.isSubmenuListPanelExpanded = true;
  }

  hideSubmenuListPanel() {
    this.isSubmenuListPanelExpanded = false;
  }

  addMenuItem(e: Event) {
    e.preventDefault();
    this.menuData.push({
      id: 'test-id',
      name: { title: 'Click to configuration', link: 'default-item'},
      icon: '',
      submenu: []
    });
  }

  initTempSubMenu() {
    this.tempSubmenu = {
      title: this.menuData[this.selectedItemIndex].submenu[this.selectedItemSubmenuIndex].title,
      type: `${this.menuData[this.selectedItemIndex].submenu[this.selectedItemSubmenuIndex].type}`,
      icon: `${this.menuData[this.selectedItemIndex].submenu[this.selectedItemSubmenuIndex].icon}`,
      categoryId: `${this.menuData[this.selectedItemIndex].submenu[this.selectedItemSubmenuIndex].categoryId}`,
      items: []
    };
    this.menuData[this.selectedItemIndex].submenu[this.selectedItemSubmenuIndex].items.forEach(item => {
      this.tempSubmenu.items.push(item);
    });
  }

  addSubmenuItem(e: Event) {
    e.preventDefault();
    this.hideSubmenuListPanel();
    this.menuData[this.selectedItemIndex].submenu.push({
      title: { title: '', link: ''},
      type: '',
      icon: '',
      categoryId: '',
      items: []
    });
  }

  deleteMenuElement(index: number): void {
    this.menuData.splice(index, 1);
    if (index < this.selectedItemIndex) {
      --this.selectedItemIndex;
      return;
    }
    if (index === this.selectedItemIndex) {
      this.hideAllTabs();
      return;
    }
  }

  deleteSubmenuElement(index: number): void {
    this.menuData[this.selectedItemIndex].submenu.splice(index, 1);
  }
}
