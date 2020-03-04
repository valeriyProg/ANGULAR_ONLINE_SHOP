import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MenuEditorService} from "../common/services/menu-editor.service";
import {Observable, Subscription} from "rxjs";
import CategoryDataModel from "../../category/common/models/category-data.model";
import {CategoryService} from "../../category/common/services/category.service";

@Component({
  selector: 'app-menu-item-editor',
  templateUrl: './menu-item-editor.component.html',
  styleUrls: ['./menu-item-editor.component.scss']
})
export class MenuItemEditorComponent implements OnInit, OnDestroy {
  menuItemForm: FormGroup;
  private subscriptions: Subscription[] = [];
  categories: Observable<CategoryDataModel[]>;

  constructor(private fb: FormBuilder,
              private menuEditorService: MenuEditorService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.list();
    let loadedSubs = this.menuEditorService.onDataLoaded.subscribe(state=> {
      if (state) {
        this.initForm();
      }
    });

    let changeSubs = this.menuEditorService.onChangeItem.subscribe(state=> {
      if (state) {
        this.initForm();
      }
    });

    this.subscriptions.push(loadedSubs);
    this.subscriptions.push(changeSubs);
  }

  initForm(): void {
    const menuData = this.menuEditorService.menuData;
    this.menuItemForm = this.fb.group({
      title: `${menuData[this.menuEditorService.selectedItemIndex].name.title}`,
      link: `${menuData[this.menuEditorService.selectedItemIndex].name.link}`,
      icon: `${menuData[this.menuEditorService.selectedItemIndex].icon}`,
      category: menuData[this.menuEditorService.selectedItemIndex].name.params['category'] || 0,
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
    this.menuEditorService.menuData[index].name.params['category'] = this.menuItemForm.get('category').value;
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => {
      value.unsubscribe();
    });
  }
}
