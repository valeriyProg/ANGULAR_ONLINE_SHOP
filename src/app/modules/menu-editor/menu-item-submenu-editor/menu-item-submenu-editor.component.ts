import { Component, OnInit } from '@angular/core';
import {MenuEditorService} from "../common/services/menu-editor.service";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import CategoryMenuItemModel from "../../../core/category-menu/common/models/category-menu-item.model";

@Component({
  selector: 'app-menu-item-submenu-editor',
  templateUrl: './menu-item-submenu-editor.component.html',
  styleUrls: ['./menu-item-submenu-editor.component.scss']
})
export class MenuItemSubmenuEditorComponent implements OnInit {
  menuData: CategoryMenuItemModel[];
  submenuForm: FormGroup;
  constructor(private menuEditorService: MenuEditorService, private fb: FormBuilder) { }

  ngOnInit() {
    this.menuEditorService.openSubmenuEditForm.subscribe(state=> {
      if (state) {
        this.menuData = this.menuEditorService.menuData;
        this.setDefaultSubmenuData();
      }
    });
  }

  get submenu(): FormArray {
    return this.submenuForm.get('submenu') as FormArray;
  }

  setDefaultSubmenuData() {
    this.menuEditorService.initTempSubMenu();
    const subMenuItemsControls = [];
    this.menuEditorService.tempSubmenu.items.forEach(item=> {
      subMenuItemsControls.push(
        this.fb.control(item.title)
      );
      subMenuItemsControls.push(
        this.fb.control(item.link)
      );
    });
    this.submenuForm = this.fb.group({
      title: `${this.menuEditorService.tempSubmenu.title.title}`,
      submenu: this.fb.array(subMenuItemsControls)
    });
  }

  addSubmenuElement(e: Event) {
    e.preventDefault();
    this.submenu.push(this.fb.control(''));
  }

  deleteSubmenuElement(index: number) {
    if (index%2) {
      this.submenu.controls.splice(index - 1, 2);
      return;
    }
    this.submenu.controls.splice(index, 2);
  }

  submit(): void  {
    const selectedItemIndex = this.menuEditorService.selectedItemIndex;
    const selectedSubmenuIndex = this.menuEditorService.selectedItemSubmenuIndex;
    const confirmedSubmenuData = this.submenu.controls;
    this.menuEditorService.tempSubmenu.title.title = this.submenuForm.get('title').value;
    this.menuEditorService.tempSubmenu.items = [];
    confirmedSubmenuData.forEach((item, index) => {
      if (index % 2 === 0) {
        this.menuEditorService.tempSubmenu.items.push({
          title: item.value,
          link: ''
        });
      } else {
        this.menuEditorService.tempSubmenu.items[(index - 1) / 2].link = item.value;
      }
    });
    this.menuData[selectedItemIndex].submenu[selectedSubmenuIndex] = this.menuEditorService.tempSubmenu;
    this.menuEditorService.hideSubmenuEditForm();
    this.menuEditorService.showSubmenuListPanel();
  }

  cancel(e: Event): void {
    e.preventDefault();
    this.setDefaultSubmenuData();
    this.menuEditorService.hideSubmenuEditForm();
    this.menuEditorService.showSubmenuListPanel();
  }
}
