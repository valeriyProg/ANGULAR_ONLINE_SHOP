import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DefaultLayoutComponent} from "../../pages/default-layout/default-layout.component";
import {AdminHomeComponent} from "../../pages/admin-home-page/admin-home.component";
import {AdminComponentsComponent} from "../../pages/admin-components-page/admin-components.component";
import {ProductToolsComponent} from "../../components/product-tools/product-tools.component";
import {AddToolsComponent} from "../../components/add-tools/add-tools.component";
import {MenuComponent} from "../../components/category-menu/menu.component";

const adminRoutes: Routes = [
  {
    path: 'admin', component: DefaultLayoutComponent,
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: AdminHomeComponent
      },
      {
        path: 'components', component: AdminComponentsComponent,
        children: [
          { path: 'menu-editor', component: MenuComponent },
          { path: 'product-editor', component: ProductToolsComponent },
          { path: 'product-add', component: AddToolsComponent },
          //TODO: TO DELETE IN FUTURE ...
          // { path: 'product-editor', component: ProductToolsComponent },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
