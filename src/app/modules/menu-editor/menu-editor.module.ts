import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuEditorComponent} from './menu-editor/menu-editor.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import {ButtonsModule} from "../../ui/buttons/buttons.module";
import {MenuItemEditorComponent} from './menu-item-editor/menu-item-editor.component';
import {MenuItemSubmenuEditorComponent} from './menu-item-submenu-editor/menu-item-submenu-editor.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MenuEditorService} from "./common/services/menu-editor.service";
import {SvgIconModule} from "../../ui/svg-icon/svg-icon.module";
import {SubmenuListPanelComponent} from './submenu-list-panel/submenu-list-panel.component';
import {CategoryMenuModule} from "../../core/category-menu/category-menu.module";

@NgModule({
  declarations: [
    MenuEditorComponent,
    MenuListComponent,
    MenuItemEditorComponent,
    MenuItemSubmenuEditorComponent,
    SubmenuListPanelComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    SvgIconModule,
    CategoryMenuModule
  ],
  providers: [
    MenuEditorService,
  ],
  exports: [
    MenuEditorComponent
  ]
})
export class MenuEditorModule { }
