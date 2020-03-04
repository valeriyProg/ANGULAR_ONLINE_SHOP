import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DefaultLayoutComponent} from "../../pages/default-layout/default-layout.component";
import {AdminHomeComponent} from "../../pages/admin-home-page/admin-home.component";
import {AdminComponentsComponent} from "../../pages/admin-components-page/admin-components.component";
import {ProductToolsComponent} from "../../components/product-tools/product-tools.component";
import {AddToolsComponent} from "../../components/add-tools/add-tools.component";
import {MenuComponent} from "../../components/category-menu/menu.component";
import {AdminCategoryPageComponent} from "../../pages/admin-category-page/admin-category-page.component";

const adminRoutes: Routes = [
  {
    path: 'admin', component: DefaultLayoutComponent, data: { animation: 'AdminPanel' },
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: AdminHomeComponent, data: { animation: 'AdminHome' }
      },
      {
        path: 'components', component: AdminComponentsComponent, data: { animation: 'AdminComponents' },
        children: [
          { path: 'menu-editor', component: MenuComponent, data: { animation: 'AdminMenuEditor' } },
          { path: 'product-editor', component: ProductToolsComponent, data: { animation: 'AdminProductEditor' } },
          { path: 'product-add', component: AddToolsComponent, data: { animation: 'AdminProductAdd' } },
          { path: 'categories', component: AdminCategoryPageComponent, data: { animation: 'AdminProductAdd' } },

          //TODO: TO DELETE IN FUTURE ...
          // { path: 'product-editor', component: ProductToolsComponent },
        ]
      }, {
        path: 'categories', component: AdminCategoryPageComponent,  data: { animation: 'AdminCategories' }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
