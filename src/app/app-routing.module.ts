import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./core/errors/components/page-not-found/page-not-found.component";
import {DefaultLayoutComponent} from "./client/pages/default-layout/default-layout.component";
import {ShopProductsComponent} from "./client/pages/shop-products/shop-products.component";
import {HomePageComponent} from "./client/pages/home-page/home-page.component";
import {ShopComponent} from "./client/pages/shop/shop.component";
import {ShopProductComponent} from "./client/pages/shop-product/shop-product.component";
import {CartPageComponent} from "./client/pages/cart-page/cart-page.component";

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent,
    children: [
      {
        path: '', component: HomePageComponent, data: { animation: 'HomePage' }
      },
      {
        path: 'shop', component: ShopComponent, data: { animation: 'ShopHomePage' }
      },
      {
        path: 'shop/products', component: ShopProductsComponent,
      },
      {
        path: 'shop/product/:id', component: ShopProductComponent ,
      },
      {
        path: 'shop/cart', component: CartPageComponent,
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent, data: { animation: 'HomePage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: false, /////////
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      enableTracing: false,
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }