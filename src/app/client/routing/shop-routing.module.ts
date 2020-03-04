import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShopProductComponent} from "../pages/shop-product-page/shop-product.component";

const routes: Routes = [
  {
    path: 'shop/product/:id', component: ShopProductComponent, data: { animation: 'ShopProduct' }
  }
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
export class ShopRoutingModule { }
