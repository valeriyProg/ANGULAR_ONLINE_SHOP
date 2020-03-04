import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./core/errors/page-not-found/page-not-found.component";
import {DefaultLayoutComponent} from "./client/pages/default-layout/default-layout.component";
import {HomePageComponent} from "./client/pages/home-page/home-page.component";
import {ShopComponent} from "./client/pages/shop-page/shop.component";
import {ShopProductComponent} from "./client/pages/shop-product-page/shop-product.component";
import {CartPageComponent} from "./client/pages/cart-page/cart-page.component";

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent,  data: { animation: 'ShopProduct' },
    children: [
      {
        path: '', component: HomePageComponent, data: { animation: 'HomePage' }
      },
      {
        path: 'shop', component: ShopComponent, data: { animation: 'ShopHomePage' }
      },
      {
        path: 'shop/product/:id', data: { animation: 'ShopProduct' }, component: ShopProductComponent ,
      },
      {
        path: 'shop/cart', data: { animation: 'CartPage' }, component: CartPageComponent,
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
