import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShopProductComponent} from "../pages/shop-product/shop-product.component";

const routes: Routes = [
  {
    path: 'shop/product/:id', component: ShopProductComponent, data: { animation: 'ShopHomePage' }
  }
  //TODO: TO DELETE IN FUTURE
  // {
  //   path: 'category', component: ShopDefaultLayoutComponent,
  //   children: [
  //     {
  //       path: 'products', component: ShopProductsComponent
  //     }
  //   ]
  // },
  // {
  //   path: 'shop/products', component: ShopProductsComponent
  // },
  // { path: '**', component: PageNotFoundComponent }
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
