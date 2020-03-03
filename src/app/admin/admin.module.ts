import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from "./routing/admin-routing/admin-routing.module";
import { DefaultLayoutComponent } from './pages/default-layout/default-layout.component';
import { AdminHomeComponent } from './pages/admin-home-page/admin-home.component';
import {RouterModule} from "@angular/router";
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';
import { AdminComponentsComponent } from './pages/admin-components-page/admin-components.component';
import {AsideBarService} from "./common/services/aside-bar.service";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { PreviewComponent } from './components/preview/preview.component';
import {SvgIconModule} from "../ui/svg-icon/svg-icon.module";
import {ClientModule} from "../client/client.module";
import {MenuEditorModule} from "../modules/menu-editor/menu-editor.module";
import { ProductToolsComponent } from './components/product-tools/product-tools.component';
import {ProductModule} from "../modules/product/product.module";
import {ProductProvider} from "../modules/product/common/providers/product.provider";
import { EditLayoutComponent } from './components/edit-layout/edit-layout.component';
import { AddToolsComponent } from './components/add-tools/add-tools.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatDividerModule} from "@angular/material/divider";
import {BrandModule} from "../modules/brand/brand.module";
import {ChocolateTypeModule} from "../modules/chocolate-type/chocolate-type.module";
import {PackTypeModule} from "../modules/pack-type/pack-type.module";
import {MenuComponent} from "./components/category-menu/menu.component";
import {AddToolsService} from "./common/services/add-tools.service";
import { OrderListComponent } from './components/order-list/order-list.component';
import {CategoryMenuModule} from "../core/category-menu/category-menu.module";
import {PromoModule} from "../modules/promo/promo.module";

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AsideBarComponent,
    AdminComponentsComponent,
    PreviewComponent,
    ProductToolsComponent,
    EditLayoutComponent,
    AddToolsComponent,
    MenuComponent,
    OrderListComponent
  ],
  providers: [
    AsideBarService,
    ProductProvider,
    AddToolsService
  ],
  imports: [
    CommonModule,
    ClientModule,
    SvgIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MenuEditorModule,
    SvgIconModule,
    ProductModule,
    MatTabsModule,
    MatDividerModule,
    BrandModule,
    ChocolateTypeModule,
    PackTypeModule,
    PromoModule,
    CategoryMenuModule,
    RouterModule,
    AdminRoutingModule,
  ],
  exports: [
    DefaultLayoutComponent,
    AdminHomeComponent,
    MenuComponent
  ]
})
export class AdminModule { }
