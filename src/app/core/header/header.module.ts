import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { LogoComponent } from './components/logo/logo.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {RouterModule} from "@angular/router";
import {CategoryMenuModule} from "../category-menu/category-menu.module";
import {ProductModule} from "../../modules/product/product.module";
import {CartModule} from "../../modules/cart/cart.module";

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    LogoComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CategoryMenuModule,
    ProductModule,
    CartModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
