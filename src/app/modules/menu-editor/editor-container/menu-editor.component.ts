import { Component } from '@angular/core';
import {MenuEditorService} from "../common/services/menu-editor.service";
import {HttpEventType} from "@angular/common/http";
import {CategoryMenuService} from "../../../core/category-menu/common/services/category-menu.service";

@Component({
  selector: 'app-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.scss']
})
export class MenuEditorComponent {
  uploading: boolean = false;
  restoring: boolean = false;

  constructor(private menuEditorService: MenuEditorService,
              private categoryService: CategoryMenuService) { }

  upload(): void {
    this.uploading = true;
    this.categoryService.updateList(this.menuEditorService.menuData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.uploading = false;
        this.categoryService.onUploadList.next(true);
      }
    });
  }

  restore(): void {
    this.restoring = true;
    this.categoryService.getMenu().subscribe(data => {
      this.menuEditorService.menuData = data;
      this.restoring = false;
      this.categoryService.onUploadList.next(true);
    })
  }
}
