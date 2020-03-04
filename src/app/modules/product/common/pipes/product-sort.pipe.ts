import {Pipe, PipeTransform} from '@angular/core';
import ProductFullModel from "../models/product-full.model";
import {SortTypeEnumMode} from "../../../../core/items-list/common/enums/sort-type.enum.mode";
import {SortFilterEnum} from "../../../../core/items-list/common/enums/sort-filter.enum";
import {SortContext} from "../../../../core/items-list/common/services/sort/sort-context";
import {AscSortStrategy} from "../../../../core/items-list/common/services/sort/asc-sort-strategy";
import {DescSortStrategy} from "../../../../core/items-list/common/services/sort/desc-sort-strategy";

@Pipe({
  name: 'productSort'
})
export class ProductSortPipe implements PipeTransform {
  sortContext = new SortContext<ProductFullModel>();

  transform(value: ProductFullModel[], filter: SortFilterEnum, sortMode: SortTypeEnumMode): ProductFullModel[] {
    if (!value) {
      return ;
    }

    if (sortMode === SortTypeEnumMode.ASC) {
      this.sortContext.setStrategy(new AscSortStrategy<ProductFullModel>())
    }

    if (sortMode === SortTypeEnumMode.DESC) {
      this.sortContext.setStrategy(new DescSortStrategy<ProductFullModel>())
    }

    return this.sortContext.sort(value, filter);
  }

}
