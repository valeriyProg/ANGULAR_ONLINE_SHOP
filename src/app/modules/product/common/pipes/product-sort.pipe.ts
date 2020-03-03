import {Pipe, PipeTransform} from '@angular/core';
import ProductFullModel from "../models/product-full.model";
import {SortTypeEnumMode} from "../../../../core/items-list/common/enums/sort-type.enum.mode";
import {SortFilterEnum} from "../../../../core/items-list/common/enums/sort-filter.enum";

@Pipe({
  name: 'productSort'
})
export class ProductSortPipe implements PipeTransform {
  //TODO: REPLACE SOME FUNCTIONAL TO STRATEGY
  transform(value: ProductFullModel[], filter: SortFilterEnum, sortMode: SortTypeEnumMode): ProductFullModel[] {
    if (!value) {
      return ;
    }
    if (filter === SortFilterEnum.NAME) {
      return this.sortByName(value, sortMode);
    }
    if (filter === SortFilterEnum.PRICE) {
      return this.sortByPrice(value, sortMode);
    }
  }

  private sortByName(items: ProductFullModel[], order: SortTypeEnumMode): ProductFullModel[] {
    if (order === SortTypeEnumMode.ASC) {
      return items.sort((value1, value2) => {
        if (value1.name.title > value2.name.title) {
          return - 1
        } else if (value1.name.title < value2.name.title) {
          return 1
        } else {
          return 0
        }
      });
    }
    return items.sort((value1, value2) => {
      if (value1.name.title < value2.name.title) {
        return - 1
      } else if (value1.name.title > value2.name.title) {
        return 1
      } else {
        return 0
      }
    });
  }

  private sortByPrice(items: ProductFullModel[], order: SortTypeEnumMode): ProductFullModel[] {
    if (order === SortTypeEnumMode.ASC) {
      return items.sort((a, b) => {
        if (a.price > b.price) {
          return - 1
        } else if (a.price < b.price) {
          return 1
        } else {
          return 0
        }
      });
    }
    return items.sort((a, b) => {
      if (a.price < b.price) {
        return - 1
      } else if (a.price > b.price) {
        return 1
      } else {
        return 0
      }
    });
  }
}
