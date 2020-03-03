import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './pages/shop/shop.component';
import {ShopProductsComponent} from './pages/shop-products/shop-products.component';
import {ShopProductComponent} from './pages/shop-product/shop-product.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {DefaultLayoutComponent} from './pages/default-layout/default-layout.component';
import {HeaderModule} from "../core/header/header.module";
import {FooterModule} from "../core/footer/footer.module";
import {ProductModule} from "../modules/product/product.module";
import {CategoryMenuModule} from "../core/category-menu/category-menu.module";
import { HomePageComponent } from './pages/home-page/home-page.component';
import {BannerModule} from "../modules/banner/banner.module";
import {MatDividerModule} from "@angular/material/divider";
import {ItemsListModule} from "../core/items-list/items-list.module";
import {RoadNavModule} from "../core/road-nav/road-nav.module";
import {CategoryModule} from "../modules/category/category.module";
import {RouterModule} from "@angular/router";
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import {CartModule} from "../modules/cart/cart.module";
import {SpinnerModule} from "../ui/spinner/spinner.module";

@NgModule({
  declarations: [
    ShopComponent,
    ShopProductsComponent,
    ShopProductComponent,
    DefaultLayoutComponent,
    HomePageComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    ProductModule,
    CategoryMenuModule,
    BannerModule,
    MatDividerModule,
    ItemsListModule,
    RoadNavModule,
    CategoryModule,
    RouterModule,
    CartModule,
    SpinnerModule
  ],
  exports: [
    ShopComponent,
  ]
})
export class ClientModule { }
