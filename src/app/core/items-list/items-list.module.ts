import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import {ItemListService} from "./common/services/item-list.service";
import { ListFilterComponent } from './list-filter/list-filter.component';
import {ProductModule} from "../../modules/product/product.module";
import {SpinnerModule} from "../../ui/spinner/spinner.module";

@NgModule({
  declarations: [ItemListComponent, ListFilterComponent],
  imports: [
    CommonModule,
    ProductModule,
    SpinnerModule
  ],
  providers: [
    ItemListService
  ],
  exports: [
    ItemListComponent
  ]
})
export class ItemsListModule { }
